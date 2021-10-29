import './App.css';
import logo from './logo.png';


function App() {
  return (
<div className="App">
  <header className="App-header">
    <div class="underline">
      <h1> <code><strong> Welcome to Catto's Portfolio</strong> </code></h1>
    </div>
    <h3><code><strong>Meow! I'm catto, want some hugs?</strong></code></h3>
    <img src={logo} className="App-logo" alt="logo" />
    <div class="container">
      <div class="box">
        <p>
          <strong>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ <code>‎‎‎‎Want to know more about me?</code> ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎</strong>
        </p>
        <p>
          <strong>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ <code>Click the button below!</code> ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎</strong>
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=eCOdMdWbP_4"
          target="_blank"
          rel="noopener noreferrer"
          >
          <p><button class="btn btn1"><code> <strong>Learn More!</strong></code></button></p>
        </a>
        <p>  ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎</p>
      </div>
    </div>
    <div class="footer">
      <h4><code>😻 “There are two means of refuge from the miseries of life: music and cats.” – Albert Schweitzer</code></h4>
    </div>
  </header>
</div>
      );
    }
    
    export default App;
