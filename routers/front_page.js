
// возвращает стартовую страницу
exports.get = async function(ctx, next) {

    const mainImg = ["cater1.jpg", "cater2.jpg", "cater3.jpg", "cater4.jpg"];


    const dataFillBoats = require('../data_fill_page/data_front_page');
    const dataBoats = await dataFillBoats.modelRange(ctx);

    const boat_Conv = require('../data_Conversion/boat_Conv');
    const plasticMas = boat_Conv.plastic_data_conv();
    const aluminMas = boat_Conv.alumin_data_conv();


    await ctx.render('index', {
      imges: mainImg,
      boats: dataBoats,
      plasticData: plasticMas,
      aluminData: aluminMas
    });
    
  };