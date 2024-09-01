const admin = require('firebase-admin')
const serviceAccount = require('path/to/serviceAccountKey.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://grinmatch-f46fc-default-rtdb.firebaseio.com',
})

const db = admin.firestore()
const auth = admin.auth()

module.exports = { db, auth }
