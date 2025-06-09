export default function User({ user }) {
  return (
    <div className="card3">
      <h4>Name: {user.name}</h4>
      <h4>Company: {user.company.name}</h4>
      <h4>city: {user.address.city}</h4>
    </div>
  );
}
