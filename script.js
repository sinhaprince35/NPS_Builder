document.addEventListener("DOMContentLoaded", function () {
  const npsRange = document.getElementById("npsRange");
  const npsScaleLabel = document.getElementById("npsScaleLabel");
  const submitBtn = document.getElementById("submitBtn");
  const reasonBox = document.getElementById("reasonBox");
  const reasonText = document.getElementById("reasonText");
  const reasonSubmit = document.getElementById("reasonSubmit");
  const result = document.getElementById("result");

  npsRange.addEventListener("input", function () {
    const score = npsRange.value;
    npsScaleLabel.textContent = score;

    if (score <= 6) {
      reasonBox.classList.remove("hidden");
    } else {
      reasonBox.classList.add("hidden");
    }
  });

  submitBtn.addEventListener("click", function () {
    const score = npsRange.value;
    let message = "";

    if (score >= 0 && score <= 6) {
      message = "😔 We're sorry to hear that. Please provide your reason.";
    } else if (score >= 7 && score <= 8) {
      message = "🙂 Thank you for your feedback. We'll keep improving.";
    } else if (score >= 9 && score <= 10) {
      message = "😃 Thank you! We're glad you had a great experience.";
    }

    result.textContent = message;
  });

  reasonSubmit.addEventListener("click", function () {
    const reason = reasonText.value;
    // Here, you can implement logic to process the reason as needed.
    console.log("Reason:", reason);
    reasonText.value = ""; // Clear the reason text after submission
    result.textContent = "🙌 Thank you for providing your reason!";
    reasonBox.classList.add("hidden"); // Hide the reason box after showing thank you message
  });
});
