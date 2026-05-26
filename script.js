const slide = document.getElementById("slide");
const music = document.getElementById("music");

// daftar semua foto
const images = [
  "images/foto 1.jpeg",
  "images/foto 2.jpeg",
  "images/foto 3.jpeg",
  "images/foto 4.jpg",
  "images/foto 5.jpg",
  "images/foto 6.jpg"
];

// mulai dari foto pertama
let current = 0;

// tampilkan foto pertama
slide.src = images[current];

// fungsi ganti foto
function nextPhoto(){

  current++;

  if(current >= images.length){
    current = 0;
  }

  slide.src = images[current];
}

// geser foto tiap 3 detik
setInterval(nextPhoto, 3000);

// ambil lagu pilihan
const lagu = localStorage.getItem("laguDipilih");

// pilih source lagu
if(lagu === "debu"){

  music.src = "music/sampai-jadi-debu.mp3";

}else{

  music.src = "music/masa-ini-nanti-masa-indah.mp3";

}

// load lagu
music.load();

// autoplay setelah halaman dibuka
window.addEventListener("load", () => {

  music.play().catch(() => {

    console.log("Autoplay diblok browser");

  });

});