const express = require('express');
const { db } = require('../models/item');
const router = express.Router();

const Item=require('../models/item');



router.get('/items',(req,res)=>{
    db.collection('ingredients').find().toArray((err,data)=>
    {
        if(err)
        {
            console.log("cant find data");
        }
        else
        {
            res.send(data);
        }
    })
})


//retrieveing data
/*router.get('/items',(req,res,next)=>{
    Item.find(function(err,items){
        res.json(items);
    })
});
*/

//adding data
router.post('/item',(req,res,next)=>{
    let newItem = new Item({
        id: req.body.id,
        tname: req.body.tname,
        price: req.body.price,
        image: req.body.image
    });

    newItem.save((err,item)=>{
        if(err){
            res.json({msg:"failed to add item"});
        }
        else{
            res.json({msg:"item added sucessfully"});
        }
    });
});

//deleting data
router.delete('/item/:id',(req,res,next)=>{
    Item.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
    //logic to add
});

module.exports=router;