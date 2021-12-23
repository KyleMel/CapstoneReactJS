import './Modal.css';
import RecipeTemplate from './RecipeTemplate';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <RecipeTemplate />
        <button type="button" onClick={handleClose}>Close</button>
        <button type="button" /*onClick={handleSave}*/>Save</button>          
      </section>
    </div>
  );
}

export default Modal;