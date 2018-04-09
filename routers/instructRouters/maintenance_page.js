// возвращает страницу "Уход"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/maintenance');    
  };