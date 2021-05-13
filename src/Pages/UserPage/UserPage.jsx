/* eslint-disable no-implicit-coercion */
import { connect } from 'react-redux';
import Form from './components/Form';
import Modal from './components/Modal';

const UserPage = ({ isShowModal }) => (
  <>
    <Form />
    {!!isShowModal && <Modal />}
  </>
);

const mapStateToProps = ({ reducerCar: { isShowModal } }) => ({ isShowModal });

export default connect(mapStateToProps)(UserPage);