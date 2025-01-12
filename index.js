function page1Animation() {
  var t1 = gsap.timeline()
  t1.from("nav h1 , nav h4, nav button ", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.4,
    stagger: 0.12
  })

  t1.from(".center-part1 h1", {
    x: -300,
    opacity: 0,
    duration: 0.5
  })

  t1.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4
  })
  t1.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4
  })
  t1.from(".center-part2 img", {
    opacity: 0,
    duration: 0.2,
    x: 200
  }, "-=0.5")
  t1.from(".section1bottom img", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    stagger: 0.101
  })
}
function page2Animation() {
  var t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 75%",
      end: "bottom 90%",
      scrub: 2,
    }
  })
  t2.from(".services", {
    y: 20,
    opacity: 0
  })
  t2.from(".elem.left", {
    x: -300,
    opacity: 0,
    duration: 1,
    stagger: 0.5
  }, "anim")
  t2.from(".elem.right", {
    x: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.5
  }, "anim")
}

function page3Animation() {
  var t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section3",
      scroller: "body",
      start: "top 75%",
      end: "bottom 100%",

      scrub: 2,
    }
  })
  t4.from(".section3-box", {
    x: 200,
    opacity: 0,
  })
  t4.from(".section3-box h3 ,.section3-box p , .section3-box button", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  })
  t4.from(".case-study", {
    x: -20,
    opacity: 0,
    duration: 1,
  })
  t4.from(".case-study p", {
    x: 20,
    opacity: 0
  })
}

function page4Animation() {
  var t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      scroller: "body",
      start: "top 94%",
      end: "bottom 98%",
      scrub: 2,
    }
  })
  t3.from(".written p", {
    opacity: 0,
    y: -100,
  })
  t3.from(".written h5", {
    opacity: 0,
    x: -100,
  })
}

var typed = new Typed(".typed-text",{
  strings:["Navigating the digital Landscape for success"],
  typeSpeed :70,
  backSpeed:5,
  loop:true
})
page4Animation();
page1Animation();
page2Animation();
page3Animation();