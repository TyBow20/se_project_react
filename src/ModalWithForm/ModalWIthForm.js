import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add Garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="modal__content">
        <button
          type="button"
          className="modal__close modal__close_content_form"
          onClick={onClose}
        ></button>
        <h3 className="modal__h3">{title}</h3>
        <form>
          {children}
          <button className="modal__garment" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
