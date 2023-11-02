const express = require("express")
const dotenv = require("dotenv")
const db = require("../config/db.js")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRoutes = require("./routes/authRoutes")
const clientRoutes  = require('./routes/clientRoutes')
const deliveryRoutes = require('./routes/deliveryRoutes')


const app = express()

app.use(express.json())
app.use(cookieParser());

dotenv.config()

app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/auth", clientRoutes);
app.use("/api/auth", deliveryRoutes);

const PORT = process.env.PORT
db()
app.listen(PORT, () => console.log(`server is running on port ${PORT}`) )

// Swagger

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation for the API endpoints',
      },
      servers:[
        {
            url: 'http://localhost:8080/'
        }
      ]
    },
    apis: ['src/routes/authRoutes.js', 'src/routes/clientRoutes.js', 'src/routes/deliveryRoutes.js'],
  };

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

