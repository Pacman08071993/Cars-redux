import './ListItem.css';

const ListItem = ({ name, getCategory }) => <div className='ListItem' onClick={() => getCategory()}>{name}</div>;

export default ListItem;