import express from 'express'

const router = express.Router()

router.get('/signup', (req, res) => {
    // signup route http://localhost:4000/api/auth/signup
    res.send('sign up route')
})

router.get('/signin', (req, res) => {
    // signup route http://localhost:4000/api/auth/signin
    res.send('sign in route')
})

export default router
