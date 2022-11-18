import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Router from './Router';



function App() {
  /* fetch('http://localhost:4000/api/users')
        .then(res =>res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error)) */

  return (
    <div className="App">
      <header className="App-header">
        { 
        <Header></Header>
        }
      </header>
      <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Canchas
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/admin/cancha">Cancha 1</a></li>
                  <li><a class="dropdown-item" href="/admin/cancha">Cancha 2</a></li>
                  <li><a class="dropdown-item" href="/admin/cancha">Cancha 3</a></li>
                  <li><a class="dropdown-item" href="/admin/cancha">Cancha 4</a></li>
                  <li><a class="dropdown-item" href="/admin/cancha">Cancha 5</a></li>
                  <li><a class="dropdown-item" href="/admin/cancha">Cancha 6</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Solicitudes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <Router />
      </main>
      <footer>
        <h1></h1>
      </footer>
    </div>
  );
}

export default App;
