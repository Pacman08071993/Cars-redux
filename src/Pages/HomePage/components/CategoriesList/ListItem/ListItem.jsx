import './ListItem.css';
import { Component } from 'react';

class ListItem extends Component {
  render() {
    return <div className='ListItem' onClick={() => this.props.getCategory()}>{this.props.name}</div>;
  }
}

export default ListItem;