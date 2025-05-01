const { getAsync } = require('../redis');

const express = require('express');
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  console.log('requested a stat ');
  const addedTodos = await getAsync('added_todos');
  console.dir(addedTodos);
  res.send({ added_todos: Number(addedTodos) });
});

module.exports = router;
