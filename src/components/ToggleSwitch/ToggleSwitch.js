import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
// import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  //   console.log(currentTemperatureUnit);
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          className="switch__box"
          onChange={handleToggleSwitchChange}
        />
        <span
          className={
            currentTemperatureUnit === "F"
              ? "switch__slider switch__slider-F"
              : "switch__slider switch__slider-C"
          }
        ></span>
        <p
          className={`switch__temp-F ${
            currentTemperatureUnit === "F" ? "switch__active" : ""
          }`}
        >
          C
        </p>
        <p
          className={`switch__temp-C ${
            currentTemperatureUnit === "C" ? "switch__active" : ""
          }`}
        >
          F
        </p>
      </label>
    </div>
  );
};

export default ToggleSwitch;

// // import React from "react";
// import React, { useContext, useState } from "react";
// import "./ToggleSwitch.css";
// import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

// // const ToggleSwitch = () => {
// //   const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C");

// //   const handleChange = (e) => {
// //     if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
// //     if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
// //   };
// //   console.log(currentTemperatureUnit);

//   const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);
//   return (
//     <div>
//       <label className="switch">
//         <input
//           type="checkbox"
//           className="switch__box"
//           onChange={handleToggleSwitchChange}
//         />
//         <span
//           className={
//             currentTemperatureUnit === "F"
//               ? " switch__slider  switch__slider-F"
//               : " switch__slider switch__slider-C"
//           }
//         ></span>
//         <p
//           className={`switch__temp-F ${
//             currentTemperatureUnit === "F" && "switch__active"
//           }`}
//         >
//           C
//         </p>
//         <p
//           className={`switch__temp-C ${
//             currentTemperatureUnit === "C" && "switch__active"
//           }`}
//         >
//           F
//         </p>
//       </label>
//     </div>
//   );
// };

// export default ToggleSwitch;
