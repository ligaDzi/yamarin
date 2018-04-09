// возвращает страницу лодки по id
exports.get = async function(ctx, next) {

    const dataFillBoat = require('../data_fill_page/data_boat_page');

    const dataBoat = await dataFillBoat.infoOnBoat(ctx);


    await ctx.render('boat',{
        boat: dataBoat
    });
    
  };