document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // پاک کردن پیام‌های خطای قبلی
  document.querySelectorAll(".error-message").forEach((el) => el.remove());
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));

  let isValid = true;

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const consent = document.querySelector('input[type="checkbox"]');

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.innerText = message;
    input.classList.add("error");
    input.parentElement.appendChild(error);
    isValid = false;
  }

  if (firstName.value.trim() === "") {
    showError(firstName, "This field is required");
  }

  if (lastName.value.trim() === "") {
    showError(lastName, "This field is required");
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    showError(email, "Please enter a valid email address");
  }

  if (!queryType) {
    const radioWrapper = document.querySelector(".radio-wrapper");
    const error = document.createElement("div");
    error.className = "error-message";
    error.innerText = "Please select a query type";
    radioWrapper.parentElement.appendChild(error);
    isValid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "This field is required");
  }

  if (!consent.checked) {
    const error = document.createElement("div");
    error.className = "error-message";
    error.innerText = "To submit this form, please consent to being contacted";
    consent.parentElement.appendChild(error);
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // اینجا می‌تونی فرم رو به سرور بفرستی یا ریست کنی
    // e.target.submit();
  }
});
