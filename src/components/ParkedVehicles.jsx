import React from "react";
import "../styles/parkedVehicles.css";

const ParkedVehicles = (props) => {
      const { vehicleParked, deleteVehicleParked } = props;

      return (
            <div className="parked-container">
                  <label className="parked-title">VEHICLES PARKED</label>
                  <div className="parked-vehicles-container">
                        {vehicleParked.map((vehicles, index) => {
                              return (
                                    <div className="vehicle">
                                          <img
                                                src={vehicles.img}
                                                alt="vehicle-img"
                                          />
                                          <label className="vehicle-name">
                                                {vehicles.name}
                                          </label>
                                          <button
                                                className='button-delete-vehicle-parked'
                                                onClick={(e) =>
                                                      deleteVehicleParked(
                                                            vehicles,
                                                            index
                                                      )
                                                }
                                          >
                                                DELETE
                                          </button>
                                    </div>
                              );
                        })}
                  </div>
            </div>
      );
};

export default ParkedVehicles;
