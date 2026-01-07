// Đăng ký thư viện ScrollTrigger với GSAP
gsap.registerPlugin(ScrollTrigger);

const chibi = document.getElementById("chibi-img");

// 1. Hiệu ứng lắc lư nhẹ nhàng cho nhân vật (luôn chạy)
gsap.to(chibi, {
    y: -15,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

// 2. Logic thay đổi nhân vật theo từng cảnh khi cuộn chuột

// Khi cuộn đến Cảnh 2 (Biển)
ScrollTrigger.create({
    trigger: "#scene2",
    start: "top center",
    onEnter: () => {
        gsap.to(chibi, { scale: 0.8, filter: "brightness(0.8) blue(10%)", duration: 0.5 });
        // Nếu bạn có ảnh thợ lặn thì đổi ở đây: chibi.src = "chibi-tho-lan.png";
    },
    onLeaveBack: () => {
        gsap.to(chibi, { scale: 1, filter: "brightness(1)", duration: 0.5 });
        // chibi.src = "chibi.png";
    }
});

// Khi cuộn đến Cảnh 3 (Vũ trụ)
ScrollTrigger.create({
    trigger: "#scene3",
    start: "top center",
    onEnter: () => {
        gsap.to(chibi, { rotation: 15, scale: 1.1, filter: "drop-shadow(0 0 20px white)", duration: 0.5 });
    },
    onLeaveBack: () => {
        gsap.to(chibi, { rotation: 0, scale: 0.8, duration: 0.5 });
    }
});

// Khi cuộn đến Cảnh 4 (Kết thúc)
ScrollTrigger.create({
    trigger: "#scene4",
    start: "top center",
    onEnter: () => {
        gsap.to(chibi, { scale: 1.3, y: -50, duration: 0.5, ease: "back.out" });
    },
    onLeaveBack: () => {
        gsap.to(chibi, { scale: 1.1, y: 0, duration: 0.5 });
    }
});
