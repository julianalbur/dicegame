var box = document.getElementById("roll");
function dieRoll(){
    var roll = Math.random()*11+1;
    roll = Math.round(roll);
    return roll;
}
document.getElementById("die-img").onclick = function(){
    //change image
    document.getElementById("die-img").src="img/dodecahedron.gif";
    setTimeout(function(){
        //change image to static again
        document.getElementById("die-img").src="img/dodecahedron-frame1.png";
        document.getElementById("roll").innerHTML = dieRoll();
    },2899);
    
}

var box = document.getElementById("roll");
function dieRoll(){
    var roll = Math.random()*11+1;
    roll = Math.round(roll);
    return roll;
}
document.getElementById("die2-img").onclick = function(){
    //change image
    document.getElementById("die2-img").src="img/dodecahedron.gif";
    setTimeout(function(){
        //change image to static again
        document.getElementById("die2-img").src="img/dodecahedron-frame1.png";
        document.getElementById("roll2").innerHTML = dieRoll();
    },2899);
    
}


