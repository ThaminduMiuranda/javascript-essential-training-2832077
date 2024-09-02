/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const stepperMotor = {
  name: "Stepper Motor",
  voltage: 5,
  current: "DC",
  modelNum: "28BYJ-48",
  brand: "ROHS",
};

const servoMotor = {
  name: "Servo Motor",
  voltage: 6,
  current: "DC",
  modelNum: "MG90",
  torque: 2.2,
  brand: "ROHS",
};

const DCMotor = {
  name: "DC Motor",
  voltage: 3,
  current: "DC",
};

const box = {
  name: "ArduinoBox",
  compartments: 3,
  color: "white",
  material: "plastic",
  compartment_1: {
    numItems: 3,
    motors: [stepperMotor, servoMotor, DCMotor],
  },
  lidOpen: "true",
  toggleLid: function (LidStatus) {
    this.lidOpen = LidStatus;
  },
  addMotor: function (motorType) {
    const motor = motorType;
    this.compartment_1.motors.push(motor);
    box.compartment_1.numItems += 1;
    console.log(box.compartment_1.motors);
    console.log(box.compartment_1.numItems);
  },
};
