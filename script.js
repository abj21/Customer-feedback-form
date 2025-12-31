const form = document.getElementById("feedbackForm");
const ratingInput = document.getElementById("rating");

let selectedRating = 0;

// Star rating logic
document.querySelectorAll(".star-rating i").forEach(star => {
    star.addEventListener("click", function () {
        selectedRating = this.getAttribute("data-value");
        ratingInput.value = selectedRating;

        document.querySelectorAll(".star-rating i").forEach(s => {
            s.classList.remove("bi-star-fill");
            s.classList.add("bi-star");
        });

        for (let i = 0; i < selectedRating; i++) {
            document.querySelectorAll(".star-rating i")[i].classList.remove("bi-star");
            document.querySelectorAll(".star-rating i")[i].classList.add("bi-star-fill");
        }

        document.getElementById("ratingText").innerText = `Rating: ${selectedRating}`;
    });
});

// SUBMIT EVENT
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const rating = selectedRating;

    console.log("User Submitted Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    document.getElementById("message").innerHTML =
        "<span class='text-success fw-bold'>Feedback submitted successfully!</span>";

    form.reset();
});
