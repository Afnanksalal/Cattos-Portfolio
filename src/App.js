import './App.css';
import logo from './logo.png';

function App() {
  return (
<div class="App">
  <div class="banner">
      <h1 align="center"> <code><strong> Welcome to the portfolio of Catto! </strong> </code></h1> 
      <h2><code><strong>Meow! I am catto, want some hugs? </strong></code></h2>
    </div>
  <header class="App-header">
  <img src={logo} className="App-logo" alt="logo" />
    <div class="container">
      <div class="box">
        <p> <strong>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ <code>‎‎‎‎Want to know more about me?</code> ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎</strong> </p>
        <p> <strong>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ <code>Click the button below!</code> ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎</strong> </p>
        <a href="https://www.youtube.com/watch?v=eCOdMdWbP_4">
          <p>
            <button class="btn btn1"><code> <strong>Learn More!</strong></code></button>
          </p>
        </a>
        <p> ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎</p>
      </div>
    </div>
    <div class="footer">
      <h5><code>Made with 🤎 by Ace. </code></h5> 
      </div>
  </header>
</div>
      );
    }
    export default App;
