// возвращает страницу "Подготовка к зиме"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/prepForWinter');    
  };