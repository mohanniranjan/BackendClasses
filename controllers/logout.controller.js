

const empLogout=async(req,res)=>{
    res.clearCookie("emplyee")
    res.json({
        message:"logout successfully"
        
    })
}

module.exports={empLogout}