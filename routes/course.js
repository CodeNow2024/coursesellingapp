const {Rourter} = require("express")

const courseRouter = Rourter();

courseRouter.get("/preview",(req,res)=> {
    res.json({
        msg : "Course Preview Endpoint"
    })
});

courseRouter.post("/course",(req,res)=> {
    res.json({
        msg : "Course Purchase Endpoint"
    })
});


module.exports = {
    courseRouter:courseRouter
}