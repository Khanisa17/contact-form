let form = document.querySelector("form"),
  fName = document.getElementById("first-name"),
  lName = document.getElementById("last-name"),
  mail = document.getElementById("email-address"),
  qGeneral = document.getElementById("query-general"),
  qSupp = document.getElementById("query-support"),
  msg = document.getElementById("msg"),
  contacted = document.getElementById("contacted"),
  data = {};

const NAME_regEx = /^[A-Za-z]+$/;
const MAIL_regEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Fungsi validasi tanpa menambahkan error dan success states
const nameValidation = () => {
  data.firstName = fName.value.match(NAME_regEx) ? fName.value : "";
  data.lastName = lName.value.match(NAME_regEx) ? lName.value : "";
};

const emailValidation = () => {
  data.email = mail.value.match(MAIL_regEx) ? mail.value : "";
};

const queryValidation = () => {
  if (qGeneral.checked) {
    data.selectedQuery = "general enquiry";
  } else if (qSupp.checked) {
    data.selectedQuery = "support request";
  } else {
    data.selectedQuery = "";
  }
};

const msgAndAgreedValidation = () => {
  data.message = msg.value || "";
  data.agreeForContact = contacted.checked ? "agree to being contacted" : "";
};

// Reset form tanpa error dan success states
const resetForm = () => {
  form.reset();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameValidation();
  emailValidation();
  queryValidation();
  msgAndAgreedValidation();

  for (const key in data) {
    if (data[key] === "") {
      return;
    }
  }
  resetForm();
});
