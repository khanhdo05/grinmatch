import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    // root route http://localhost:4000/
    res.send('Hello World!')
})

app.use('/api/auth', authRoutes)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:4000`))
