const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const path = require('path')
const schema = require('./schema')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))
app.use('/graphql', graphqlHTTP ({ schema, graphiql: true }))
app.listen(process.env.PORT || 3000, () => console.log('Server is listening on Port 3000'))