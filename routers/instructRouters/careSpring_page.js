// возвращает страницу "Уход весной"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/careSpring');    
  };