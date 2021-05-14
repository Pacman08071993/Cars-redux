import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../../baseComponent/Button';
import { showModal } from '../../../../store/carState/actions';

class Form extends Component {
  render() {
    return (
      <form onSubmit={e => this.props.submit(e)}>
        <label>
          Name:
          <input type='text' />
        </label>
        <label>
          Lastname:
          <input type='text' />
        </label>
        <label>
          Lastname:
          <input type='text' />
        </label>
        <Button nameButton='send' showMore={() => this.props.showModal()}/>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  submit: e => e.preventDefault()
});

export default connect(null, mapDispatchToProps)(Form);