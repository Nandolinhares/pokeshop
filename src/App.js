import React from 'react';
//CSS principal
import './App.css';
//Lib responsável pelo tratamento das rotas
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

//Components
import Navbar from './Components/Navbar';

//Pages da aplicação
import Home from './Pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
