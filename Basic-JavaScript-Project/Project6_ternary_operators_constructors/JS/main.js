function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementByIs("Ride").innerHTML = Can_ride + "to ride.";
}

function Vote_Function () {
    var Height, Can_vote;
    Height = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementByIs("Vote").innerHTML = Can_vote + "to vote.";
}