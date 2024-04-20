import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import Task from './model/Task';
import NewTodo from './components/NewTodo';
import Header from './layout/Header';

const App = () => {
  // const items: Task[] = [
  //   { id: 1, name: 'First task' },
  //   { id: 2, name: 'Second task', description: 'This is my second task' },
  //   { id: 3, name: 'Third task' },
  // ];

  const [itemList, setItemList] = useState<Task[]>([]);

  const addTodoHandler = (
    id: number,
    name: string,
    description: string
  ): void => {
    const newTask: Task = { id: id, name: name, description: description };
    setItemList((previous) => [...previous, newTask]);
  };

  const handleDeleteTask = (taskId: number) => {
    setItemList((previous) => {
      return previous.filter((item) => {
        return item.id !== taskId;
      });
    });
  };

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <main className="px-3">
        <NewTodo onAddTodo={addTodoHandler} />
      </main>
      <Todos tasks={itemList} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
