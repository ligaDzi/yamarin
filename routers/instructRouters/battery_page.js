// возвращает страницу "Батарея"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/battery');    
  };