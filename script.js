gsap.registerPlugin(ScrollTrigger);

// 1. Làm cho con mèo lắc lư cho sinh động
gsap.to("#character", {
    y: -20,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// 2. Thay đổi icon con mèo theo từng cảnh
ScrollTrigger.create({
    trigger: "#scene2",
    start: "top center",
    onEnter: () => document.getElementById("character").innerText = "🤿", // Đeo bình lặn
    onLeaveBack: () => document.getElementById("character").innerText = "🐱"
});

ScrollTrigger.create({
    trigger: "#scene3",
    start: "top center",
    onEnter: () => document.getElementById("character").innerText = "🚀", // Lên phi thuyền
    onLeaveBack: () => document.getElementById("character").innerText = "🤿"
});

ScrollTrigger.create({
    trigger: "#scene4",
    start: "top center",
    onEnter: () => document.getElementById("character").innerText = "💝", // Thành trái tim
    onLeaveBack: () => document.getElementById("character").innerText = "🚀"
});
