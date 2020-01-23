import Koa from 'koa';
const app = new Koa();
import bodyParser from 'koa-body';
const cors = require('@koa/cors');

import users from './routes/users';
import dogs from './routes/dogs';

//app.use(async ctx => {
//  ctx.body = 'Hello World';
//});

app.use(bodyParser());
app.use(cors());
app.use(users.routes());
app.use(dogs.routes());

app.listen(3000);
