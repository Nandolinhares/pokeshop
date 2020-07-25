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
import ShopcarResume from './Pages/ShopcarResume';
import AuthProvider from './Components/AuthProvider';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resume' component={ShopcarResume} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
