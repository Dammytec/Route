const create_contact_page =  async function(request, response){
    // const all_blogs = await BlogModel.find()
   
    // console.log('express', created_at);
     response.render('index',{
        layout: 'main',
        title: 'Omo Ase',
     })
}
const get_contact_page =  function(request, response){
    
    response.render('contact', {
        layout : 'contact',
    })
}

const create_contact_controller = async function(request, response){
    console.log(request.body);
    
    const title_body = request.body.title
    const content_body = request.body.content
    const tags_body = request.body.tag
    console.log(title_body);
    console.log(content_body);
    console.log(tags_body);
    

    if(title_body === "" || content_body === "" || tags_body.length === 0){
        response.send('please fiil in all fields')
      
    }

    const post_created = await PostModel.create({
        title : title_body,
        content : content_body,
        tags : tags_body
    })
    console.log(post_created);
   
}

module.exports = {
    create_contact_page,
    get_contact_page,
    create_contact_controller
}