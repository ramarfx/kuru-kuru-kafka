let angka = document.querySelector('.count');
const tombol = document.querySelector('.click');
const audio = document.getElementById('audio');
let angkaCount = 0;

tombol.addEventListener('click', () => {
	angkaCount++;
	angka.innerHTML = angkaCount;

	audioPlay();
	animasiKafka()
});

function audioPlay() {
	audio.play();

	audio.addEventListener('ended', () => {
		audio.currentTime = 0;
		audio.play();
	});
}

function animasiKafka() {
	const imageContainer = document.getElementById('image');
	let id = null;

	let random = Math.floor(Math.random() * 2) + 1;
	let elem = document.createElement('img');
	elem.src = `./asset/kafka${random}.gif`;
	elem.style.position = 'absolute';
	elem.style.width = '300px';
	elem.style.right = '-510px';
	elem.style.bottom = '50px';
	elem.style.zIndex = '-1';
	imageContainer.appendChild(elem);

	let pos = -510;
	let limit = window.innerWidth + 510;
	clearInterval(id);
	id = setInterval(frame, 12);
	function frame() {
		if (pos >= limit) {
			clearInterval(id);
			elem.remove();
		} else {
			pos += 20;
			elem.style.right = pos + 'px';
		}
	}
}
