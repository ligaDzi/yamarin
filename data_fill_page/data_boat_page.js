const boats = require('../queriesDB/boats');
const boat_Conv = require('../data_Conversion/boat_Conv');

// находит лодку в БД по ID 
exports.infoOnBoat = async function (ctx) {

    const boatDB = await boats.find_boatByID(ctx);    

    return boat_Conv.one_boat_conv(boatDB); 
}