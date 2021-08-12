import React from 'react';
import './style.css';

const App = () => {
  const [todo, setTodo] = React.useState({
    taskName:"",
    description:"",
    dueDate:""
  });
  const [todoList, setList] = React.useState([]);
  const[listKey,setKey] = React.useState([]);

  function onSubmitHandler(e) {
    e.preventDefault();

    const addTodo = {
      id: new Date().getTime(),
      taskName: todo.taskName,
      description:todo.description,
      dueDate: todo.dueDate,
      complete: false
    };
    setList([...todoList].concat(addTodo));
    setTodo("")
    setKey(listKey+1)
    console.log(todo);
  }

  function onDelete(id) {
    let updatedList = [...todoList].filter(todo => todo.id !== id);
    setList(updatedList);
  }

  function onComplete(id) {
    let updatedList = [...todoList].map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setList(updatedList);
  }

  return (
    <div class="todo">
      <h1>To Do</h1>
      <form onSubmit={onSubmitHandler} id ="todo" key={listKey}>
        <input type="text" value={todo.taskName} placeholder="Enter Task Name" onChange={e => setTodo({...todo,taskName:e.target.value})} />
        <input type="text" value={todo.description} placeholder="Enter task description" onChange={e => setTodo({...todo, description:e.target.value})} />
        <input type="date" value={todo.dueDate} onChange={e => setTodo({...todo, dueDate:e.target.value})}/>
        <button> Add</button>
      </form>
      {todoList.map(data => (
        <div class="list-style" key={data.id}>
          <div class="button-style">
            <div class="todo-style">
              <div>                
              {data.taskName}</div>
              <div> {data.dueDate}</div>               
              <div>{data.description}</div>              
             
            </div>
            <button id="del" onClick={() => onDelete(data.id)}>
              Delete
            </button>
            {data.complete === true ? (
              <button id="completed" onClick={() => onComplete(data.id)}>
                Completed
              </button>
            ) : (
              <button id="complete" onClick={() => onComplete(data.id)}>
                Complete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
