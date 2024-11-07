const header = document.getElementById('header');
if(this.screenY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header')





let mixerProjects = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

var testiSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");
    contactMessage.textContent = "Write all the input fields";
  } else {
    emailjs
      .sendForm(
        "service_paca",
        "template_tiocjpn",
        "#contact-form",
        "vxDcl4UI2jbOQBn6f"
      )
      .then(
        () => {
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent ✔️";
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs!...SOMETHING WENT WRONG...", error);
        }
      );

      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
  }
};

contactForm.addEventListener("submit", sendEmail);
