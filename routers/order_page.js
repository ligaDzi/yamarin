// возвращает страницу "Заказать"
exports.get = async function(ctx, next) {

    await ctx.render('/order');    
  };