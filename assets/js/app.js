var DOM = {
  formContainer: document.getElementById("js-signup-form-container"),
  formElement: document.getElementById("js-signup-form"),
  formConfirmation: document.getElementById("js-signup-confirmation"),
  formConfirmationLottie: document.getElementsByClassName(
    "js-signup-confirmation-lottie"
  )[0],
  cta: document.getElementById("js-sticky-cta")
};

var formAnimateInClass = "animate__backInLeft";
var formAnimateOutClass = "animate__backOutRight";

var ctaAnimateInClass = "animate__backInRight";
var ctaAnimateOutClass = "animate__backOutRight";

// Add animations on appearance
(function() {
  // book
  inView("#js-book-image").once("enter", function() {
    document
      .getElementById("js-book-image")
      .classList.add("animate__backInDown");
  });

  var signupTrigger = ".signup__form";

  // signup form
  inView(signupTrigger).on("enter", function() {
    // add class
    DOM.formContainer.classList.add(formAnimateInClass);
  });
})();

// Handle form submission
(function() {
  DOM.formElement.addEventListener("submit", function(e) {
    DOM.formContainer.classList.remove(formAnimateInClass);
    e.preventDefault();
    console.log("Signing up " + e.target.email.value);
    DOM.formContainer.classList.add(formAnimateOutClass);
    setTimeout(function() {
      DOM.formConfirmation.classList.add(formAnimateInClass);
    }, 300);
    setTimeout(function() {
      DOM.formConfirmationLottie.classList.remove("hide");
    }, 2000);
  });
})();

// Add Signup CTA
(function() {
  // enter in letter section
  inView(".letter").once("enter", function() {
    DOM.cta.classList.add(ctaAnimateInClass);
  });
  // leave on signup section
  inView(".signup")
    .on("enter", function() {
      DOM.cta.classList.remove(ctaAnimateInClass);
      DOM.cta.classList.add(ctaAnimateOutClass);
    })
    .on("exit", function() {
      DOM.cta.classList.remove(ctaAnimateOutClass);
      DOM.cta.classList.add(ctaAnimateInClass);
    });
})();
