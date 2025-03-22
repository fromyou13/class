document.querySelectorAll(".frontside.special").forEach((card) => {
  card.addEventListener("mouseenter", (event) => {
    // 이미 실행된 경우 return (한 번만 실행)
    if (card.dataset.hasFired) return;
    card.dataset.hasFired = "true"; // 실행됨 표시

    // 카드의 위치 및 크기 가져오기
    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;

    // Viewport 크기를 기준으로 confetti 위치 정규화
    const originX = centerX / window.innerWidth;
    const originY = centerY / window.innerHeight;

    // 폭죽 효과 실행
    confetti({
      angle: 90,
      spread: 60,
      particleCount: 500,
      origin: { x: originX, y: originY },
    });
  });
});
/* 이거 참고하셈
//confetti js가 되게 다양하게 있으니 참고할 것

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {
  // 여기 밑에 코드 집어 넣으면 됨.
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { x: 0.1, y: 0.6 }, //위치여기서 조정하면 된다
  });

  // button animation
  celebrateBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    celebrateBtn.style.transform = "scale(1)";
  }, 100);
});



*/
