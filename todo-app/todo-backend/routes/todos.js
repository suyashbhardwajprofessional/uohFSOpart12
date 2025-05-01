const { getAsync, setAsync } = require('../redis');

const express = require('express');
const { Todo } = require('../mongo');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  console.log('received request for all ids ');
  const todos = await Todo.find({});
  res.send(todos);
});

/* GET todo listing. */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('specific id: received request ', id);
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);
  res.send(req.todo);
});

/* UPDATE a todo. */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('specific id: received request ', id);
  req.todo = await Todo.findByIdAndUpdate(id, { text: req.body.text, done: req.body.done });
  if (!req.todo) return res.sendStatus(404);
  res.send(req.todo);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  const addedTodos = await getAsync('added_todos');
  setAsync('added_todos', Number(addedTodos) + 1);
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  req.todo = await Todo.findById(id);
  if (!req.todo) return res.sendStatus(404);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

router.use('/:id', findByIdMiddleware, singleRouter);

module.exports = router;
