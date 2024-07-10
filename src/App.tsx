import React from 'react';
import { CssBaseline } from '@mui/material';
import TodoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <TodoList />
    </div>
  );
};

export default App;
