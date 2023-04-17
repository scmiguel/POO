import Fastify from 'fastify'
const app = Fastify()
app.get(`/hello`, () => {
	return 'Hello World'
})
app.listen({
    port: 3333,
})
.then( () => {
    console.log('Http Server running')
})
