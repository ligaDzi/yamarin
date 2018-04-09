// возвращает страницу "Оборудование для обеспечения безопасности"
exports.get = async function(ctx, next) {

    await ctx.render('/instructPg/safetyEquipment');    
  };