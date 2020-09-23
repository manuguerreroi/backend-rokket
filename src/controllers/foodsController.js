const food = require('../models/food');

const foodController = {};

foodController.getFoods = async (req,res) => {
    //Get: fetch all items from the database and return them
    // no se valida en caso de no haber items
    const foods = await food.find();
    res.json(foods);
};

foodController.postFood = (req,res) => {
    //Create: create a new item, save it to the database and return it.
    // no se valida en caso de error
    const {name, description} = req.body;
    const f = new food({
        name: name,
        description: description
    });

    f.save();
    res.json(f);  

};

foodController.deleteFood = async (req,res) => {
    //Delete: deletes a specific item and returns true if successful.
    // no se valida en caso de error
    await food.findByIdAndDelete(req.params.id);
    res.json({message: true});
};

module.exports = foodController;