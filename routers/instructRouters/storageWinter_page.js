// возвращает страницу "Хранение зимой"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/storageWinter');    
  };