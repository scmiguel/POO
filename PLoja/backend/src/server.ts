import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const app = Fastify()
app.get(`/hello`, () => {
	return 'Hello World'
})
app.get(`/products`, async () => {
    const habits = await prisma.product.findMany()
    return habits
})
app.listen({
    port: 3333,
})
.then( () => {
    console.log('Http Server running')
})
