import { Component } from 'react';
import Button from '../../../../baseComponent/Button';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { hideModal } from '../../../../store/carState/actions';

class Modal extends Component {
  render() {
    return (
      <div>
        <h1>You have successfully completed your purchase</h1>
        <NavLink to='/home'>
          <Button nameButton='Home' showMore={() => this.props.hideModal()}/>
        </NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal())
});

export default connect(null, mapDispatchToProps)(Modal);