for (var index = 1; index < 101 ; index++) {
    var h3 = document.createElement("h3")

    h3.textContent = ("Accustaion: " + index);

    h3.addEventListener("click", captureIndex(index));

    document.body.appendChild(h3) 
    
}
var array;
function captureIndex(index){
    return function () {
        alert("Accusation: " + index + " i accuse " + friends[index % friends.length] + " with the " + weapons[index % weapons.length] + " in the " + loc[index % loc.length])
    }
}

var friends = ["Frank", "vHARLIE", "LambO", "carlo", "timothy"];
var loc = ["basketball court", "house", "alley", "lounge", "billiard room", "bathroom", "jungle", "raceway" , "jakes house", "balcony"]
var weapons = ["knife", "sword", "tortilla", "katana", "bandana", "apple", "7-11", "pc", "webcam", "chair", "fire estinguisher", "fish", "frozen peas", "plate", "soda", "TV", "origami", "igloo", "baloon", "goku's final form"]