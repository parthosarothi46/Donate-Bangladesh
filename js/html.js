const donationBtn = document.querySelector("#donation-btn");
const historyBtn = document.querySelector("#history-btn");
const donationCard = document.querySelector("#donation-card");
const historyCard = document.querySelector("#history-card");
const donateNoakhali = document.querySelector("#donate-noakhali");
let totalAmount = document.querySelector("#my-amount");
let noakhaliDonation = document.querySelector("#noakhali-donation");

donationBtn.addEventListener("click", function () {
  donationCard.classList.remove("hidden");
  historyCard.classList.add("hidden");
  donationBtn.classList.remove(
    "font-medium",
    "text-secondary-text",
    "border",
    "border-secondary-light"
  );
  donationBtn.classList.add("font-semibold", "text-primary-text", "bg-btn-bg");
  historyBtn.classList.remove(
    "font-semibold",
    "text-primary-text",
    "bg-btn-bg"
  );
  historyBtn.classList.add(
    "font-medium",
    "text-secondary-text",
    "border",
    "border-secondary-light"
  );
});

historyBtn.addEventListener("click", function () {
  donationCard.classList.add("hidden");
  historyCard.classList.remove("hidden");
  historyBtn.classList.remove(
    "font-medium",
    "text-secondary-text",
    "border",
    "border-secondary-light"
  );
  historyBtn.classList.add("font-semibold", "text-primary-text", "bg-btn-bg");
  donationBtn.classList.remove(
    "font-semibold",
    "text-primary-text",
    "bg-btn-bg"
  );
  donationBtn.classList.add(
    "font-medium",
    "text-secondary-text",
    "border",
    "border-secondary-light"
  );
});

donateNoakhali.addEventListener("click", function () {
  let myAmount = Number(document.querySelector("#my-amount").innerText);
  let totalDonation = Number(
    document.querySelector("#noakhali-donation").innerText
  );
  let donate = Number(document.querySelector("#noakhali-donate-amount").value);
  remainingAmount = myAmount - donate;
  latestDonation = totalDonation + donate;
  totalAmount.innerText = remainingAmount;
  noakhaliDonation.innerText = latestDonation;
  const childEl = document.createElement("div");
  childEl.className = "border border-input-border rounded-2xl p-8";
  childEl.innerHTML = `<p
            class="font-lexend text-xl font-bold leading-7 text-primary-text mb-4"
        >
            96500 Taka is Donated for famine-2024 at Feni, Bangladesh
        </p>
        <p
            class="font-lexend text-base font-light leading-6 text-secondary-text"
        >
            Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)
        </p>`;
  historyCard.appendChild(childEl);
});
