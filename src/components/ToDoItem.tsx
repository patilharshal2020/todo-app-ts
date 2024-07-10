import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
  item: {
    text: string;
    id: number;
  };
  index: number;
  deleteItem: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, index, deleteItem }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(index)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item.text} />
    </ListItem>
  );
};

export default TodoItem;
