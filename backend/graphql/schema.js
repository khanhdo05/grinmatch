const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        pronouns: String!
        email: String!
        startYear: Int!
        endYear: Int!
        major: String!
        alumni: Boolean!
        industry: String!
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }

    type Mutation {
        createUser(
            firstName: String!
            lastName: String!
            pronouns: String!
            email: String!
            startYear: Int!
            endYear: Int!
            major: String!
            alumni: Boolean!
            industry: String!
        ): User
    }
`

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            const snapshot = await context.db.collection('users').get()
            return snapshot.docs.map((doc) => doc.data())
        },
        user: async (parent, { id }, context) => {
            const userDoc = await context.db.collection('users').doc(id).get()
            return userDoc.data()
        },
    },
    Mutation: {
        createUser: async (parent, args, context) => {
            const userRef = context.db.collection('users').doc()
            const user = { id: userRef.id, ...args }
            await userRef.set(user)
            return user
        },
    },
}

module.exports = { typeDefs, resolvers }
