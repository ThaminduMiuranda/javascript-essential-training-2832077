/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
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
