import { connect } from 'react-redux';
import Button from '../../../../baseComponent/Button';
import { showModal } from '../../../../store/carState/actions';


const Form = ({ showModal, submit }) => (
  <form onSubmit={e => submit(e)}>
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
    <Button nameButton='send' showMore={() => showModal()}/>
  </form>
);

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  submit: e => e.preventDefault()
});

export default connect(null, mapDispatchToProps)(Form);