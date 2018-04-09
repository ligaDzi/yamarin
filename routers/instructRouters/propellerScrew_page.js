// возвращает страницу "Гребной винт"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/propellerScrew');    
  };