import './App.css';
import Profile from './profile/Profile';
import logo from './logo.svg';

function App() {

  const handleName = (username) => {
    alert(username);
  }

  const fullName = 'Anis';
  const bio = 'Bio'
  const profession='Dev'
  
  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName} >
        <img src = {logo} alt="img" />
      </Profile>
    </div>
  );
}

export default App;
