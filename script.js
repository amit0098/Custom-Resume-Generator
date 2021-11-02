// alert("Loading");
function addNewWEField() {
// console.log("Adding new Field");

  let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("weField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 3);
 newNode.setAttribute("placeholder","Enter");

let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
//   console.log("Adding new Field");

  let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("eqField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 3);
 newNode.setAttribute("placeholder","Enter");

let aqOb=document.getElementById("aq");
let aqAddButtonOb=document.getElementById("aqAddButton");

aqOb.insertBefore(newNode, aqAddButtonOb);
}

// generating cv
function GenerateCV()
{
  // console.log("generating cv");

  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1")

  nameT1.innerHTML = nameField;

// direct
document.getElementById("nameT2").innerHTML = nameField;

// contacts
document.getElementById("ContactT").innerHTML = document.getElementById("ContactField").value;

// address
document.getElementById("AddressT").innerHTML = document.getElementById("AddressField").value;
document.getElementById("fbT").innerHTML = document.getElementById("FbField").value;
document.getElementById("InstaT").innerHTML = document.getElementById("instafield").value;
document.getElementById("LinkedT").innerHTML = document.getElementById("LinkedField").value;

// we
let wes=document.getElementsByClassName("weField");
let str='';

for(let e of wes)
{
  str=str+`<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML = str;

// aq
let aqs=document.getElementsByClassName("eqField");

let str1='';

for(let e of aqs)
{
str1+=`<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML = str1;

//code for setting image

let file=document.getElementById("imgField").files[0];

console.log(file);

let reader = new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);

// set the image to template

reader.onloadend=function(){
  document.getElementById("imgTemplate").src = reader.result;
}

document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-template").style.display = "block";
}

// print cv
function printCV(){
  window.print();
}

