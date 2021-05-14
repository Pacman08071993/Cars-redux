import { Component } from 'react';
import DetailedInfo from './components/DetailedInfo';
import './CarDetailedPage.css';

class CarDetailedPage extends Component {
  render() {
    return <div className='CarDetailedPage'><DetailedInfo /></div>;
  }
}

export default CarDetailedPage;