import './Button.css';

const Button = ({ nameButton, showMore = () => null }) => (
  <button className='Button' onClick={() => showMore()}>{nameButton}</button>
);

export default Button;