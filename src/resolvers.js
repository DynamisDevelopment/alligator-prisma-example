const Query = {
    posts(parent, args, { prisma }, info) { return prisma.query.posts(null, info) }
}

const Mutation = {
    async addPost(parent, { data }, { prisma }, info) {
        return prisma.mutation.createPost({ data }, info)
    },
    async updatePost(parent, args, { prisma }, info) {
        return prisma.mutation.updatePost({
            where: { id: args.id },
            data: args.data
        }, info)
    },
    async deletePost(parent, args, { prisma }, info) {
        return prisma.mutation.deletePost({ where: { id: args.id } }, info)
    }
}

const Subscription = {
    post: {
        subscribe(parent, args, { prisma }, info) {
            return prisma.subscription.post({ where: { node: { id: args.id } } })
        }
    }

}

module.exports = {
    Query,
    Mutation,
    Subscription
}