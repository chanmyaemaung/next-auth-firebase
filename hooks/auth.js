// TODO: (1) ဒီနှစ်ခုကို ထည့်သွင်းဖို့မမေ့ပါနဲ့
import { createContext, useContext, useState } from 'react'
import { AuthService } from '@services/AuthServices'

// TODO: (2) AuthContext Variable တစ်ခုမဖြစ်မနေတည်ဆောက်ရမယ်။
const AuthContext = createContext()

// TODO: (3) ဒီဖန်ရှင်ကို တစ်ခြား Components တွေကနေ အသုံးပြုနိင်အောင်
export default function useAuth() {
	return useContext(AuthContext)
}

// TODO: (4) AuthProvider ကတော့ မပါမဖြစ် တည်ဆောက်ရမှာဖြစ်တယ်။
export function AuthProvider(props) {
	const [user, setUser] = useState(null)
	const [error, setError] = useState('')

	// * Google အကောင့်ဖြင့် Login ဝင်ရောက်နိုင်ရန် ဖန်ရှင်တည်ဆောက်ခြင်း
	const loginWithGoogle = async () => {
		const { user, error } = await AuthService.loginWithGoogle()

		// * တစ်ကယ်လို့ user, error တစ်ခုခု ဒေတာရလာရင် ထည့်သွင်းမယ်။ မရခဲ့ရင်တော့ nullable  လုပ်ပစ်မယ်။
		setUser(user ?? null)
		setError(error ?? '')
	}

	// * ဒါကတော့ ကြိမ်းသေပေါက် Logout လုပ်ဖို့ပေါ့
	const logOut = async () => {
		await AuthService.logOut()
		setUser(null)
	}

	// * ဖန်တီးခဲ့တဲ့ ဖန်ရှင်မှ ရလာတဲ့ဒေတာတွေကို အလွယ်ခေါ်သုံးနိုင်ရန်
	const value = { user, error, loginWithGoogle, logOut, setUser }

	// * Return ပြန်ဖို့တော့ မမေ့ရဘူးနော်... value ဆိုတာက ရတာတဲ့ ဒေတာအားလုံး။ ...props ဆိုတာက
	// * နောက်ထပ် တစ်ခြားနေရာကနေ Props အများကြီးခံသုံးနိုင်အောင်
	// * Spread Operator အနေနဲ့သုံးပြီး ရေးလိုက်တာ
	return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}
