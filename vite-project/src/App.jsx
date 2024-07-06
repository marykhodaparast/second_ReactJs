import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Maryam"/>
      <UserGreeting/>
    </>
  );
}

export default App;
