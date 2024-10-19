const express=require('express')
const app=express()
const PORT=3000;

app.use(express.urlencoded({extended:false}))

const users=[
    {
        name:"Md. Jillur Rahman",
        age:27
    },
    {
        name:"Md. Muhit Rahman",
        age:30
    },
    

]

const htmlForm=`
<form method="POST" action="/users">
<input type="text" name="name" placeholder="Enter Your Name"/>
<input type="number" name="age" placeholder="Enter Your Age"/>
<button type="submit">Save User</button>
</form>

`

app.get("/users",(req,res)=>{
  res.send(htmlForm)
})

app.post("/users",(req,res)=>{
  const name=req.body.name
  const age=Number(req.body.age)

  const user={
    name,
    age
  }

  users.push(user);
  res.status(201).json({
    success:true,
    users
  })
  

})
app.use((req,res,next)=>{
   res.status(404).json({
    message:"Resource not found"
   })
})
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)

})