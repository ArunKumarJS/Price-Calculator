// const marvels = ["Iron Man", "SpiderMan", "Black Panther", "Doctor Strange", "Hulk", "Thor"]

// console.log(marvels);
// console.log(marvels.length);
// console.log(marvels[marvels.length - 1]);
// // console.log([marvels.length - 1]);
// console.log("we have " + [marvels.length] + " super Heroes");
// console.log(`we have ${marvels.length} super Heroes`);

let sideLength = document.querySelector("#len");
let sideWidth = document.querySelector("#wid");
let answer = document.querySelector(".answer");
let amount = document.querySelector("#price");
let answer1 = document.querySelector(".answer1");

function myFunction() {
    let lenToFeet = (sideLength.value);
    let widToFeet = (sideWidth.value);
    let Area = Math.round((lenToFeet * widToFeet)/144);
    // answer.innerHTML = Area;
    let rupees = (amount.value);
    let priceCal = Math.round(Area * rupees);
    answer.textContent = (Area) + " sq.ft";
    answer1.textContent = (priceCal) + " Rupees";
  }

  // function resetFunction() {
  //   document.getElementById("myForm").reset();
  // }
