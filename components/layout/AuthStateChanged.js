// TODO: (1) ဒီထိပ်ဆုံးနှစ်ခုကို ထည့်သွင်းဖို့မမေ့ပါနဲ့
import useAuth from '@hooks/auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useEffect, useState } from 'react'

// TODO: (2) ဒါကတော့ အဓိက Main Function ပေါ့နော်...
export default function AuthStateChanged({ children }) {
	// * ဒါကတော့ ကျွန်တော်တို့ hooks/auth.js မှာ ကြေညာခဲ့တဲ့ setUser ဆိုတာကို ခေါသုံးလိုက်တာပါ။
	const { setUser } = useAuth()
	const [checking, setChecking] = useState(true)

	// * App စစဖွင့်ခြင်းမှာ ဒေတာတွေကို တစ်ကြိမ်ပဲ ခေါ်သုံးနိုင်တယ်။
	useEffect(() => {
		// * Firebase ကနေ ရလာတဲ့ AuthStageChanged ဖန်ရှင်ကို ကြေညာပေးခြင်း
		firebase.auth().onAuthStateChanged((user) => {
			// * ဒေတာရရင် ပို့မယ်။
			setUser(user)
			// * မရခဲ့ရင် Loading ပြမယ်။
			setChecking(false)
		})

		// * eslint-disable-next-line
	}, [])

	// * တကယ်လို့ တစ်ခုခု အကောင့်ဝင်တာသို့မဟုတ် တစ်ခုခုကြာနေတာဖြစ်ခဲ့ရင် Loading လေးလှမ်းပြမယ်။
	if (checking) {
		return (
			<div className='loading'>
				<h1>Checking...</h1>
			</div>
		)
	}

	// * Children ဆိုတာက ဒီ Layout ထဲက မည်သည့် Components ကိုမဆို အပေါ်က AuthState ထဲက ဒေတာတွေ ခေါ်သုံးနိုင်အောင်ပါ။
	return children
}
