// console.log("zaaaaa");
import express from "express"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
const app = express();
const port = 5000;
const options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title: "WebApi demo api",
            version: '1.0.0'
        }
    },
    apis: ['./index.js',
    './routes/*.js'],
}
app.get('/', (req, res) => {
res.send('Hello World!')
})
 
app.listen(port, () => {
console.log(`Server is listening at http: //localhost:port`)
})