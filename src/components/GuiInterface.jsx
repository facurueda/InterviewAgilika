import React from "react";
import Motorcycle from "../assets/motorcycle.png";
import Sedan from "../assets/sedan.png";
import Truck from "../assets/truck.png";
import "../styles/guiInterface.css";

const GuiInterface = (props) => {
      const { addVehicle, id, freeSpaces } = props;

      return (
            <div className="guiContainer">
                  <div className="buttons">
                        <button
                              className="buttonToAdd"
                              onClick={(e) =>
                                    addVehicle({
                                          size: 1,
                                          parked: 1,
                                          name: "Motorcycle",
                                          img: Motorcycle,
                                          queue: false,
                                          id,
                                    })
                              }
                        >
                              Motorcycle
                        </button>
                        <button
                              className="buttonToAdd"
                              onClick={(e) =>
                                    addVehicle({
                                          size: 2,
                                          parked: 2,
                                          name: "Sedan",
                                          img: Sedan,
                                          queue: false,
                                          id,
                                    })
                              }
                        >
                              Sedan
                        </button>
                        <button
                              className="buttonToAdd"
                              onClick={(e) =>
                                    addVehicle({
                                          size: 3,
                                          parked: 3,
                                          name: "Truck",
                                          img: Truck,
                                          queue: false,
                                          id,
                                    })
                              }
                        >
                              Truck
                        </button>
                  </div>
                  <div className="freeSpaces">
                        <label className='title'>Status of parking spaces</label>
                        <label> small: {freeSpaces[1]}</label>
                        <label> medium: {freeSpaces[2]}</label>
                        <label> large: {freeSpaces[3]}</label>
                  </div>
            </div>
      );
};

export default GuiInterface;
