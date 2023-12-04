const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question.innerHTML = "Berikan Aku Sesuatu Biar Semangat ";
gif.src =
"https://media0.giphy.com/media/U9wosjaItD4ulihQRi/200.gif?cid=790b76114c00ba2f0acc691c87cdf3249e871c5a9b1db3df&rid=200.gif&ct=s"; });

noBtn.addEventListener("click", () => {
question.innerHTML = "Oke Sayang,Aku Tidak Akan Menyerah Untukmu <3 ";
gif.src =
"https://i.pinimg.com/originals/f0/74/ee/f074ee7eacf66b62b5846a06b2c422d0.gif";});