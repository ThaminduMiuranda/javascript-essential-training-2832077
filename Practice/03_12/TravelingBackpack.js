import Backpack from "./Backpack";

class TravellingBackpack extends Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hasBackSupport
  ) {
    // Define properties:
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    this.hasBackSupport = hasBackSupport;
  }

  checkBackSupport(BackSupportStatus) {
    this.hasBackSupport = BackSupportStatus;
  }
}
