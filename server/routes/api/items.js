const express = require('express');
const Item = require('../../models/Item');

const router = express.Router();

router.get('/', async (req, res) => {
    const items = await Item.find();
    if(items){
        res.json(items);
    }else{
        res.status(400).json({ error: 'Items not found' });
    }
});

router.post('/', async (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    try {
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (error) {
        res.status(400).json({ error: 'Item not added correctly!' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndRemove(req.params.id, { useFindAndModify: false });
        res.json({ success: 'Item deleted successfuly' });
    } catch (error) {
        res.status(400).json({ error: 'Item not deleted correctly!' });
    }
});


module.exports = router;