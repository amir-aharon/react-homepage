import Task from './Task'
import { Stack, Divider } from '@mui/material';
import './todo-list.css'
import TodoForm from './TodoForm';

export default function TodoList({ todoList, handleToggle, handleDelete, addTask, handleChange }) {
  return (
    <Stack className="list">
      <TodoForm addTask={addTask}/>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem className='divider' />}
        spacing={2}
        >


        {todoList.map(todo => {
          return (
            <Task task={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleChange={handleChange}
              />
          )
        })}

      </Stack>
    </Stack>
  )
}
