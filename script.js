//1) Select the section with an id of container without using querySelector.
document.getElementById("container");
//2) Select the section with an id of container using querySelector.
document.querySelector("#container");
//3) Select all of the list items with a class of "second".
document.getElementsByClassName("second");
//4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementsByTagName("ol").getElementsByClassName("third");
//5) Give the section with an id of container the text "Hello!".
document.getElementById("container").innerHTML = '<p>Hello!</p>';
//6) Add the class main to the div with a class of footer
let element=document.getElementByClassName("footer");
element.classList.add("main");
//7) Remove the class main on the div with a class of footer.
let element2=document.getElementByClassName("footer");
element2.classList.remove("main");
//8) Create a new li element.
let x = document.createElement("LI");
//9) Give the li the text "four".
x2.innerHTML='<p>four</p>';
//10) Append the li to the ul element
document.getElementsByTagName("ul").appendChild(x);
//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let iter =document.getElementsByTagName("ol").getElementsByTagName("li");
for(let i =0;i<iter.length;i++){
    iter[i].style.backgroundColor="green";
}
//13) Remove the div with a class of footer.
let elem =document.getElementsByClassName("footer");
elem.parentNode.removeChild(elem);