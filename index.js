const express=require('express')
const app=express()
const PORT=3000;

const userRouter=require('./routes/users.route')

app.use(express.urlencoded({extended:false}))
app.use(userRouter)





app.use((req,res,next)=>{
   res.status(404).json({
    message:"Resource not found"
   })
})
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)

})