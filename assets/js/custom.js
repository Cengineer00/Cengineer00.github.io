// Header scroll hide/show
document.addEventListener("DOMContentLoaded", () => {
    let lastScroll = 0;
    const header = document.getElementById("header");
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
  
      if (currentScroll > lastScroll && currentScroll > 50) {
        // Aşağı kaydırınca header gizle
        header.style.transform = "translateY(-100%)";
      } else {
        // Yukarı kaydırınca göster
        header.style.transform = "translateY(0)";
      }
  
      lastScroll = currentScroll;
    });
  });
  