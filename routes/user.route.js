const express = require('express')
const {create_user_page, create_user_controller} = require('../controller/user.controller.js') 
const routes = express.Router()


routes.get('/user/users' , create_user_page)
routes.post('/user/user-blog' , create_user_controller)

module.exports = {
   user_route : routes
}