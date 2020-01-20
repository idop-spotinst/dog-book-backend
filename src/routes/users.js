import Router from 'koa-router';
import User from '../models/User';

const router = new Router();

// GET all users
router.get('/api/users', async ctx => {
  await User.findAll()
    .then(users => {
      ctx.body = users;
    })
    .catch(err => {
      ctx.body = 'error' + err;
    });
});

// GET user
router.get('/api/user/:id', async ctx => {
  await User.findOne({
    where: {
      id: ctx.params.id
    }
  })
    .then(user => {
      ctx.body = user;
    })
    .catch(err => {
      ctx.body = 'User doesnt exist';
    });
});

// DELETE user
router.delete('/api/user/:id', async ctx => {
  await User.destroy({
    where: {
      id: ctx.params.id
    }
  })
    .then(user => {
      ctx.body = {status: 'User deleted'};
    })
    .catch(err => {
      ctx.body = 'error' + err;
    });
});

// UPDATE user
router.put('/api/user/:id', async ctx => {
  if(!ctx.request.body.firstName) {
    ctx.body = {
      error: 'Must have firstName'
    }
  }
  else {
    await User.update(
{firstName: ctx.request.body.firstName,
      lastName: ctx.request.body.lastName},
{ where: {id: ctx.params.id} }
    )
      .then(user => {
        ctx.body = {status: 'User updated!'};
      })
      .catch(err => {
        ctx.body = 'error' + err;
      });
  }
});

// POST user
router.post('/api/user', async ctx => {
  if(!ctx.request.body.firstName) {
    ctx.body = {
      error: 'No firstName'
    }
  }
  else {
    await User.create(ctx.request.body)
      .then(data => {
        ctx.body = data;
      })
      .catch(err => {
        ctx.body = 'error' + err;
      });
  }
});

export default router;
