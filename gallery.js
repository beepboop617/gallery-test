document.querySelectorAll(".work").forEach(work => {
  work.addEventListener("click", () => {
    let caption = work.querySelector(".caption");

    if (!caption) {
      caption = document.createElement("div");
      caption.className = "caption";
      caption.innerHTML = work.dataset.caption;
      work.appendChild(caption);
    } else {
      caption.remove();
    }
  });
});

