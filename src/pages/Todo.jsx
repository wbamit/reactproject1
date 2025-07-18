import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask('');
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h5>Todo List</h5>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton} className='btn btn-primary'>Add</button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (            
          <li key={index} style={{ ...styles.item, textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>{todo.text}</span>
            <button onClick={() => deleteTask(index)} className='btn btn-secondary'>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { padding: 20, maxWidth: 500, margin: 'auto' },
  inputContainer: { display: 'flex', gap: 10, marginBottom: 20 },
  input: { flex: 1, padding: 8 },
  addButton: { padding: '8px 16px' },
  list: { listStyle: 'none', padding: 0 },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, padding: '5px 10px', background: '#eee' },
  deleteButton: { background: 'red', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer' }
};

export default Todo;