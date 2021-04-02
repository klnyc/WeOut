const graphql = require('graphql')
const { Client } = require('pg')
const client = new Client('postgres://localhost:5432/WeOut')
client.connect()

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { email: { type: GraphQLString }, password: { type: GraphQLString } },
            resolve(parent, args) {
                const query = `SELECT * from users WHERE email='${args.email}' AND password='${args.password}'`
                return client.query(query)
                .then((response) => response.rows[0])
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery })