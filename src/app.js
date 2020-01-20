import Koa from 'koa';
const app = new Koa();
import bodyParser from 'koa-body';

import users from './routes/users';

//app.use(async ctx => {
//  ctx.body = 'Hello World';
//});

app.use(bodyParser());
app.use(users.routes());

app.listen(3000);




