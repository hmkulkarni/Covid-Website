let con = document.getElementById("myContactForm");
con.addEventListener("submit", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Thank you for contacting!",
    text: "We will reach out to you as soon as possible.",
    icon: "success",
    confirmButtonText: "Close",
    confirmButtonColor: "#007bff",
  });
});
