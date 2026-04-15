let flag = 1;

function myfunc() {
	// Collect all cell values
	var b1 = document.getElementById("b1").value;
	var b2 = document.getElementById("b2").value;
	var b3 = document.getElementById("b3").value;
	var b4 = document.getElementById("b4").value;
	var b5 = document.getElementById("b5").value;
	var b6 = document.getElementById("b6").value;
	var b7 = document.getElementById("b7").value;
	var b8 = document.getElementById("b8").value;
	var b9 = document.getElementById("b9").value;

	// Collect all cell elements
	var b1btn = document.getElementById("b1");
	var b2btn = document.getElementById("b2");
	var b3btn = document.getElementById("b3");
	var b4btn = document.getElementById("b4");
	var b5btn = document.getElementById("b5");
	var b6btn = document.getElementById("b6");
	var b7btn = document.getElementById("b7");
	var b8btn = document.getElementById("b8");
	var b9btn = document.getElementById("b9");

	var allBtns = [b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn];

	//  disable all buttons except the winning ones
	function highlightWin(winners) {
		allBtns.forEach(function (btn) { btn.disabled = true; });
		winners.forEach(function (btn) {
			btn.disabled = false; // keep visible, just stop further clicks
			btn.style.color = "red";
		});
	}

	//  check a win condition for a given symbol
	var vals = [b1, b2, b3, b4, b5, b6, b7, b8, b9].map(v => v.toUpperCase());

	function won(i, j, k, symbol) {
		return vals[i] === symbol && vals[j] === symbol && vals[k] === symbol;
	}

	// All 8 win lines: [indices, button references]
	var lines = [
		[0, 1, 2, b1btn, b2btn, b3btn],
		[3, 4, 5, b4btn, b5btn, b6btn],
		[6, 7, 8, b7btn, b8btn, b9btn],
		[0, 3, 6, b1btn, b4btn, b7btn],
		[1, 4, 7, b2btn, b5btn, b8btn],
		[2, 5, 8, b3btn, b6btn, b9btn],
		[0, 4, 8, b1btn, b5btn, b9btn],
		[2, 4, 6, b3btn, b5btn, b7btn],
	];

	for (var i = 0; i < lines.length; i++) {
		var l = lines[i];
		if (won(l[0], l[1], l[2], 'X')) {
			document.getElementById('print').innerHTML = "Player X won, Congratulations Champ!";
			highlightWin([l[3], l[4], l[5]]);
			return;
		}
		if (won(l[0], l[1], l[2], '0')) {
			document.getElementById('print').innerHTML = "Player 0 won, Congratulations Champ!";
			highlightWin([l[3], l[4], l[5]]);
			return;
		}
	}

	var allFilled = vals.every(v => v === 'X' || v === '0');
	if (allFilled) {
		document.getElementById('print').innerHTML = "Stalemate, Play Again!";
		return;
	}

	// Show whose turn it is
	if (flag === 1) {
		document.getElementById('print').innerHTML = "~ Player X Turn ~";
	} else {
		document.getElementById('print').innerHTML = "~ Player 0 Turn ~";
	}
}

function myfunc_2() {
	location.reload();
}

function myfunc_3() {
	if (flag === 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag === 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag === 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag === 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag === 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag === 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag === 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag === 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag === 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	} else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
