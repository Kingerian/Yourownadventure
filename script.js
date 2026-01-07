gsap.registerPlugin(ScrollTrigger);

// Hiệu ứng Parallax cho từng Layer
document.querySelectorAll('.scene').forEach((scene) => {
    const layers = scene.querySelectorAll('.layer');
    
    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        gsap.to(layer, {
            y: -100 * speed, // Mỗi lớp di chuyển với tốc độ khác nhau khi cuộn
            ease: "none",
            scrollTrigger: {
                trigger: scene,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
});

// Chữ xuất hiện kiểu "Reveal" cực sang
gsap.utils.toArray(".reveal").forEach((text) => {
    gsap.from(text, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});

// Nhân vật biến hình theo cảnh
const char = document.getElementById("character");

ScrollTrigger.create({
    trigger: "#ocean",
    start: "top center",
    onEnter: () => gsap.to(char, { textContent: "🤿", duration: 0.5, scale: 1.2 }),
    onLeaveBack: () => gsap.to(char, { textContent: "🐱", duration: 0.5, scale: 1 })
});

ScrollTrigger.create({
    trigger: "#space",
    start: "top center",
    onEnter: () => gsap.to(char, { textContent: "🚀", duration: 0.5, rotation: 360 }),
    onLeaveBack: () => gsap.to(char, { textContent: "🤿", duration: 0.5, rotation: 0 })
});

ScrollTrigger.create({
    trigger: "#end",
    start: "top center",
    onEnter: () => gsap.to(char, { textContent: "💝", duration: 0.5, scale: 1.5 }),
    onLeaveBack: () => gsap.to(char, { textContent: "🚀", duration: 0.5, scale: 1 })
});
