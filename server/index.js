const taskRouter = require('./routes/taskRoutes');
const cors = require('cors')

const express = require('express')
const app = express();


app.use(express.json());
app.use(cors())

app.use('/tasks', taskRouter)

app.listen(3001, () => {
    console.log('up na porta 3001')
})