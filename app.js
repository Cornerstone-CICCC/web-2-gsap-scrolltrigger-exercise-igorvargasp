gsap.registerPlugin(ScrollTrigger)

gsap.set(".sun", { x: "100vw", opacity: 1 })
gsap.set(".line-two span", { scale: 15, x: (index) => index === 0 ? "-100vw" : "100vw" })
gsap.set(".moon", { x: "120vw", opacity: 1 })
gsap.set(".line-three span", { y: "120vh" })

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    end: "+=300%",
    scrub: 1,
    pin: true,
  }
})
.from(".line-one span", {
  y: "100vh",
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
})
.to("body", {
  backgroundColor: "#ffff00",
  duration: 0.3,
}, "-=0.3")
.to(".sun", {
  x: 0,
  duration: 0.7,
  ease: "power2.out"
}, "-=0.1")
.to({}, { duration: 1 }) 
.to(".sun", {
  x: "-120vw",
  duration: 1,
  ease: "power2.in"
})
.to(".line-one span", {
  x: "120vw", 
  opacity: 1,    
  stagger: 0.05,
  duration: 1,
  ease: "power2.in"
}, "<");

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    end: "+=200%",
    scrub: 1,
    pin: true,
  }
})
.to("body", {
  backgroundColor: "#ffffff",
  duration: 0.3,
})
.to(".line-two span", {
  scale: 1,
  x: 0,
  stagger: 0.1,
  duration: 1,
  ease: "power2.out"
}, "-=0.2")
.to(".line-two span:nth-child(1)", {
  y: "-12vh",
  duration: 1,
  ease: "power2.inOut"
})
.to(".line-two span:nth-child(1)", {
  y: "0vh",
  ease: "power2.inOut"
})
.to(".line-two span:nth-child(2)", {
  y: "-12vh",
  ease: "power2.inOut"
})
.to(".line-two span:nth-child(2)", {
  y: "0vh",
  ease: "power2.inOut"
})

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    end: "300%",
    scrub: 1,
    pin: true,
  }
})
.to(".line-three span", {
  y: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
}).to(".line-three", {
  backgroundPositionX: "0%",
  duration: 1.5,
  ease: "power2.out"
}).to(".line-three span", {
  color: "white",
  ease: "power2.out"
}, "-=1.5")
.to(".moon", {
  x: "0vw",
  duration: 1,
  ease: "power2.out"
})
