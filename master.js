//Collecting players info
var centim_1 = prompt("Player 1, please add your height");
var age_1 = prompt("Player 1, please add your age");
var centim_2 = prompt("Player 2, please add your height");
var age_2 = prompt("Player 2, please add your age");	
var centim_3 = prompt("Player 3, please add your height");
var age_3 = prompt("Player 3, please add your age");

		
//Some game conditions
//Total
function total_p(centim,age) {
	return parseInt(centim) + (5*parseInt(age))
}

//Win
if ((total_p(centim_1,age_1) > total_p(centim_2,age_2)) && (total_p(centim_1,age_1) > total_p(centim_3,age_3))) {
	console.log("Player 1 has WON! His score is: " + total_p(centim_1,age_1));
	document.getElementById('score').textContent = "Player 1 has WON! His score is: " + total_p(centim_1,age_1);
}else if ((total_p(centim_2,age_2) > total_p(centim_1,age_1)) && (total_p(centim_2,age_2) > total_p(centim_3,age_3))) {
	console.log("Player 2 has WON! His score is: " + total_p(centim_2,age_2));
	document.getElementById('score').textContent = "Player 2 has WON! His score is: " + total_p(centim_2,age_2);
}else if ((total_p(centim_3,age_3) > total_p(centim_1,age_1)) && (total_p(centim_3,age_3) > total_p(centim_2,age_2))) {
	console.log("Player 3 has WON! His score is: " + total_p(centim_3,age_3));
	document.getElementById('score').textContent = "Player 3 has WON! His score is: " + total_p(centim_3,age_3);
}else if ((total_p(centim_1,age_1) === total_p(centim_2,age_2)) && (total_p(centim_1,age_1) === total_p(centim_3,age_3)) && (total_p(centim_2,age_2) === total_p(centim_3,age_3))) {
	console.log("PAR! The score is: " + total_p(centim_3,age_3));
	document.getElementById('score').textContent = "PAR! The score is: " + total_p(centim_3,age_3);
}