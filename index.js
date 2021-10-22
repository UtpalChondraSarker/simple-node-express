const express = require('express')
const cors=require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const port = 5000

app.get('/',(req,res)=>{
    res.send('Hello from my send node server in the side,wow')
})

const users=[
    {id:0,name:"utpal",email:"utpalsarker@gmail.com",phone:"01786543"},
    {id:1,name:"sushtnto",email:"sushantosarker@gmail.com",phone:"01986543"},
    {id:2,name:"shanto",email:"shantosarker@gmail.com",phone:"017786543"},
    {id:3,name:"chinmoy",email:"chimoysarker@gmail.com",phone:"015786543"},
    {id:4,name:"raju",email:"rajusarker@gmail.com",phone:"01386543"},
    {id:5,name:"rakib",email:"rakibsarker@gmail.com",phone:"01786543"},
    {id:6,name:"alamin",email:"alaminsarker@gmail.com",phone:"013786543"},
]

app.get('/users',(req,res)=>{
    const search=(req.query.search);
    if(search){
        const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult  )
    }
    else{
        res.send(users)
    }
 
})

//app method
app.post('/users',(req,res)=>{
    const newUser=req.body;
    newUser.id=users.length;
    users.push(newUser);
    console.log('hitting post',req.body)
    //res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user);
})
app.get('/fruits',(req,res)=>{
        res.send(['mango','orange','apple','banana'])
})

app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('this is fruit fazli');
})

app.listen(port,()=>{
    console.log("Listening to port",port)
})