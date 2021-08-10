import { withProtected } from '@hooks/routes'
import { useRouter } from 'next/router'

function AdminPanel({ auth }) {
	const { logOut } = auth
	const router = useRouter()

	return (
		<div className='adminPanel'>
			<p>
				<strong>
					This is an admin page where after you had successfully logged in.
				</strong>
			</p>
			<button onClick={logOut}>Log out</button>
			<button onClick={() => router.replace('/')}>Back to home.</button>
		</div>
	)
}

export default withProtected(AdminPanel)
