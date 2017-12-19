var noviStatusiInput=document.getElementById("novi-status");
var noviStatusBtn=document.getElementById("novi-status-btn");

var statusDiv;
var prviStatus;
var noviStatus;
var noviDiv;
var noviParagraf;

noviStatusBtn.onclick=function(e){
e.preventDefault(i);

statusDiv=document.getElementById("statusi");

prviStatus=document.getElementsByClassName("status")[0];
noviStatus=document.createTextNode(noviStatusiInput.value);

noviDiv=document.createElement('div');
noviDiv.classList.add("status");

noviParagraf=document.createElement('p');
noviParagraf.appendChild(noviStatus);

noviDiv.appendChild(noviParagraf);
statusDiv.insertBefore(noviDiv,prviStatus);

document.getElementById('novi-status').value = " ";

/*if (noviStatusiInput.value = " ") {
document.getElementById("novi-status-btn").disabled = true;
}
else {}
*/

}