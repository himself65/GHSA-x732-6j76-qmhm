import { betterAuth } from 'better-auth/minimal'

const auth = betterAuth({
	secret: 'test'
})

export default {
	async fetch (request: Request) {
		const url = new URL(request.url)
		if (url.pathname.startsWith('/api/auth')) {
			return auth.handler(request)
		}
		return new Response('Not found', { status: 404 })
	}
}
