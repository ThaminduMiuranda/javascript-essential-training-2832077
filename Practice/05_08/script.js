/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

document.querySelector(".backpack").classList.add("open", "damage");
document.querySelector(".backpack").classList.remove("open");
document.querySelector("#pack01").setAttribute("data-modelNum", "SJKJ8763");
const modelNum = document
  .querySelector("#pack01")
  .getAttribute("data-modelNum");
console.log(modelNum);
document.querySelector("#pack01").dataset.modelnum = "BJJVHKJ53674356";
console.log(document.querySelector("#pack01").dataset.modelnum);
