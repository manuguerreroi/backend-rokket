const {Router} = require('express');
const rt = Router();
const {getFoods,postFood,deleteFood} = require('../controllers/foodsController');


rt.route('/').
        get(getFoods).
        post(postFood)
        
        
rt.route('/:id').
        delete(deleteFood)

module.exports = rt;
