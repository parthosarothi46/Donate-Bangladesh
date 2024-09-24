const donationBtn = document.querySelector("#donation-btn");
const historyBtn = document.querySelector("#history-btn");
const donationCard = document.querySelector("#donation-card");
const historyCard = document.querySelector("#history-card");
const donateNoakhali = document.querySelector("#donate-noakhali");
let totalAmount = document.querySelector("#my-amount");
let noakhaliDonation = document.querySelector("#noakhali-donation");

donationBtn.addEventListener("click", function () {
  historyCard.classList.add("hidden");
  donationCard.classList.remove("hidden");
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
  const noakhaliTitle = document.querySelector("#noakhali-title").innerText;
  let myAmount = Number(document.querySelector("#my-amount").innerText);
  let totalDonation = Number(
    document.querySelector("#noakhali-donation").innerText
  );
  let donate = Number(document.querySelector("#noakhali-donate-amount").value);
  if (document.querySelector("#noakhali-donate-amount").value === "") {
    alert("Donation amount cannot be empty");
    return;
  }
  if (isNaN(donate) || donate <= 0) {
    alert("Please provide a valid donation amount");
    return;
  }
  if (donate > myAmount) {
    alert("Donation amount exceeds your available balance");
    return;
  }
  let remainingAmount = myAmount - donate;
  let latestDonation = totalDonation + donate;
  totalAmount.innerText = remainingAmount;
  noakhaliDonation.innerText = latestDonation;
  const childEl = document.createElement("div");
  childEl.className = "border border-input-border rounded-2xl p-8";
  childEl.innerHTML = `<p
          class="font-lexend text-xl font-bold leading-7 text-primary-text mb-4"
      >
          ${donate} Taka is Donated for ${noakhaliTitle}
      </p>
      <p
          class="font-lexend text-base font-light leading-6 text-secondary-text"
      >
          Date: ${new Date().toString()}
      </p>`;
  historyCard.appendChild(childEl);
});
