var profil = {
coverImage: "cover.jpg",
profileImage: "profil.jpg",
name: "Dragana",
lastName : "Soldat",
statusi: [
`First tweet`,
`Second tweet`,
`Third tweet`,
]

} 

var hero = document.getElementById (`hero`);
hero.style.background= "url(' " + profil.coverImage + " ') no-repeat center";


var profilImage = document.getElementById (`profile-img`); 
profilImage.alt = profil.name + " " + profil.lastName + "profile photo"; 
profilImage.src = profil.profileImage; 
profilImage.style.width = "200px";
profilImage.style.height = "auto";


var fullName = document.getElementById (`full-name`); 
fullName.innerHTML= profil.name + " " + profil.lastName;


var statusiDiv = document.getElementById ('statusi');

for (var i=profil.statusi.length -1; i>=0; i--){

div=document.createElement('div');
p= document.createElement('p');
p.innerHTML=profil.statusi [i];

div.appendChild (p);
div.classList.add ('status');
statusiDiv.appendChild (div);

}