const {Router} = require("express");
const adminRouter = Router();


adminRouter.post('/signup', (req,res) => {
    res.json({
        msg : "Sign up Endpoint"
})
})

adminRouter.post('/signin', (req,res) => {
    res.json({
        msg : "Sign in Endpoint"
})
})

adminRouter.post('/course', (req,res) => {
    res.json({
        msg : "Course Endpoint"
})
})


modules.export = {
    adminRouter : adminRouter
}