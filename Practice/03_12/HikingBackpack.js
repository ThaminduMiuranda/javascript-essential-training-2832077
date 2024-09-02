import Backpack from "./Backpack";

class HikingBackpack extends Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity
  ) {
    // Define properties:
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    this.hydrationCapacity = hydrationCapacity; //In liters
  }

  checkHydration() {
    if (this.hydrationCapacity > 0) {
      console.log("You have ${this.hydrationCapacity} liters of water left.");
    } else {
      console.log("You have no water left. Refill the pack");
    }
  }
}
