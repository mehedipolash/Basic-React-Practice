import { use } from 'react';
import User from './User';

export default function Users({ UserPromise }) {
  const users = use(UserPromise);
  console.log(users);
  return (
    <div className="card2">
      <h3>Lets' use</h3>
      {users.map(user => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
