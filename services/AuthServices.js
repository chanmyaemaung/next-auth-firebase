// TODO: (1) ဒီနှစ်ခုကို ထည့်သွင်းဖို့မမေ့ပါနဲ့
import firebase from 'firebase/app'
import 'firebase/auth'

// TODO: (2) AuthService Object တစ်ခုတည်ဆောက်ပြီး ဖန်ရှင်တွေကို အလွယ်ခေါ်သုံးနိုင်သည်။
export const AuthService = {
	// TODO: (3) Google အကောင့်ဖြင့် Login ဝင်နိုင်ရန်။
	loginWithGoogle: async () => {
		// * Firebase မှ ခွင့်ပြုထားသော Provider ကို ကြေညာပေးရပါမယ်။
		const provider = new firebase.auth.GoogleAuthProvider()

		// * Try & Catch နဲ့ ကျစ်လစ်အောင် ရေးရင် ပိုကောင်းပါတယ်။
		try {
			// * ဒီကောင်က Google Acc နဲ့ Login ဝင်ပြီးသွားရင် ရလာမယ့် ဒေတာ Objects တွေဖြစ်ပါတယ်။
			const userCred = await firebase.auth().signInWithPopup(provider)

			// * Return ပြန်ဖို့မမေ့ပါနဲ့
			return {
				user: userCred.user,
			}
		} catch (error) {
			// * Error တွေ့ရင် လှမ်းဖမ်းပြီး ဘာပြဿနာတက်ကြောင်း ကြည့်ဖို့အတွက်။
			return {
				error: error.message,
			}
		}
	},
	// TODO: (4) အကောင့်ပြန်ထွက်နိုင်ရန်။
	logOut: async () => {
		await firebase.auth().signOut()
	},
}
