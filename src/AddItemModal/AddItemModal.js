// import React, { useState } from "react";
// import ModalWithForm from "../components/ModalWithForm/ModalWIthForm";

// const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
//   const [name, setName] = useState("");
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//     console.log(e.target.value);
//   };

//   const [link, setUrl] = useState("");
//   const handleUrlChange = (e) => {
//     setUrl(e.target.value);
//     console.log(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddItem({ name, link });
//     // console.log(e);
//   };

//   return (
//     <ModalWithForm
//       name="new-garment"
//       className="modal__container"
//       title="New garment"
//       onClose={handleCloseModal}
//       isOpen={isOpen}
//       onSubmit={handleSubmit}
//       // ref={modalRef}
//     >
//       <div>
//         <label className="modal__name">
//           <b>Name</b>
//           <input
//             className="modal__text"
//             type="text"
//             name="name"
//             minLength="1"
//             maxLength="30"
//             placeholder="Name"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </label>
//       </div>
//       <div>
//         <label className="modal__link">
//           <b>Image</b>
//           <input
//             className="modal__url"
//             type="url"
//             name="link"
//             minLength="1"
//             maxLength="30"
//             placeholder="Image URL"
//             value={link}
//             onChange={handleUrlChange}
//           />
//         </label>
//       </div>
//       <p>
//         <b>Select the weather type:</b>
//       </p>
//       <div className="modal__radio">
//         <div>
//           <input type="radio" id="hot" value="hot" name="weather" />
//           <label htmlFor="hot">Hot</label>
//         </div>
//         <div>
//           <input type="radio" id="warm" value="warm" name="weather" />
//           <label htmlFor="warm">Warm</label>
//         </div>
//         <div>
//           <input type="radio" id="cold" value="cold" name="weather" />
//           <label htmlFor="cold">Cold</label>
//         </div>
//       </div>
//     </ModalWithForm>
//   );
// };

// export default AddItemModal;

import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWIthForm";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [link, setUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    // 2. Handler for radio buttons
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, link, weatherType);
    onAddItem({ name, link, weatherType });
  };

  return (
    <ModalWithForm
      name="new-garment"
      className="modal__container"
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="modal__name">
          <b>Name</b>
          <input
            className="modal__text"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label className="modal__link">
          <b>Image</b>
          <input
            className="modal__url"
            type="url"
            name="link"
            minLength="1"
            // maxLength="30"
            placeholder="Image URL"
            value={link}
            onChange={handleUrlChange}
          />
        </label>
      </div>
      <p>
        <b>Select the weather type:</b>
      </p>
      <div className="modal__radio">
        <label>
          <input
            type="radio"
            value="hot"
            name="weather"
            checked={weatherType === "hot"}
            onChange={handleWeatherChange}
          />
          Hot
        </label>
        <label>
          <input
            type="radio"
            value="warm"
            name="weather"
            checked={weatherType === "warm"}
            onChange={handleWeatherChange}
          />
          Warm
        </label>
        <label>
          <input
            type="radio"
            value="cold"
            name="weather"
            checked={weatherType === "cold"}
            onChange={handleWeatherChange}
          />
          Cold
        </label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
