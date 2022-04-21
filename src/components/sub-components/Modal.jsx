import Bin from "./BinIcon";

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <header>
        <h3>{title || "Modal"}</h3>
        <button className="btn-icon" onClick={onClose}>
          <Bin color="#333" size={24} />
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Modal;
