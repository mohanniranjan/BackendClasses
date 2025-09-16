const express=require("express")

const app=express()

app.use(express.json())

const employees=[
    {
        id:1,
        name:"rahul"
    },{
        id:2,
        name:"charan"

    }
]


app.get("/",(req,res)=>{
    res.json({message:"welcome to node js"})

})
app.get("/employees",(req,res)=>{
    res.json(employees)
})

app.get('/employee/:id',(req,res)=>{
    const id=req.params.id
    const emp=employees.find((emp)=>{
        if(emp.id==id){
            return emp
        }
    })
    if(emp){
        res.json({data:emp})
    }else{
        res.json({message:"employee not found"})
    }
}
)

app.post("/employee",(req,res)=>{
   const {name}=req.body
   const newid=employees.length+1
    employees.push({id:newid,name:name})
    res.json({message:"employee created successfully",data:employees})
})


app.put("/employee/:id",(req,res)=>{
    const id=req.params.id
    const {name}=req.body
    const newEmployeesData=employees.map((emp)=>{
        if(emp.id==id){
            return {...emp,name:name}
        }else{
            return emp
        }

    })

    res.json({message:"EMployee updated successfully",data:newEmployeesData})


})


app.delete("/employee/:id",(req,res)=>{
    const id=req.params.id
    const newEmployeesData =employees.filter((emp)=>{
        if(emp.id!=id){
            return emp
        }
    })

    res.json({message:"employee deleted successfully",data:newEmployeesData})



})




app.listen(3500,()=>{
    console.log("server is runing at http://localhost:3500")
})