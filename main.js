const GLOBAL_DATES = {
  start: "2025-03-04", // 공통 시작일
  target: "2025-07-25", // 공통 목표일 (진행률 & D-Day 목표일)
};

function calculateProgress(startDate, endDate) {
  const start = new Date(startDate); // 시작일
  const end = new Date(endDate); // 목표일
  const today = new Date(); // 오늘 날짜

  // 전체 기간 (밀리초 기준)
  const totalDuration = end - start;
  // 오늘까지 지난 기간 (밀리초 기준)
  const elapsed = today - start;

  // 진행률 계산 (0~100%)
  let progress = (elapsed / totalDuration) * 100;
  progress = Math.min(Math.max(progress, 0), 100); // 0~100 범위 유지

  return Math.round(progress); // 정수로 변환
}

document.addEventListener("DOMContentLoaded", function () {
  function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    if (!progressBar) return; // progress-bar가 없으면 실행하지 않음

    const progress = calculateProgress(GLOBAL_DATES.start, GLOBAL_DATES.target);
    progressBar.style.width = progress + "%";
    progressBar.textContent = progress + "%";
    progressBar.setAttribute("aria-valuenow", progress);
  }

  updateProgressBar(); // 여기서 호출
});

function calculateCustomDday(dDayStartDate, dDayTargetDate) {
  const today = new Date();
  const start = new Date(dDayStartDate);
  const target = new Date(dDayTargetDate);

  if (today < start) {
    // 시작일이 아직 안 됐으면, 시작일까지 D-표시
    const daysUntilStart = Math.ceil((start - today) / (1000 * 60 * 60 * 24));
    return `D-${daysUntilStart} (시작 전)`;
  } else {
    // 시작일 이후라면, 목표일까지 남은 날짜 계산
    const dDayValue = Math.ceil((target - today) / (1000 * 60 * 60 * 24));

    if (dDayValue > 0) {
      return `D-${dDayValue}`; // 목표일까지 남은 일수
    } else {
      return `D+${Math.abs(dDayValue)}`; // 목표일이 지난 경우 경과 일수
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function updateDdayText() {
    const modal = document.getElementById("exampleModal");
    if (!modal) return;

    const dDayTextElement = modal.querySelector("#dDayText");
    if (!dDayTextElement) return;

    const dDayStartDate = GLOBAL_DATES.start; // 학기 시작일
    const dDayTargetDate = GLOBAL_DATES.target; // 방학 시작일

    const dDayMessage = calculateCustomDday(dDayStartDate, dDayTargetDate);
    dDayTextElement.textContent = dDayMessage;
  }

  // 모달이 열릴 때 D-Day 업데이트
  const modal = document.getElementById("exampleModal");
  modal.addEventListener("shown.bs.modal", updateDdayText);
});

document.addEventListener("DOMContentLoaded", function () {
  let scrollTopBtn = document.getElementById("scrollTopBtn");

  if (!scrollTopBtn) {
    console.error("Error: scrollTopBtn not found.");
    return;
  }

  // 스크롤 이벤트 감지하여 버튼 표시/숨김
  window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // 버튼 클릭 시 부드럽게 맨 위로 이동
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("button-addon2").addEventListener("click", function () {
  const password = document.getElementsByClassName("form-control")[0].value; // 첫 번째 요소 선택
  const correctPassword = "794613"; // 원하는 비밀번호로 변경하세요

  if (password === correctPassword) {
    document.getElementsByClassName("hiddena")[0].style.display = "block"; // 첫 번째 요소 선택 후 표시
  } else {
    alert("Incorrect password!");
  }
});
