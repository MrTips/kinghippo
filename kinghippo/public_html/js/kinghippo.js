//Kinghippo JS
//solely written by Mark McCartney
/* global gsap */
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    start: "center bottom",
  },
});
tl.to(".my-pic", { x: 300, y: -301, duration: 1 });
