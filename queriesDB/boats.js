const mongoose = require('../libs/mongoose');
const Boats = require('../models/Boats');

module.exports = {

    // находит все лодки в БД
    find_all_boats: async function(ctx){

        const boats = await Boats.find({}).sort({model: 1});

        if(!boats){
            ctx.throw(404, 'boats не найден');
        }
        return boats;        
    },
    // находит лодку в БД по ID
    find_boatByID: async function(ctx){

        if(!mongoose.Types.ObjectId.isValid(ctx.params.id)){
            ctx.throw(404, 'Не правильно указанно id');
        } 
        const boat = await Boats.findById(ctx.params.id);

        if(!boat){
            ctx.throw(404, 'boat не найден');
        }        
         
        return boat;          
    },

    find_dayCruiser: async function(ctx){

        const boats = await Boats.find({model: "Day Cruiser"}).sort({name: 1});

        if(!boats){
            ctx.throw(404, 'boats не найден');
        }
        return boats; 
    }
}