// TODO: (1) ထည့်သွင်းဖို့မမေ့ပါနဲ့။
import { withPublic } from '@hooks/routes'

function Login({ auth }) {
	// TODO: (2) ဒါကတော့ Context Provider ကနေ ရလာတဲ့ဒေတာတွေနဲ့ Login ဝင်နိုင်ဖို့ကြေညာထားတာပါ။
	const { user, loginWithGoogle, error } = auth

	return (
		<div className='googleSignIn'>
			{error && <h3 className='error'>{error}</h3>}
			<button onClick={loginWithGoogle}>Sign in with Google</button>
			<p>{user?.uid}</p>
		</div>
	)
}

export default withPublic(Login)
