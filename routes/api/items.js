const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item')

//@route GET require to api/items
//@desc GET all items
//@access public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

//@route POST require to api/items
//@ create an item
//@access public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc Delete an item
//@access public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
})
    

module.exports = router;