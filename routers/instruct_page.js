// возвращает страницу "Инструкции по уходу"
exports.get = async function(ctx, next) {

    await ctx.render('instruct');    
  };