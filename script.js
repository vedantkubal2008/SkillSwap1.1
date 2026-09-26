

const form = document.querySelector(".skill-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill in your name and email.");
      return;
    }

    alert("Thanks " + name + "! Your skill has been submitted.");
    form.reset();
  });
}