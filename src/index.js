const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutations')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
    Query,
    Mutation,
}


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        } 
    },
})

server.start(() => console.log(`Server running on localhost:4000`))