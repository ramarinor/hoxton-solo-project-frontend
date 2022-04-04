import { useStore } from '../../store';
import './Modal.css';

function Modal() {
  const modalMessage = useStore((store) => store.modalMessage);
  const resetModalMessage = useStore((store) => store.resetModalMessage);
  return (
    <div
      className='modal-wrapper'
      onClick={() => {
        resetModalMessage();
      }}
    >
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => {
            resetModalMessage();
          }}
          className='close-modal'
        >
          X
        </button>
        <h3>{modalMessage}</h3>
      </div>
    </div>
  );
}

export default Modal;
