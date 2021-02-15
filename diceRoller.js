document.getElementById("doublesCounter").value=0;

/*This method simulates a dice roll by generating 2 random numbers and also tracks if the user 
rolls doubles. When the doubleCounter reaches 3 the player does to jail and the fields are reset.
totalRolls is tracked by incrementing totalRolls by 1 after each roll.*/
function RollDice() {
    document.getElementById("die1").value = Math.floor(Math.random()*6) + 1; /*Generates 2 random numbers to simulate a dice roll*/
    document.getElementById("die2").value = Math.floor(Math.random()*6) + 1;
    if (document.getElementById("die1").value == document.getElementById("die2").value && document.getElementById("doublesCounter").value >= 2){
        alert("Too many doubles! You have been put in jail! Game Over");
        document.getElementById("doublesCounter").value=0;
        document.getElementById("totalRolls").value=0;
    }else if (document.getElementById("die1").value == document.getElementById("die2").value){
            document.getElementById("doublesCounter").value++;
            alert("Doubles! Move your piece and click the button to Roll again!")
    } 
    document.getElementById("totalRolls").value++;
}