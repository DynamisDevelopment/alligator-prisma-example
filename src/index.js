import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma-dist'
import { Query, Mutation, Subscription } from './resolvers'

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: {
        Query,
        // Mutation,
        // Subscription
    },
    context: { prisma }
})

server.start(() => console.log('server running'))