const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("backpack:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);
console.log("Srap Length L:", backpack.strapLength.left);

//following cannot be done in dot notation
var query = "pocketNum";
console.log("The pocketNum value:", backpack[query]);
