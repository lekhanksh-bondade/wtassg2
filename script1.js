function addRow()
{
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var username = document.getElementById('username').value;
	var email = document.getElementById('ema').value;
	var age = document.getElementById('age').value;
	var phn = document.getElementById('phn').value;

	var table = document.getElementsByTagName('table')[0];

	var newRow = table.insertRow(table.rows.length);

	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);
	var cel4 = newRow.insertCell(3);
	var cel5 = newRow.insertCell(4);
	var cel6 = newRow.insertCell(5);

	cel1.innerHTML = fname;
	cel2.innerHTML = lname;
	cel3.innerHTML = username;
	cel4.innerHTML = email;
	cel5.innerHTML = age;
	cel6.innerHTML = phn;

	var form = document.getElementById("myForm");
	function handleForm(event) { event.preventDefault(); } 
	form.addEventListener('submit', handleForm);
}