import { betterAuth } from 'better-auth/minimal'

const auth = betterAuth({
	secret: 'd364b08a1bc015edb163be932fd70fbc4ae9dcecafde2939b0461905a4c8dcc5',
	disabledPaths: ['/ok']
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
