import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // 1. STATE DEFINITION
  // --- Your task: Define state for todos and the current input value ---
  const [todos, setTodos] = useState(
    // Lazy Initialization - Recommended
    () => {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    }
  );
  const [inputValue, setInputValue] = useState("");
  // We use a Ref to store an object of active timers. 
  // Key: todo.id, Value: intervalId
  // This allows us to have multiple count-downs happening at the same time!
  const timers = useRef({});

  //  The "Persistence" Feature (localStorage)
  useEffect(() => {
    // saving the todos
    localStorage.setItem("todos", JSON.stringify(todos));
    // [todos] for re-running the effect when todos changes
    // [] for re-running the effect only once
    // no dependency array for re-running the effect on every render
  }, [todos])

  // 2. CLOSURES & SCOPE
  // --- Your task: Implement a function to add a todo ---
  // Think about how 'inputValue' is captured in the scope of this function.
  const addTodo = () => {
    if (!inputValue.trim()) return;
    // Implement here
    setTodos([...todos, { text: inputValue, id: Date.now(), countDown: null }]);
    setInputValue("");
  };

  // 3. SETTIMEOUT & ASYNC JS
  // --- Your task: Implement a "delayed delete" or a "reminder" feature ---
  // Use setTimeout to remove a todo after 3 seconds when a "Delete Later" button is clicked.
  const deleteAfterDelay = (id) => {
    // 1. If this task is already counting down, don't start another one
    if (timers.current[id]) return;

    // initializing the countdown
    setTodos((prevTodos) => prevTodos.map((t) => t.id === id ? { ...t, countDown: 3 } : t));

    const intervalId = setInterval(() => {
      setTodos((currentTodos) => {
        const targetTodo = currentTodos.find(t => t.id === id);

        // if todo already deleted
        if (!targetTodo) {
          clearInterval(intervalId);
          return currentTodos;
        }

        if (targetTodo.countDown <= 1) {
          clearInterval(intervalId);
          delete timers.current[id];
          return currentTodos.filter((t) => t.id !== id)
        }

        return currentTodos.map((t) => t.id === id ? { ...t, countDown: t.countDown - 1 } : t);
      });
    }, 1000);

    // Implement here using setTimeout
    // setTimeout(() => {
    //   setTodos((latestTodos) => latestTodos.filter((todo) => todo.id !== id))
    // }, 3000)
    // 4. Save the interval ID so we can cancel it later
    timers.current[id] = intervalId;
  };

  const cancelDelete = (id) => {
    if (timers.current[id]) {
      clearInterval(timers.current[id]);
      delete timers.current[id];
      setTodos(prev => prev.map(t => t.id === id ? { ...t, countDown: null } : t));
    }
  }

  const deleteTodo = (id) => {
    if (timers.current[id]) {
      clearInterval(timers.current[id]);
      delete timers.current[id];
    }
    setTodos(prev => prev.filter(t => t.id !== id));
  }

  // 4. LEXICAL SCOPE
  // --- Your task: Implement a nested function or a filter feature ---
  // Observe how inner functions have access to variables defined in App().

  return (
    <div className="container">
      <h1>JS Fundamentals Todo</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          // Bind value and onChange here
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>

      <ul className="todo-list">
        {/* Map through todos and render them here */}
        {/* Each todo should have a 'Delete' and 'Delete Later' button */}
        {todos.filter(todo => todo && todo.id).map((todo) => (
          <li key={todo.id} className="todo-item">
            <span style={{ textDecoration: todo.countDown !== null ? 'line-through' : 'none', opacity: todo.countDown !== null ? 0.5 : 1 }}>
              {todo.text}
              {todo.countDown !== null && <small> (Deleting in {todo.countDown}...)</small>}
            </span>

            <div className="actions">
              {todo.countDown === null ? (
                <button className="btn-delay" onClick={() => deleteAfterDelay(todo.id)}>Delete Later</button>
              ) : (
                <button className="btn-delay" style={{ backgroundColor: '#f59e0b' }} onClick={() => cancelDelete(todo.id)}>Cancel</button>
              )}
              <button className="btn-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="learning-hints">
        <h3>Learning Goals:</h3>
        <ul>
          <li><strong>Closures:</strong> How do your event handlers remember the state?</li>
          <li><strong>setTimeout:</strong> Handle asynchronous operations and cleanup.</li>
          <li><strong>Lexical Scope:</strong> How nested functions access outer variables.</li>
        </ul>
      </div>
    </div>
  )
}

export default App
