import useAuth from './auth'
import { useRouter } from 'next/router'

export function withPublic(Component) {
	return function withPublic(props) {
		const auth = useAuth()
		const router = useRouter()

		if (auth.user) {
			router.replace('/')

			return (
				<div className='loading'>
					<h1>Checking...</h1>
				</div>
			)
		}

		return <Component auth={auth} {...props} />
	}
}

export function withProtected(Component) {
	return function withProtected(props) {
		const auth = useAuth()
		const router = useRouter()

		if (!auth.user) {
			router.replace('/login')

			return (
				<div className='loading'>
					<h1>Checking...</h1>
				</div>
			)
		}

		return <Component auth={auth} {...props} />
	}
}
