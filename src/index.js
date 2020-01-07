import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import Button from '@material-ui/core/Button';
import './styles.css';


const App = () => {
  const { todos, addTodo, deleteTodo, deleteAllDoneTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Kirill Todo
      </Typography>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => {
          deleteAllDoneTodo(true);
        }}
      >
        Удалить выполненные
      </Button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
