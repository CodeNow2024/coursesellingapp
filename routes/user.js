const {Rourter} = require('express');
const userRouter = Rourter();

userRouter.post('/signup', (req, res) => {
    res.json({
    msg : "Sign up Endpoint"
})
})

userRouter.post('/signin', (req, res) => {
    res.json({
    msg : "Sign in Endpoint"
})
})

userRouter.get('purchases', (req, res) => {
    res.json({
    msg : "Purchase Endpoint"
})
})

module.exports = {
    userRouter : userRouter
}