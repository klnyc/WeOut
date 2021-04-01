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
            args: { id: { type: GraphQLID }, name: { type: GraphQLString } },
            resolve(parent, args) {
                const query = `SELECT * from users WHERE name='${args.name}'`
                return client.query(query)
                .then((response) => {
                    console.log(response.rows[0])
                    return response.rows[0]
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery })