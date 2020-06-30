const express = require ('express');
const router = express.Router();

const BlogPost = require('../models/blogPosts');

router.get('/api', (req,res)=>{

    BlogPost.find({}).then((data)=>{

        console.log('Data',data);
        res.json(data);

    }).catch((error)=>{
        console.log('error', error)
    })

})

router.get('/api/name', (req,res)=>{
    const data ={
        username: 'imane',
        age: 5
    }
    res.json(data);
});

module.exports = router;