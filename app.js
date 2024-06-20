const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
const path = require('path')
const mongoose = require('mongoose')
const { type } = require('os')
const { log } = require('console')
const {PostModel} = require('./model/contact.model.js')
const {contact_route} = require('./routes/contact.route.js')
const {userModel} = require('./model/user.model.js')
const {user_route} = require('./routes/user.route.js')




app.engine('handlebars', engine({ defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views', 'layouts'), partialsDir: path.join(__dirname, 'views', 'partials') }));
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(express.static(path.join(__dirname, 'public')))


app.use(express.urlencoded())

const middleware = function(request,response, next){
    console.log(request);
    next()
}
app.use(middleware)
app.use(express.json())
 
const getUsersSortedByFirstnameAsc = async () => {
try {
    const users = await userModel.find().sort({ firstname: 1 }); 
    console.log(users);
} catch (error) {
    console.error('Error fetching users:', error);
}
};

app.get('/', function(request, response){
    response.render('index', {
        layout: 'main'
    })
})


 
 app.use('/blogs' , contact_route)



app.get('/user', function (request, response ){
      response.render('users',{
        layout:'users'
      })
})


app.get('/user/users', user_route)


app.listen(5002, function(request, response){
    console.log('server running on PORT 5001');
})

mongoose.connect('mongodb+srv://ola2:GLO09052166037glo@cluster.qq2b6xn.mongodb.net/?retryWrites=true&w=majority&appName=Clusters')
.then(() => {
    console.log('SERVER RUNNING')
    getUsersSortedByFirstnameAsc()

})