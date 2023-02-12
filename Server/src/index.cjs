
const express= require("express");
require("./db/mongoose.cjs");
const AddAccount = require("./models/addaccount.cjs");
const CreateCustomer = require("./models/createcustomer.cjs");
const Customer= require ("./models/login.cjs")
const cors =require ("cors");

const app = express();
const port = process.env.PORT ||8080;

app.use(express.json());
app.use(cors());

app.post("/addaccount", (req, res)=>{
    const addaccount = new AddAccount(req.body);

    addaccount
    .save()
    .then(() => {
        res.send(addaccount)
    })
    .catch((error) => {
        console.log (error)
        res.status(400).send(error)
    })
})
app.post("/createcustomer", (req, res)=>{
    const createcustomer = new CreateCustomer(req.body);

    createcustomer
    .save()
    .then(() => {
        res.send(createcustomer)
    })
    .catch((error) => {
        console.log (error)
        res.status(400).send(error)
    })
})
app.get("/customer", (req,res) =>{
    const customer = new Customer (req.body);

    customer
    .save()
    .then(() => {
        res.send(customer)
    })
    .catch((error)=>{
        console.log (error)
        res.status(400).send (error)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});