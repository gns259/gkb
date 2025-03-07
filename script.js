// 🎯 शादी की तारीख सेट करें
const weddingDate = new Date("March 9, 2025 00:00:00").getTime();

const timer = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = weddingDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days} दिन : ${hours} घंटे : ${minutes} मिनट : ${seconds} सेकंड`;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "🎉 शादी का दिन आ गया! 🎉";
    }
}, 1000);


