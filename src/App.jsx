import HomePage from './Pages/HomePage';
import CarDetailedPage from './Pages/CarDetailedPage';
import UserPage from './Pages/UserPage';
import { Route } from 'react-router-dom';

const App = () => (
  <>
    <Route path='/home' exact component={HomePage} />
    <Route path='/car' component={CarDetailedPage}/>
    <Route path='/user' component={UserPage} />
  </>
);

export default App;
