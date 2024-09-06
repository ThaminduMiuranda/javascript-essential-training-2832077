const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "laptop",
  "light bulb",
  "USB drive",
  "elephant",
];

const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  // Your code goes here
  newDeskArr.pop();
  newDeskArr.sort();
  const phone = newDeskArr.pop();
  newDeskArr.unshift(phone);
  //   const valueToMove = "USB drive";
  //   const index = newDeskArr.indexOf(valueToMove);

  //   const [removedItem] = newDeskArr.splice(index, 1);
  //   newDeskArr.push(removedItem);
  const usbIndex = newDeskArr.indexOf("USB drive");
  newDeskArr.push(newDeskArr.splice(usbIndex, 1)[0]);

  //   newDeskArr = newDeskArr.filter((item) => item !== "laptop");
  const laptop = newDeskArr.indexOf("laptop");
  newDeskArr.splice(laptop, 1);

  // Your code ends here

  return newDeskArr;
};

const result = processArray(deskArray);

console.log(result);
