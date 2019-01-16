var lagi = true;
while (lagi) {

	// Menangkap pilihan player
	var playerChoise = prompt('Pilihlah salah satu antara gajah, orang atau semut');

	// Menangkap pilihan computer dengan bilangan random
	var comChoise = Math.random();

	if (comChoise < 0.33 ){
		comChoise = 'gajah';
	} else if (comChoise >= 0.33 && comChoise < 0.66) {
		comChoise = 'orang';
	} else {
		comChoise = 'semut';
	}


	// Menentukan rules 
	var hasil = '';

	if (comChoise == playerChoise ) {
		hasil = 'SERI';
	} 
	else if (playerChoise == 'gajah') {
		hasil = (comChoise == 'orang') ? 'MENANG' : 'KALAH';
	} 
	else if (playerChoise == 'orang') {
		hasil = (comChoise == 'semut') ? 'MENANG' : 'KALAH';
	} 
	else if (playerChoise == 'semut') {
		hasil = (comChoise == 'manusia') ? 'MENANG' : 'KALAH';
	} 
	else {
		hasil = 'memasukkan pilihan yang salah';
	}

	// Tampilkan hasil
	alert('Kamu memiilih ' + playerChoise + '\nKomputer memilih ' + comChoise + '\n\nMaka ' + hasil);
	lagi = confirm('Main lagi?');
}

alert('Terima kasih telah bermain')