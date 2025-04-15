import React, { useState } from 'react';

function App() {
  // Estado para la tarea actual y la lista de tareas
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Función para agregar una tarea
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (indexToRemove) => {
    const newTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(newTasks);
  };

  // Permitir agregar tareas al presionar la tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Tarea</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder= "No hay tareas, añadir tareas"
            value={task}
            onChange={(e) => setTask(e.target.value)} onKeyPress={handleKeyPress}
          />
          <button onClick={handleAddTask}>Agregar</button>
        </div>
        <ul className="task-list">
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button className="delete-button" onClick={() => handleDeleteTask(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div className="input-group">
            {/* ...input y botón */}
        </div>
        <p className="task-counter">Tareas: {tasks.length}</p>
        <ul className="task-list">
          {/* ...tareas */}
          </ul>
      </div>
    </div>
  );
}

export default App;