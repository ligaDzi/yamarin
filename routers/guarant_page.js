// возвращает страницу "Гарантии"
exports.get = async function(ctx, next) {

    await ctx.render('guarantees');    
  };