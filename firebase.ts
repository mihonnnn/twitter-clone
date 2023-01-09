import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB4EcIWo36RcsDtHkzn9xjCQV7bC2mRbjw',
  authDomain: 'twitter-clone-c18fa.firebaseapp.com',
  projectId: 'twitter-clone-c18fa',
  storageBucket: 'twitter-clone-c18fa.appspot.com',
  messagingSenderId: '355802766649',
  appId: '1:355802766649:web:d20a0849bb287fa75e5ce8',
  measurementId: 'G-QR0QSTNSJF',
}

const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default firestore
