const forms = document.querySelectorAll("form");


forms.forEach(form => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();


    const inputs = form.querySelectorAll("input, textarea");
    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    
    if (allFilled) {
      alert("Your information has been saved");
    } else {
      alert("Please fill out all required fields before submitting");
    }
  });
});