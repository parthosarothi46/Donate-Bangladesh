const donationBtn = document.querySelector("#donation-btn");
const historyBtn = document.querySelector("#history-btn");
const donationCard = document.querySelector("#donation-card");
const historyCard = document.querySelector("#history-card");

donationBtn.addEventListener("click", function () {
  donationCard.classList.remove("hidden");
  historyCard.classList.add("hidden");
});

historyBtn.addEventListener("click", function () {
  donationCard.classList.add("hidden");
  historyCard.classList.remove("hidden");
});
