import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, TextField, Button, List, Typography, Box } from '@mui/material';
import TodoItem from './ToDoItem';

interface Todo {
  text: string;
  id: number;
}

const TodoList: React.FC = () => {
  const [items, setItems] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem: Todo = {
      text,
      id: Date.now(),
    };
    setItems(items.concat(newItem));
    setText('');
  };

  const deleteItem = (index: number) => {
    const newItems = items.slice();
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          TODO
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '1em' }}>
          <TextField
            id="new-todo"
            label="What needs to be done?"
            value={text}
            onChange={handleChange}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '1em' }}>
            Add
          </Button>
        </form>
        <List>
          {items.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              deleteItem={deleteItem}
            />
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default TodoList;
