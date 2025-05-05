import { render, screen } from '@testing-library/react';
import Todo from './Todo';

const todo = {
  text: 'This is something that you have got to do right away',
  done: false,
  id: '679b45673991d40d2c01571b',
};

const deleteTodo = todo => {
  console.log('deletion requested for todo with id ', todo.id);
};
const completeTodo = todo => {
  console.log('completion status set for todo with id ', todo.id);
};

test('renders content', () => {
  const { container } = render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />);
  const div = container.querySelector('.todo');
  expect(div).toHaveTextContent('This is something that you have got to do right away');
  expect(div).not.toHaveTextContent('679b45673991d40d2c01571b');
});
