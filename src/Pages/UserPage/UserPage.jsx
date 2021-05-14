/* eslint-disable no-implicit-coercion */
import { Component } from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import Modal from './components/Modal';

class UserPage extends Component {
  render() {
    return (
      <>
        <Form />
        {!!this.props.isShowModal && <Modal />}
      </>
    );
  }
}

const mapStateToProps = ({ reducerCar: { isShowModal } }) => ({ isShowModal });

export default connect(mapStateToProps)(UserPage);