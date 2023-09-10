gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
ScrollTrigger.config({
  limitCallbacks: true,
  ignoreMobileResize: true,
});
gsap.utils.toArray("section.greeting").forEach(function (el, index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "section.greeting",
      start: () => "top top",
      pin: "section.greeting",
      end: "+=400%",
      scrub: 1,
      invalidateOnResize: true,
      invalidateOnRefresh: true,
    },
  });

  tl.to(".card_01", { yPercent: 0 })
    .from(".card_02", { yPercent: 200 })
    .to(".card_01", { scale: 0.95, yPercent: -4.5 }, 0.6)
    .to(".card_02", { yPercent: 0 })
    .from(".card_03", { yPercent: 200 })
    .to(".card_02", { scale: 0.95, yPercent: -5.5 }, "-=0.6")
    .to(".card_01", { scale: 0.9, yPercent: -10 }, "-=0.6") // 1번 카드의 스케일을 0.85로 변경
    .to(".card_03", { yPercent: 0 })
    .from(".card_04", { yPercent: 200 })
    .to(".card_01", { scale: 0.86, yPercent: -14 }, "-=0.6") // 1번 카드의 스케일을 0.85로 변경
    .to(".card_03", { scale: 0.95, yPercent: -5 }, "-=0.6")
    .to(".card_02", { scale: 0.9, yPercent: -10 }, "-=0.6") // 2번 카드의 스케일을 0.9로 변경
    .to(".card_04", { yPercent: 0 })
    .set({}, {}, "+=2");
});

// DocumentTimeline

gsap.registerPlugin(ScrollTrigger);
