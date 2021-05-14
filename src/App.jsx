import { Component } from 'react';
import HomePage from './Pages/HomePage';
import CarDetailedPage from './Pages/CarDetailedPage';
import UserPage from './Pages/UserPage';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/home' exact component={HomePage} />
        <Route path='/car' component={CarDetailedPage}/>
        <Route path='/user' component={UserPage} />
      </div>
    );
  }
}

export default App;
