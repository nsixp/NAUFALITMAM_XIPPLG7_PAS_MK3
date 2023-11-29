"use strict";

const quizData = [
    {
        question: "Apa kepanjangan dari HTML?",
        a: "Hyper Text Markup Language",
        b: "High-level Text Machine Language",
        c: "Hyper Transfer and Markup Language",
        d: "Hyperlink and Text Markup Language",
        e: "High-level Transfer Machine Language",
        correct: "a",
    },
    {
        question: "Bahasa pemrograman apa yang sering digunakan untuk pengembangan aplikasi mobile?",
        a: "Java",
        b: "Python",
        c: "Swift",
        d: "C++",
        e: "Ruby",
        correct: "c",
    },
    {
        question: "Apa tujuan dari CSS (Cascading Style Sheets)?",
        a: "Mengatur tata letak halaman web",
        b: "Memberikan efek suara pada halaman web",
        c: "Mengelola data server",
        d: "Menambahkan interaktivitas pada halaman web",
        e: "Mengatur warna dan gaya",
        correct: "e",
    },
    {
        question: "Dalam JavaScript, mana yang bukan merupakan tipe data primitif?",
        a: "String",
        b: "Number",
        c: "Boolean",
        d: "Array",
        e: "Null",
        correct: "d",
    },
    {
        question: "Platform apa yang digunakan untuk pengembangan aplikasi Android?",
        a: "iOS",
        b: "Android Studio",
        c: "Visual Studio",
        d: "Eclipse",
        e: "Xcode",
        correct: "b",
    },
    {
        question: "Apa peran dari tag `<head>` dalam HTML?",
        a: "Menandai judul halaman",
        b: "Menampilkan teks utama halaman",
        c: "Menambahkan gambar pada halaman",
        d: "Menghubungkan halaman ke file eksternal",
        e: "Menyusun elemen-elemen utama",
        correct: "d",
    },
    {
        question: "Dalam pemrograman, apa yang dimaksud dengan `syntax error`?",
        a: "Kesalahan dalam tata bahasa program",
        b: "Kesalahan dalam logika program",
        c: "Kesalahan saat runtime",
        d: "Kesalahan saat kompilasi",
        e: "Kesalahan dalam penulisan variabel",
        correct: "a",
    },
    {
        question: "Manakah dari berikut yang bukan merupakan jenis looping dalam Python?",
        a: "For",
        b: "While",
        c: "Repeat",
        d: "Do-While",
        e: "Foreach",
        correct: "c",
    },
    {
        question: "Apa fungsi dari parameter `event` dalam JavaScript yang dipanggil oleh event listener?",
        a: "Menyimpan data form",
        b: "Menangkap input pengguna",
        c: "Membuat efek animasi",
        d: "Menghentikan proses default",
        e: "Mengirim data ke server",
        correct: "d",
    },
    {
        question: "Apa kegunaan dari SQL (Structured Query Language)?",
        a: "Memanipulasi data dalam database",
        b: "Menyusun tata letak halaman web",
        c: "Menggambar vektor dalam grafika komputer",
        d: "Mengelola server web",
        e: "Membuat animasi 3D",
        correct: "a",
    }
];

const quizContainer = document.querySelector(".app");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.querySelector(".question");
const aAnswer = document.getElementById("a--answer")
const bAnswer = document.getElementById("b--answer")
const cAnswer = document.getElementById("c--answer")
const dAnswer = document.getElementById("d--answer")
const eAnswer = document.getElementById("e--answer")
const submit = document.querySelector(".btn")

let currentQuiz = 0;
let score = 0;

const resetAnswer = function () {
    answerElement.forEach((el) => (el.checked = false));
}

const loadQuiz = function () {
    resetAnswer();

const currentQuizData = quizData[currentQuiz];

questionElement.textContent = currentQuizData.question;
aAnswer.textContent = currentQuizData.a;
bAnswer.textContent = currentQuizData.b;
cAnswer.textContent = currentQuizData.c;
dAnswer.textContent = currentQuizData.d;
eAnswer.textContent = currentQuizData.e;
}

loadQuiz();

const getSelected = function () {
    let answer;

    answerElement.forEach((el) => {
        if (el.checked) answer = el.id
    })

    return answer;
}

submit.addEventListener("click", function () {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quizContainer.innerHTML = score < 7 ?
            `<h2 class="question">Score kamu ${score * 10} poin, raih minimal 70 poin agar bisa menang!</h2>
        <img class="mx-auto d-block img-fluid" width="350" src="Gagal.jpg" alt="Coba lagi"/>
        <div class="d-grid gap-2 mt-2">
            <button class="btn btn-color-theme btn-lg" onclick="location.reload()">Coba lagi</button>
        </div>`:
        `<h2 class="question">Kamu GG banget!</h2>
        <img class="mx-auto d-block img-fluid" width="350" src="Berhasil.jpg" alt="Main lagi"/>
        <div class="d-grid gap-2 mt-2">
            <button class="btn btn-color-theme btn-lg" onclick="location.reload()">Main lagi</button>
        </div>`;
    }
})