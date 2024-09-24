function amount(id) {
  let money = document.querySelector(id).innerText;
  return Number(money);
}

function donateAmount(id) {
  let donateMoney = document.querySelector(id).value;
  return Number(donateMoney);
}

function showModal(id) {
  document.querySelector("#successModal").classList.remove("hidden");
  document.querySelector("#closeModal").addEventListener("click", function () {
    document.querySelector("#successModal").classList.add("hidden");
    document.querySelector(id).value = "";
  });
}
