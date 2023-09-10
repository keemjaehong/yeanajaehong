window.onload = function () {
  let wrapper = document.getElementById("wrapper");
  wrapper.className = "visible";
  let bar = document.querySelector(".bar");
  let info_name = document.querySelector(".info em");
  let info_schedule = document.querySelector(".schedule");
  bar.style.height = "64px";
  bar.style.opacity = 1;
  info_name.style.opacity = 1;
  info_schedule.style.opacity = 1;
};

// let card01 = document.querySelector(".card_01");
// let card01Top = card01.getBoundingClientRect().top;

// let card02 = document.querySelector(".card_02");
// let card02Top = card02.getBoundingClientRect().top;

// let card03 = document.querySelector(".card_03");
// let card03Top = card03.getBoundingClientRect().top;

// let card04 = document.querySelector(".card_04");
// let card04Top = card04.getBoundingClientRect().top;

// window.addEventListener("scroll", function () {
//   if (card01Top < window.scrollY) {
//     card01.classList.add("on");
//   } else {
//     card01.classList.remove("on");
//   }

//   if (card02Top < window.scrollY) {
//     card02.classList.add("on");
//   } else {
//     card02.classList.remove("on");
//   }
//   if (card03Top < window.scrollY) {
//     card03.classList.add("on");
//   } else {
//     card03.classList.remove("on");
//   }
//   if (card04Top < window.scrollY) {
//     card04.classList.add("on");
//   } else {
//     card04.classList.remove("on");
//   }
// });
// const listCard = document.querySelectorAll("section.greeting .card");
// const cardContainer = document.querySelector("section.greeting .container");

// gsap.set("section.greeting .container", { yPercent: 0 });
// gsap.set(listCard, { autoAlpha: "+=0.1" });

// let tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "section.card",
//       markers: true,
//       pin: true,
//       pinSpacing: false,
//       start: "top",
//       end: "+=" + cardContainer.offsetHeight * 4,
//       scrub: true,
//     },
//   })
//   //   .add("start")
//   .to(
//     listCard,
//     {
//       autoAlpha: 1,
//       duration: 1,
//       stagger: 1,
//     }
//     // "start"
//   );
