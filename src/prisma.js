import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'prisma/generated.graphql',
    endpoint: 'http://192.168.99.100:4466/'
})

export default prisma