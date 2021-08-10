import '../styles/globals.css'
import '@config/firebase.config'
import { AuthProvider } from '@hooks/auth'
import AuthStateChanged from '@components/layout/AuthStateChanged'

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<AuthStateChanged>
				<Component {...pageProps} />
			</AuthStateChanged>
		</AuthProvider>
	)
}

export default MyApp
