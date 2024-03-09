const express = require('express');
const {mongoose} = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config(); // Load environment variables from .env file(sensitive files)

const app = express();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to MongoDB'))
.catch((err)=>{
    console.log(err);
})

//middleware
app.use(express.json());
    



// Middlewares
// app.use(bodyParser.json());
// app.use(cors());

// MongoDB connection
// Local mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5
// mongoose.connect('mongodb+srv://Deshan:gzYCMEBwZ3nghyxz@cluster0.v8dynrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// Routes
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

app.use('/' , require('./routes/authRoutes'))



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
