
const Koa = require('koa');
const app = new Koa();

const config = require('./config/default');

const path = require('path');
const fs = require('fs');

// Здесь подключаються модули из папки handlers.
const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();

handlers.forEach(handler => require('./handlers/' + handler).init(app));

const Router = require('koa-router');

const router = new Router();

router.get('/', require('./routers/front_page').get);
router.get('/boat/:id', require('./routers/boat_page').get);
router.get('/guarant', require('./routers/guarant_page').get);
router.get('/instruct', require('./routers/instruct_page').get);
router.get('/order', require('./routers/order_page').get);
router.post('/mail', require('./routers/mail_page').get);

/* Навигация по странице "Инструкции по уходу" */

const pathToInstrPg = "./routers/instructRouters";

router.get('/sittingSummer', require(`${pathToInstrPg}/sittingSummer_page`).get);
router.get('/lifting', require(`${pathToInstrPg}/lifting_page`).get);
router.get('/prepForWinter', require(`${pathToInstrPg}/prepForWinter_page`).get);
router.get('/repairOfSmall', require(`${pathToInstrPg}/repairOfSmall_page`).get);
router.get('/cleaning', require(`${pathToInstrPg}/cleaning_page`).get);
router.get('/maintenance', require(`${pathToInstrPg}/maintenance_page`).get);
router.get('/propellerScrew', require(`${pathToInstrPg}/propellerScrew_page`).get);
router.get('/battery', require(`${pathToInstrPg}/battery_page`).get);
router.get('/storageWinter', require(`${pathToInstrPg}/storageWinter_page`).get);
router.get('/careSpring', require(`${pathToInstrPg}/careSpring_page`).get);
router.get('/descentToWater', require(`${pathToInstrPg}/descentToWater_page`).get);
router.get('/listFirstTrip', require(`${pathToInstrPg}/listFirstTrip_page`).get);
router.get('/safetyEquipment', require(`${pathToInstrPg}/safetyEquipment_page`).get);

app.use(router.routes());

app.listen(config.port);
