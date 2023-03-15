gsap.from(".header",{duration: 1, y:"-100%", ease:'bounce'} );

gsap.from(".link", {duration : 1, opacity: 0, delay:1, Stagger: .5, });

gsap.from(".right",{duration:1, x:'-100vw', delay:1, ease:"power2.out"});

gsap.from(".left",{duration:1, x:'-100%', delay:1.5, ease:"power2.out"});
gsap.to(".footer",{duration:1, y:0, ease:"elastic", delay:2.5});