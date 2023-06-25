let angka = document.querySelector('.count');
const audio = document.getElementById('audio');
let angkaCount = 0;

function clickFungsi() {
	angkaCount++;
	angka.innerText = angkaCount;

	audioPlay();
	animasiKafka();
}

const audioList = [
	new Audio('src/asset/audio1.mp3'),
	new Audio('src/asset/audio2.mp3'),
];

for (const audio of audioList) {
	audio.preload = 'auto';
}

function audioPlay() {
	let audio;
	let random = Math.floor(Math.random() * 2);

	audio = audioList[random]

	audio.play();
	audio.addEventListener("ended", function () {
		this.remove();
  });
}

function animasiKafka() {
	const imageContainer = document.getElementById('image');
	let id = null;

	let random = Math.floor(Math.random() * 2) + 1;
	let elem = document.createElement('img');
	elem.src = `./src/asset/kafka${random}.gif`;
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
