import { useState } from "react";
import "./App.css";
import GuiInterface from "./components/GuiInterface";
import ModalSizeParking from "./components/ModalSizeParking";
import ParkedVehicles from "./components/ParkedVehicles";
import QueueVehicles from "./components/QueueVehicles";

function App() {
      const [freeSpaces, setFreeSpaces] = useState({
            1: 5,
            2: 5,
            3: 5,
      });

      const setParkingSize = (input) => {
            setFreeSpaces(
                  input
            )
      }

      const [vehicleParked, setVehicleParked] = useState([]);

      const [vehicleQueue, setVehicleQueue] = useState([]);

      const [id, setId] = useState(0);

      const [modalShow, setModalShow] = useState(true);

      const modalClose = () => {
            setModalShow(false);
      };

      const addVehicle = (e) => {
            while (e.parked < 4) {
                  if (freeSpaces[e.parked] > 0) {
                        if (e.queue) {
                              e.queue = false;
                              return (
                                    setFreeSpaces({
                                          ...freeSpaces,
                                          [e.parked]: freeSpaces[e.parked] - 1,
                                    }),
                                    setVehicleParked([...vehicleParked, e]),
                                    setVehicleQueue(vehicleQueue.splice(1))
                              );
                        } else {
                              return (
                                    setFreeSpaces({
                                          ...freeSpaces,
                                          [e.parked]: freeSpaces[e.parked] - 1,
                                    }),
                                    setVehicleParked([...vehicleParked, e]),
                                    setId(id + 1)
                              );
                        }
                  } else {
                        e.parked = e.parked + 1;
                        return addVehicle(e);
                  }
            }
            if (e.queue) {
                  e.parked = e.size;
                  return;
            } else {
                  e.parked = e.size;
                  e.queue = true;
                  return setVehicleQueue([...vehicleQueue, e]), setId(id + 1);
            }
      };

      const deleteVehicleParked = (vehicle, ind) => {
            setFreeSpaces({
                  ...freeSpaces,
                  [vehicle.parked]: freeSpaces[vehicle.parked] + 1,
            });
            setVehicleParked(
                  vehicleParked.filter((e, index) => {
                        return index !== ind;
                  })
            );
      };

      const deleteVehicleQueue = (ind) => {
            setVehicleQueue(
                  vehicleQueue.filter((e, index) => {
                        return index !== ind;
                  })
            );
      };

      const uploadVehiclesQueue = () => {
            if (vehicleQueue.length > 0) addVehicle(vehicleQueue[0]);
      };

      uploadVehiclesQueue();

      return (
            <div className="App container-fluid">
                  <ModalSizeParking
                        modalShow={modalShow}
                        modalClose={modalClose}
                        setParkingSize={setParkingSize}
                  />
                  <div className="row parking-container">
                        <section className="GUI-interface col-2">
                              <GuiInterface
                                    addVehicle={addVehicle}
                                    id={id}
                                    freeSpaces={freeSpaces}
                              />
                        </section>
                        <section className="vehicles-parked col-lg-8">
                              <ParkedVehicles
                                    vehicleParked={vehicleParked}
                                    deleteVehicleParked={deleteVehicleParked}
                              />
                        </section>
                        <section className="parking-queue col-lg-2">
                              <QueueVehicles
                                    vehicleQueue={vehicleQueue}
                                    deleteVehicleQueue={deleteVehicleQueue}
                              />
                        </section>
                  </div>
            </div>
      );
}

export default App;
