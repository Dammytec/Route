const mongoose = require('mongoose')

const postSchema = new  mongoose.Schema({
    
    title:{
        type: String,
        require: true
        
    },
    tags:{
        type:[String],
        require: true
    },
    content:{
       type: String,
        require: true

    },
    author: {
        type: String,
        default: 'dammy'
    },
    Comments: {
        type: Array,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    likes: {
        type : Number,
        default: 0
    }
})
 const PostModel = mongoose.model('Post', postSchema)
 module.exports = {
    PostModel
 }
