const boats = require('../queriesDB/boats');
const boat_Conv = require('../data_Conversion/boat_Conv');

// находит все лодки в БД и распределяет их в зависимости от модельного ряда к которому они пренадлежат
exports.modelRange = async function (ctx) {

    const boatsDB = await boats.find_all_boats(ctx);    

    return boat_Conv.name_model_conv(boatsDB); 
}