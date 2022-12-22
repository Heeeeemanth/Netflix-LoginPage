
import './App.css';

function App() {
  return (
    <div className='bg-container'>
      <div className='black-div' >
      <header>
        <img className='logo' src='https://www.freepnglogos.com/uploads/netflix-logo-history-32.png' alt='Netflix Logo'/>
      </header>
      <div className='login-container'>
      <div className='login-div'>
        <h1>Sign In</h1>
        <form type='submit'>
         <input  type='text' placeholder='Email or phone number'/>
         <input type='password' placeholder='Password'/>
         <button>Sign In</button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
