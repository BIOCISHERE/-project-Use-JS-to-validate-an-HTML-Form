let form = document.querySelector("form");
let alert = document.querySelector(".alert");
let creditCard = /^[0-9]{13,16}$/;
let isCVC = /^[0-9]{3,4}$/;
let isAmount = /^[0-9]{1,}$/;
let isFirstName = /^[A-Za-z]{3,}$/;
let islastName = /^[A-Za-z]{3,}$/;
let isCity = /^[A-Za-z\s]{3,}$/;
let isPostal = /^[0-9]{4,9}$/;
let isMessage = /^[A-Za-z,.?\s]{1,}$/;

form.addEventListener("submit", evento => {
  evento.preventDefault();

  let send = true;

  let card = document.querySelector("#inputcard");
  let errCard = document.querySelector(".error-inputcard");

  let cvc = document.querySelector("#inputcvc");
  let errCvc = document.querySelector(".error-inputcvc");

  let amount = document.querySelector("#inputamount");
  let erramount = document.querySelector(".error-inputamount");

  let fName = document.querySelector("#inputfname");
  let errFName = document.querySelector(".error-inputfname");

  let lName = document.querySelector("#inputlname");
  let errLName = document.querySelector(".error-inputlname");

  let city = document.querySelector("#inputcity");
  let errCity = document.querySelector(".error-inputcity");

  let state = document.querySelector("#inputwstate");

  let postcode = document.querySelector("#inputpostcode");
  let errPostCode = document.querySelector(".error-inputpostcode");

  let message = document.querySelector("#inputmessage");
  let errMessage = document.querySelector(".error-inputmessage");

  if (card.value === "") {
    send = false;
    card.classList.add("is-invalid");
    card.classList.remove("is-valid");
    errCard.innerHTML = "Must not be empty";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!creditCard.test(card.value)) {
    send = false;
    card.classList.add("is-invalid");
    card.classList.remove("is-valid");
    errCard.innerHTML = "Must be a valid credit card (only numbers please)";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    card.classList.remove("is-invalid");
    card.classList.add("is-valid");
  }
  if (cvc.value === "") {
    send = false;
    cvc.classList.add("is-invalid");
    cvc.classList.remove("is-valid");
    errCvc.innerHTML = "Must not be empty";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!isCVC.test(cvc.value)) {
    send = false;
    cvc.classList.add("is-invalid");
    cvc.classList.remove("is-valid");
    errCvc.innerHTML = "Must be a valid cvc";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    cvc.classList.remove("is-invalid");
    cvc.classList.add("is-valid");
  }
  if (amount.value === "") {
    send = false;
    amount.classList.add("is-invalid");
    amount.classList.remove("is-valid");
    erramount.innerHTML = "Must not be empty, min amount $1";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!isAmount.test(amount.value)) {
    send = false;
    amount.classList.add("is-invalid");
    amount.classList.remove("is-valid");
    erramount.innerHTML = "Only numbers, min $1";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    amount.classList.remove("is-invalid");
    amount.classList.add("is-valid");
  }
  if (fName.value === "") {
    send = false;
    fName.classList.add("is-invalid");
    fName.classList.remove("is-valid");
    errFName.innerHTML = "Must not be empty";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!isFirstName.test(fName.value)) {
    send = false;
    fName.classList.add("is-invalid");
    fName.classList.remove("is-valid");
    errFName.innerHTML = "Must be a valid name";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    fName.classList.remove("is-invalid");
    fName.classList.add("is-valid");
  }
  if (lName.value == "") {
    send = false;
    lName.classList.add("is-invalid");
    lName.classList.remove("is-valid");
    errLName.innerHTML = "Must not be empty";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!islastName.test(lName.value)) {
    send = false;
    lName.classList.add("is-invalid");
    lName.classList.remove("is-valid");
    errLName.innerHTML = "Must be a valid last name";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    lName.classList.remove("is-invalid");
    lName.classList.add("is-valid");
  }
  if (city.value === "") {
    send = false;
    city.classList.add("is-invalid");
    city.classList.remove("is-valid");
    errCity.innerHTML = "Must not be empty";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!isCity.test(city.value)) {
    send = false;
    city.classList.add("is-invalid");
    city.classList.remove("is-valid");
    errCity.innerHTML = "Must be a valid city(USA)";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    city.classList.remove("is-invalid");
    city.classList.add("is-valid");
  }
  if (state.value === "select state") {
    send = false;
    state.classList.add("is-invalid");
    state.classList.remove("is-valid");
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    state.classList.remove("is-invalid");
    state.classList.add("is-valid");
  }
  if (postcode.value === "") {
    send = false;
    postcode.classList.add("is-invalid");
    postcode.classList.remove("is-valid");
    errPostCode.innerHTML = "Must not be empty";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!isPostal.test(postcode.value)) {
    send = false;
    postcode.classList.add("is-invalid");
    postcode.classList.remove("is-valid");
    errPostCode.innerHTML = "Must be a valid postcode";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    postcode.classList.remove("is-invalid");
    postcode.classList.add("is-valid");
  }
  if (message.value === "") {
    send = false;
    message.classList.add("is-invalid");
    message.classList.remove("is-valid");
    errMessage.innerHTML = "Must not be empty";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else if (!isMessage.test(message.value)) {
    send = false;
    message.classList.add("is-invalid");
    message.classList.remove("is-valid");
    errMessage.innerHTML =
      "Only periods ,comma, question marks, spaces and letters please";
    alert.classList.remove("d-none");
    alert.classList.add("d-block");
  } else {
    message.classList.remove("is-invalid");
    message.classList.add("is-valid");
  }
  if (send) {
    alert.classList.remove("d-block");
    alert.classList.add("d-none");
    form.submit();
  }
});
