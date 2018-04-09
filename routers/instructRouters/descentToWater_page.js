// возвращает страницу "Cпуск на воду"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/descentToWater');    
  };