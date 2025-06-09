import './App.css';
import Counter from './Counter';
import ToggleText from './ToggleText';
import Users from './Users';
import { Suspense } from 'react';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function App() {
  const UserPromise = fetchUsers();

  return (
    <>
      <h2>Practice-Task</h2>

      <Suspense fallback={<h3>Users are coming...</h3>}>
        <Users UserPromise={UserPromise}></Users>
      </Suspense>

      <ToggleText></ToggleText>
      <Counter></Counter>
    </>
  );
}

export default App;
