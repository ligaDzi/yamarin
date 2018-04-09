// возвращает страницу "Подъем и транспортировка лодки"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/lifting');    
  };