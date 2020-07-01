const express = require ('express');
const router = express.Router();

const BlogPost = require('../models/blogPosts');

router.get('/', (req,res)=>{

    BlogPost.find({}).then((data)=>{

        console.log('Data',data);
        res.json(data);

    }).catch((error)=>{
        console.log('error', error)
    })

})

router.get('/name', (req,res)=>{
    const data ={
        username: 'imane',
        age: 5
    }
    res.json(data);
});

router.post('/save', (req,res)=>{
   console.log('Body:', req.body);
   const data = req.body;
   const newBlogPost = new BlogPost(data);

   //save
    newBlogPost.save((e)=>{
       if(e){
           res.status(500).json({msg:'sorry, something happened'});
           return;
       }

       return res.json({ msg: 'data has been saved'});

    })

});

module.exports = router;