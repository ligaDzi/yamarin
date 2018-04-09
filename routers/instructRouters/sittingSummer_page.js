// возвращает страницу "Уход летом"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/sittingSummer');    
  };