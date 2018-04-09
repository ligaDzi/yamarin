// возвращает страницу "Ремонт небольших поверхностных повреждений"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/repairOfSmall');    
  };