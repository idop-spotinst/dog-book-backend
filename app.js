

//const Koa = require('koa');
import Koa from 'koa';
//import KoaRouter from 'koa-router';
const app = new Koa();
import bodyParser from 'koa-body';
import sequelize from './database/db';
//const bodyParser = require('koa-body');

//const tasks = require('./routes/tasks');
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.use(bodyParser);
app.listen(3000);
//app.use(tasks.routes());


//const sequelize = require('./database/db');



