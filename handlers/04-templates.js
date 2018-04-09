// no templates in ctx example
const render  = require('koa-ejs');
const path = require('path');

exports.init = app => app.use(async (ctx, next) => {
 
  render(app, {
    root: path.join(__dirname, '../templates'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: true
  });
  

  await next();
});
