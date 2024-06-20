const express = require('express')
const {create_contact_page, get_contact_page, create_contact_controller} = require('../controller/blog.controller.js')

const routes = express.Router()
routes.get('/' , create_contact_page) // /blogs

routes.get('/contact', get_contact_page) // /blogs/contact
routes.post('/blogs/create-blog', create_contact_controller ) // /blogs/create-blog



module.exports = {
    contact_route : routes
}