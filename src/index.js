import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma-dist'

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: {},
    context: { prisma }
})

server.start(() => console.log('server running'))