// возвращает страницу "Список вещей, которые надо сделать перед первой поездкой"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/listFirstTrip');    
  };