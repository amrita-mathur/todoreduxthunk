// import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { listTodos, fetchTodoById } from './actions/todoActions';
function App() {

  const todos = useSelector(state=> state.todos);
  const todo = useSelector(state=> state.todoDetails)

  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(listTodos())
      // dispatch(fetchTodoById(1))
  },[])

  return (
    <div className="App">
       <h2>Redux</h2>
      {todos.length>1 && todos.map(todo=> (
          <h4 key={todo.id}>{todo.title}</h4>
       ))}

       {/* {todo && todo.title} */}

    </div>
  );
}

export default App;
