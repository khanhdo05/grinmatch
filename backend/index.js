const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./graphql/schema')
const { auth } = require('./firebase')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    // root route http://localhost:4000/
    res.send('Hello World!')
})
// Setup GraphQL Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || ''
        return { token, auth }
    },
})

server.start().then(() => {
    server.applyMiddleware({ app })

    // Start the server
    app.listen({ port: process.env.PORT || 4000 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
    )
})
