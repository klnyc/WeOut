const { query } = require('express')
const graphql = require('graphql')
const { Client } = require('pg')
const client = new Client('postgres://localhost:5432/WeOut')
client.connect()

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        circles: {
            type: new GraphQLList(CircleType),
            resolve(parent, args) {
                const queryCircles = `
                SELECT circle.id, circle.name, circle.description
                FROM circle INNER JOIN user_circle 
                ON user_circle.circleid = circle.id
                WHERE user_circle.userid=${parent.id}
                `
                return client.query(queryCircles)
                .then((response) => response.rows)
            }
        },
        events: {
            type: new GraphQLList(EventType),
            resolve(parent, args) {
                const queryEvents = `
                SELECT event.id, event.name, event.location, event.description, event.date, event.time
                FROM ((circle 
                INNER JOIN user_circle ON user_circle.circleid = circle.id)
                INNER JOIN event ON circle.id = event.circleid)
                WHERE user_circle.userid=${parent.id}
                `
                return client.query(queryEvents)
                .then((response) => response.rows)
            }
        }
    })
})

const CircleType = new GraphQLObjectType({
    name: 'Circle',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString }
    })
})

const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        location: { type: GraphQLString },
        description: { type: GraphQLString },
        date: { type: GraphQLString },
        time: { type: GraphQLString },
        circle: {
            type: CircleType,
            resolve(parent, args) {
                const queryCircle = `
                SELECT circle.id, circle.name, circle.description
                FROM event INNER JOIN circle
                ON event.circleid = circle.id
                WHERE event.id = ${parent.id}
                `

                return client.query(queryCircle)
                .then((response) => response.rows[0])
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { email: { type: GraphQLString }, password: { type: GraphQLString } },
            resolve(parent, args) {
                const queryUser = `
                SELECT * FROM users 
                WHERE email='${args.email}' 
                AND password='${args.password}'
                `
                return client.query(queryUser)
                .then((response) => response.rows[0])
            }
        },
        circle: {
            type: CircleType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                const queryCircle = `
                SELECT * FROM circle
                WHERE id='${args.id}'
                `
                return client.query(queryCircle)
                .then((response) => response.rows[0])
            }
        },
        event: {
            type: EventType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                const queryEvent = `
                SELECT * FROM event
                WHERE id='${args.id}'
                `
                return client.query(queryEvent)
                .then((response) => response.rows[0])
            }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signUp: {
            type: UserType,
            args: { email: { type: GraphQLString }, password: { type: GraphQLString }, name: { type: GraphQLString } },
            resolve(parent, args) {
                const queryCreateUser = `
                INSERT INTO users (email, password, name) 
                VALUES ('${args.email}', '${args.password}', '${args.email}')
                `

                const queryUser = `
                SELECT * FROM users
                WHERE email='${args.email}' 
                AND password='${args.password}'
                `

                return client.query(queryCreateUser)
                .then(() => client.query(queryUser))
                .then((response) => response.rows[0])
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })