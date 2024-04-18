import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
import Task from './model/Task';

const App = () => {
  const items: Task[] = [
    { id: 1, name: 'First task' },
    { id: 2, name: 'Second task', description: 'This is my second task' },
    { id: 3, name: 'Third task' },
  ];
  return <Todos tasks={items} />;
};

export default App;
