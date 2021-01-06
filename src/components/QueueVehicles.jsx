import React from "react";
import "../styles/queueVehicles.css";

const QueueVehicles = (props) => {
      const { vehicleQueue, deleteVehicleQueue } = props;

      return (
            <div className="queue-container">
                  <label className="queue-title">VEHICLES QUEUE</label>
                  <div className="queue-vehicles-container">
                        {vehicleQueue.map((vehicle, index) => {
                              return (
                                    <div className="vehicle">
                                          <img
                                                src={vehicle.img}
                                                alt="vehicle-img"
                                          />
                                          <label className="vehicle-name">
                                                {vehicle.name}
                                          </label>
                                          <button
                                                className="button-delete-vehicle-parked queue-button"
                                                onClick={(e) =>
                                                      deleteVehicleQueue(index)
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

export default QueueVehicles;
