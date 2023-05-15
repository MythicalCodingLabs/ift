var cash = 15;
var cashPerSec = 0;
var robotPrice = 15;
var smallMachinePrice = 100;
var levelupCost = 10000;
var lftMoney = 15;
var lvl = 1;
var lvlDisplay = 1;
var factoryPrice = 5000;
var smallMachineOwned = 0;
var robotOwned = 0;
var factoryOwned = 0;
var assemblerOwned = 0;
var shippingCenterOwned = 0;
var assemblerPrice = 500;
var shippingCenterPrice = 10000;
var shoppingPrice = 100000;
var shoppingOwned = 0; 
var pause = 0;
function load(){
document.getElementById("storeIn").innerHTML = "<div id='smallRobot' class='item' style='width:124px;' onclick='smallRobot()'>Buy Small Robot<p id='robotPriceDis'></p></div><div id='smallRobot' class='item' style='width:140px;' onclick='smallMachine()'>Buy Small Machine<p id='smallMachinePrice'></p></div><div id='assembler' class='item' style='width:124px;' onclick='assembler()'>Buy Assembler<p id='assemblerPriceDis'></p></div><div class='levelUp' onclick='levelUp()'>Advance to a new level<p id='levelupCost'></p></div>"
//loading save
  cash = parseInt(localStorage.getItem("cash"))
  cashPerSec = parseInt(localStorage.getItem("cashPerSec"))
  lvl = parseInt(localStorage.getItem("lvl"))
  robotPrice = parseInt(localStorage.getItem("robotPrice"))
  smallMachinePrice = parseInt(localStorage.getItem("machinePrice"))
  assemblerPrice = parseInt(localStorage.getItem("assemblerPrice"))
  factoryPrice = parseInt(localStorage.getItem("factoryPrice"))
  shippingCenterPrice = parseInt(localStorage.getItem("shippingPrice"))
  shoppingPrice = parseInt(localStorage.getItem("shoppingPrice"))
  for (let i = 0; i < parseInt(localStorage.getItem("robotOwned")); i++) {
    document.getElementById("smallRobotSec").innerHTML = document.getElementById("smallRobotSec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/hXhcqWY/C381-A704-8-E8-A-4-A67-8812-62-B12-AD179-CE-jpg.png' style='height: 50px'></div>"
    robotOwned++
}
for (let i = 0; i < parseInt(localStorage.getItem("machineOwned")); i++) {
    document.getElementById("smallMachineSec").innerHTML = document.getElementById("smallMachineSec").innerHTML + "<div class='smallroboticon' title='Small Machine' onclick='smallRobotInfo()'><img src='https://i.ibb.co/X2TMKnH/machine.png' style='height: 50px'></div>"
    smallMachineOwned++
}
for (let i = 0; i < parseInt(localStorage.getItem("assemblerOwned")); i++) {
    document.getElementById("assemblerSec").innerHTML = document.getElementById("assemblerSec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/TwWNc71/Untitled-drawing-3.png' style='height: 50px'></div>"
    assemblerOwned++
}
for (let i = 0; i < parseInt(localStorage.getItem("factoryOwned")); i++) {
    document.getElementById("factorySec").innerHTML = document.getElementById("factorySec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/gjB56MN/Untitled-drawing-2.png' style='height: 50px'></div>"
    factoryOwned++
}
for (let i = 0; i < parseInt(localStorage.getItem("shippingOwned")); i++) {
    document.getElementById("shippingCenterSec").innerHTML = document.getElementById("shippingCenterSec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/rc8ZsTD/Untitled-drawing-5.png' style='height: 45px; margin: 5px;'></div>"
    shippingCenterOwned++
}
for (let i = 0; i < parseInt(localStorage.getItem("shoppingOwned")); i++) {
    document.getElementById("shoppingCenterSec").innerHTML = document.getElementById("shoppingCenterSec").innerHTML + "<div class='smallroboticon' title='Shopping Center' onclick='smallRobotInfo()'><img src='https://i.ibb.co/yd43DTS/Untitled-drawing-6.png' style='height: 45px; margin: 5px;'></div>"
    shoppingOwned++
}
}
//Save
setInterval(function(){
  localStorage.setItem("save", 1);
  localStorage.setItem("cash", cash);
  localStorage.setItem("cashPerSec", cashPerSec);
  localStorage.setItem("lvl", lvl);
  localStorage.setItem("robotPrice", robotPrice);
  localStorage.setItem("machinePrice", smallMachinePrice);
  localStorage.setItem("assemblerPrice", assemblerPrice);
  localStorage.setItem("factoryPrice", factoryPrice);
  localStorage.setItem("shippingPrice", shippingCenterPrice);
  localStorage.setItem("robotOwned", robotOwned);
  localStorage.setItem("machineOwned", smallMachineOwned);
  localStorage.setItem("assemblerOwned", assemblerOwned);
  localStorage.setItem("factoryOwned", factoryOwned);
  localStorage.setItem("shippingOwned", shippingCenterOwned);
  localStorage.setItem("shopingOwned", shoppingOwned);
  localStorage.setItem("shopingPrice", shoppingPrice);
    },1000);
//Cash Update
setInterval(function(){
  if(cash < 1000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + cash;
  }else if(cash >= 1000 && cash < 10000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + firstDigit(cash) + "." +     Math.floor((cash / 100) % 10) + "K";
  }else if(cash >= 10000 && cash < 100000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + firstDigit(cash) + Math.floor((cash / 1000) % 10) + "." + Math.floor((cash / 100) % 10) +"K";}
    else if(cash >= 100000 && cash < 1000000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + firstDigit(cash) + Math.floor((cash / 10000) % 10) + Math.floor((cash / 1000) % 10) + "." + Math.floor((cash / 100) % 10) +"K";}
    else if(cash >= 1000000 && cash < 10000000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + firstDigit(cash) + "." + Math.floor((cash / 100000) % 10) +"M";
  }else if(cash >= 10000000 && cash < 100000000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + firstDigit(cash) + Math.floor((cash / 1000000) % 10) + "." + Math.floor((cash / 100000) % 10) + "M";
  }else if(cash >= 100000000 && cash < 1000000000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + firstDigit(cash) + Math.floor((cash / 10000000) % 10) + Math.floor((cash / 1000000) % 10) + "." + Math.floor((cash / 100000) % 10) + "M";
  }else if(cash >= 1000000000){
    document.getElementById("cash").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/2150/2150150.png' style='height: 20px; vertical-align: middle;'> Cash = " + cash;
  }
}, 0)
//Update function
setInterval(function(){
document.getElementById("menuMoney").innerHTML = "Cash = " + cash;
document.getElementById("menuLftMoney").innerHTML = "Lifetime Cash = " + lftMoney;
document.getElementById("robotPriceDis").innerHTML = "Price = " + robotPrice;
document.getElementById("smallMachinePrice").innerHTML = "Price = " + smallMachinePrice;
document.getElementById("levelupCost").innerHTML = "Price = " + levelupCost;
document.getElementById("lvlMenuSelect").innerHTML = lvlDisplay + "/" + lvl;
document.getElementById("menuCashPerSec").innerHTML = "Cash Per Second = " + cashPerSec
document.getElementById("shoppingCenterPrice").innerHTML = "Price = " + shoppingPrice
}, 0);
setInterval(function(){
  document.getElementById("factoryPrice").innerHTML = "Price = " + factoryPrice
  document.getElementById("shippingCenterPrice").innerHTML = "Price = " + shippingCenterPrice
  document.getElementById("menuCashPerSec").innerHTML = "Cash Per Second = " + cashPerSec
  document.getElementById("shoppingCenterPrice").innerHTML = "Price = " + shoppingPrice
  }, 0);
setInterval(function(){
  document.getElementById("assemblerPriceDis").innerHTML = "Price = " + assemblerPrice
  document.getElementById("menuCashPerSec").innerHTML = "Cash Per Second = " + cashPerSec
  document.getElementById("shoppingCenterPrice").innerHTML = "Price = " + shoppingPrice
}, 0)
//Calculation function
setInterval(function(){if(pause == 0){
  cash = cash + cashPerSec
  lftMoney = lftMoney + cashPerSec
  }}, 1000);
function smallRobot(){
  if(robotPrice <= cash){
    robotOwned++
    cashPerSec++
    cash = cash - robotPrice
    robotPrice = robotPrice + 15;
    document.getElementById("smallRobotSec").innerHTML = document.getElementById("smallRobotSec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/hXhcqWY/C381-A704-8-E8-A-4-A67-8812-62-B12-AD179-CE-jpg.png' style='height: 50px'></div>"
  }
}
function smallMachine(){
  if(smallMachinePrice <= cash){
    smallMachineOwned++
    cashPerSec = cashPerSec + 5;
    cash = cash - smallMachinePrice
    smallMachinePrice = smallMachinePrice + 100;
    document.getElementById("smallMachineSec").innerHTML = document.getElementById("smallMachineSec").innerHTML + "<div class='smallroboticon' title='Small Machine' onclick='smallRobotInfo()'><img src='https://i.ibb.co/X2TMKnH/machine.png' style='height: 50px'></div>"
  }
}
function closeInfo(){
  document.getElementById('info').innerHTML = ""
}
function myFunction() {
  pause = 1;
  const popup = document.getElementById("menu");
  popup.showModal();
  popup.addEventListener("click", e => {
  const dialogDimensions = popup.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    popup.close()
    pause = 0;
  }
})
}
function levelUp(){
  if(lvl == 1){
  if(cash >= levelupCost){
    lvl++
    cash = cash - levelupCost
    document.getElementById("storeIn").innerHTML = "<div id='smallRobot' class='item' style='width:124px;' onclick='smallRobot()'>Buy Small Robot<p id='robotPriceDis'></p></div><div id='smallRobot' class='item' style='width:140px;' onclick='smallMachine()'>Buy Small Machine<p id='smallMachinePrice'></p></div><div id='assembler' class='item' style='width:124px;' onclick='assembler()'>Buy Assembler<p id='assemblerPriceDis'></p></div>"
  }
  }
}
function lvlFdw(){
  if(lvl == lvlDisplay){

  }else if(lvlDisplay == 1){
    document.getElementById('storeIn').innerHTML = "<div id='factory' class='item' style='width:124px;' onclick='factoryBuy()'>Buy a Factory<p id='factoryPrice'></p></div>"
    lvlDisplay++
  }
}
function lvlFdw(){
  if(lvl == lvlDisplay){

  }else if(lvlDisplay == 1){
    document.getElementById('storeIn').innerHTML = "<div id='factory' class='item' style='width:124px;' onclick='factoryBuy()'>Buy a Factory<p id='factoryPrice'></p></div><div id='shippingCenter' class='item' style='width:174px;' onclick='shippingCenter()'>Buy a Shipping Center<p id='shippingCenterPrice'></p></div><div id='shopingCenter' class='item' style='width:174px;' onclick='shoppingCenter()'>Buy a Shoping Center<p id='shoppingCenterPrice'></p></div>"
    lvlDisplay++
    document.getElementById("lvlMenuSelect").innerHTML = lvlDisplay + "/" + lvl;
  }
}
function lvlBack(){
  if(lvlDisplay > 1){
    if(lvlDisplay == 2){
      document.getElementById("storeIn").innerHTML = "<div id='smallRobot' class='item' style='width:124px;' onclick='smallRobot()'>Buy Small Robot<p id='robotPriceDis'></p></div><div id='smallRobot' class='item' style='width:140px;' onclick='smallMachine()'>Buy Small Machine<p id='smallMachinePrice'></p></div><div id='assembler' class='item' style='width:124px;' onclick='assembler()'>Buy Assembler<p id='assemblerPriceDis'></p></div>"
      lvlDisplay--
    document.getElementById("lvlMenuSelect").innerHTML = lvlDisplay + "/" + lvl;
    }
  }
}
function factoryBuy(){
  if(cash >= factoryPrice){
    cashPerSec = cashPerSec + 100;
    factoryOwned++
    cash = cash - factoryPrice;
    factoryPrice = factoryPrice + 1000;
    document.getElementById("factorySec").innerHTML = document.getElementById("factorySec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/gjB56MN/Untitled-drawing-2.png' style='height: 50px'></div>"
  }
}
function assembler(){
  if(cash >= assemblerPrice){
    assemblerOwned++
    cashPerSec = cashPerSec + 25;
    cash = cash - assemblerPrice;
    assemblerPrice = assemblerPrice + 500;
    document.getElementById("assemblerSec").innerHTML = document.getElementById("assemblerSec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/TwWNc71/Untitled-drawing-3.png' style='height: 50px'></div>"
  }
}
function shippingCenter(){
  if(cash >= shippingCenterPrice){
    shippingCenterOwned++
    cashPerSec = cashPerSec + 500;
    cash = cash - shippingCenterPrice;
    shippingCenterPrice = shippingCenterPrice + 10000;
    document.getElementById("shippingCenterSec").innerHTML = document.getElementById("shippingCenterSec").innerHTML + "<div class='smallroboticon' title='Small Robot' onclick='smallRobotInfo()'><img src='https://i.ibb.co/rc8ZsTD/Untitled-drawing-5.png' style='height: 45px; margin: 5px;'></div>"
  }
}
function shoppingCenter(){
  if(cash >= shoppingPrice){
    shoppingOwned++
    cashPerSec = cashPerSec + 5000;
    cash = cash - shippingCenterPrice;
    shoppingPrice = shoppingPrice + 100000;
    document.getElementById("shoppingCenterSec").innerHTML = document.getElementById("shoppingCenterSec").innerHTML + "<div class='smallroboticon' title='Shopping Center' onclick='smallRobotInfo()'><img src='https://i.ibb.co/yd43DTS/Untitled-drawing-6.png' style='height: 45px; margin: 5px;'></div>"
  }
}
function firstDigit(num) {
    // 1: convert absolute form to string and get length of integer
    const len = String(Math.abs(num)).length;
    const divisor = 10 ** (len - 1);
    // 2: get integer part from result of division
    return Math.trunc(num / divisor);
}
function clearSave(){
  if(confirm("Are you sure you want to clear your save?")){
  localStorage.setItem("cash", 15);
  localStorage.setItem("cashPerSec", 0);
  localStorage.setItem("lvl", 1);
  localStorage.setItem("robotPrice", 15);
  localStorage.setItem("machinePrice", 100);
  localStorage.setItem("assemblerPrice", 500);
  localStorage.setItem("factoryPrice", 5000);
  localStorage.setItem("shippingPrice", 10000);
  localStorage.setItem("robotOwned", 0);
  localStorage.setItem("machineOwned", 0);
  localStorage.setItem("assemblerOwned", 0);
  localStorage.setItem("factoryOwned", 0);
  localStorage.setItem("shippingOwned", 0);
  localStorage.setItem("shoppingOwned", 0);
  localStorage.setItem("shoppingPrice", 100000);
  cash = 15;
  cashPerSec = 0;
  robotPrice = 15;
  smallMachinePrice = 100;
  levelupCost = 10000;
  lftMoney = 15;
  lvl = 1;
  lvlDisplay = 1;
  factoryPrice = 5000;
  smallMachineOwned = 0;
  robotOwned = 0;
  factoryOwned = 0;
  assemblerOwned = 0;
  shippingCenterOwned = 0;
  assemblerPrice = 500;
  shippingCenterPrice = 10000;
  shoppingPrice = 100000;
  document.getElementById('mainFact').innerHTML = "    <div id='smallRobotSec' class='iconSection'></div><div id='smallMachineSec' class='iconSection'></div><div id='assemblerSec' class='iconSection'></div><div id='factorySec' class='iconSection'></div><div id='shippingCenterSec' class='iconSection'></div><div id='shoppingCenterSec' class='iconSection'></div>"
  }
}
function checkDev(){
  let good = btoa(escape(atob(binaryAgent(atob("MDEwMTAxMTAgMDExMDEwMTEgMDEwMTEwMTAgMDExMDExMTEgMDExMDAwMTEgMDAxMTAwMDAgMDAxMTAwMDEgMDEwMDEwMDAgMDEwMTAwMTAgMDExMDEwMTEgMDExMDEwMDAgMDExMDEwMDEgMDEwMTAwMTAgMDAxMTAwMTEgMDEwMDAwMTAgMDExMDAwMDEgMDEwMTAxMTAgMDExMDEwMTAgMDEwMDExMTAgMDExMDExMTEgMDEwMTAwMTAgMDExMDExMDAgMDExMDAxMDAgMDExMTAwMTEgMDExMDAwMDEgMDEwMDAxMTAgMDExMTAwMDAgMDEwMTAwMDEgMDEwMTAxMDEgMDEwMTAxMDAgMDAxMTAwMDAgMDAxMTEwMDE=")))))
  let password = prompt("Enter dev password");
  if(atob(atob(unescape(atob(good)))) == password){
    alert("Welcome")
    document.getElementById('devTools').innerHTML = "<p>Cash Slider</p><input type='range' id='devCash' min='0' max='100000000'><button onclick='saveCashDev()'>Save Cash</button>"
  }else{
    alert("Goodbye")
  }
}
function saveCashDev(){
  cash = document.getElementById('devCash').value;
  cashPerSec = 0;
}
function binaryAgent(str) {

var binString = '';

str.split(' ').map(function(bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
return binString;
}

