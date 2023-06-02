import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className='logo'>NodePress</a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className='image'>
          <img src={logo}/>
        </div>

        <div className="texts">
          <h2>React JS is the new thing!</h2>
          <p className="info">
            <a className="author">Gustavo Lima</a>
            <time>24-01-2004 18:24</time>
          </p>
          <p className="summary">Lorem Ipsum</p>
        </div>

      </div>
    </main>
  );
}

export default App;
