import Router from 'koa-router';
import Dog from '../models/Dog';

const router = new Router();

// GET all dogs
router.get('/api/dogs', async ctx => {
  await Dog.findAll()
    .then(dogs => {
      ctx.body = dogs;
    })
    .catch(err => {
      ctx.body = 'error' + err;
    });
});

// GET dog
router.get('/api/dog/:id', async ctx => {
  await Dog.findOne({
    where: {
      id: ctx.params.id
    }
  })
    .then(dog => {
      ctx.body = dog;
    })
    .catch(err => {
      ctx.body = 'Dog doesnt exist';
    });
});

// DELETE dog
router.delete('/api/dog/:id', async ctx => {
  await Dog.destroy({
    where: {
      id: ctx.params.id
    }
  })
    .then(dog => {
      ctx.body = {status: 'Dog deleted'};
    })
    .catch(err => {
      ctx.body = 'error' + err;
    });
});

// UPDATE dog
router.put('/api/dog/:id', async ctx => {
  if(!ctx.request.body.name) {
    ctx.body = {
      error: 'Dog must have firstName'
    }
  }
  else {
    await Dog.update(
      { name: ctx.request.body.name },
      { where: {id: ctx.params.id} }
    )
      .then(dog => {
        ctx.body = {status: 'Dog updated!'};
      })
      .catch(err => {
        ctx.body = 'error' + err;
      });
  }
});

// POST dog
router.post('/api/dog', async ctx => {
  if(!ctx.request.body.name) {
    ctx.body = {
      error: 'No name'
    }
  }
  else {
    await Dog.create(ctx.request.body)
      .then(data => {
        ctx.body = data;
      })
      .catch(err => {
        ctx.body = 'error' + err;
      });
  }
});

export default router;
