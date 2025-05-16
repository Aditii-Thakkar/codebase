import { useEffect } from 'react';
import styles from './Modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    return () => {
      document.body.style.overflow = 'auto'; // Re-enable on cleanup
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeButton} type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
