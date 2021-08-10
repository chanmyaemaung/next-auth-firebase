// TODO: (1) မပါမဖြစ် ကြေညာပါ။
import firebase from 'firebase/app'

// TODO: (2) Firebase Project ထဲကနေ သွားယူနိုင်ပါသည်။
const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
}

// TODO: (3) အကယ်၍ Firebase ချိတ်ဆက်ခြင်း ပြဿနာမတွေ့ရင် Run နိုင်ရန်။
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig)
}
