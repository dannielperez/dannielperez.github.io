(function () {
  const mode = document.getElementById("current-mode");
  const shuffle = document.getElementById("shuffle-mode");
  const time = document.getElementById("local-time");
  const modes = [
    "building something unnecessarily specific",
    "turning coffee into commit history",
    "optimizing a problem nobody reported",
    "reading the docs (eventually)",
    "keeping one more tab open",
    "testing in production-adjacent conditions"
  ];

  if (mode && shuffle) {
    shuffle.addEventListener("click", function () {
      let next = modes[Math.floor(Math.random() * modes.length)];
      if (next === mode.textContent) next = modes[(modes.indexOf(next) + 1) % modes.length];
      mode.textContent = next;
    });
  }

  if (time) {
    const updateTime = function () {
      time.textContent = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Puerto_Rico",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(new Date());
    };
    updateTime();
    window.setInterval(updateTime, 30000);
  }
})();
