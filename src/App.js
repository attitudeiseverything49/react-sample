import './App.css'
import { useEffect, useState } from "react";

 function App() {
  const [todo,setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function data () {
      let value = await api();
      setTodo(value);
      setLoading(false);
    }
    data();
  },[todo]);

  if (loading) {
    return (
    <div className="App">
      <div>Loading...</div>;
    </div> )
  }
  
  return (
    <div className="Header">
      <h1>Todos</h1>
      <div>
              {todo && todo.todos ? (
                <ul>
                  {todo.todos.map((item) => (
                    <li key={item.id}>{item.todo}</li> // Assuming `title` is a property of each todo item
                  ))}
                </ul>
              ) : (
                <div>No todos available</div>
              )}
      </div>
    </div>
  );

}


async function api () {
  try {
    let data = await fetch('https://dummyjson.com/todos');
    let data1 = await data.json();
    return data1
   }catch(err) {
     console.log(err);
     throw err;
   }
}

export default App;
