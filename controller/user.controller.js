const create_user_page =  function(request , response){
    response.render('users', {
        layout: 'users'
    })
}

const create_user_controller =  async function(request , response){
    console.log(request.body);
   const firstname = request.body.firstname
   const lastname = request.body.lastname
   const email = request.body.email
   const age = request.body.age
   const bio = request.body.bio
   const gender = request.body.gender
   const location = request.body.location
   const username = request.body.username

   if (firstname === "" || lastname === "" || email === "" || age === "" || bio === "" || gender === "" || location === "" || username === "") {
      response.send('kindly fill in all fields')
   }

   const user_created =  await userModel.create({
    firstname: firstname,
    lastname: lastname,
    email: email,
    age: age,
    bio: bio,
    gender: gender,
    location: location,
    username: username
   })
   response.redirect('/blogs')  

}

module.exports = {
    create_user_page,
    create_user_controller

}

