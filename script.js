function toggleSidebar() {
  const sidebar = document.querySelector('.side-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuIcon = menuToggle.querySelector('i');

  sidebar.classList.toggle('open');
  menuToggle.classList.toggle('active');

  // Icon swap with smooth transition
  if (menuIcon.classList.contains('fa-bars')) {
    setTimeout(() => {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-times');
    }, 200);
  } else {
    setTimeout(() => {
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }, 200);
  }
}


  const typingText = document.getElementById("typing");
  const words = ["Frontend Developer", "Backend Developer"];
  let wordIndex = 0;

  function typeNextWord() {
    typingText.classList.remove("typing-text"); // reset animation
    void typingText.offsetWidth; // reflow
    typingText.textContent = words[wordIndex];
    typingText.classList.add("typing-text"); // trigger animation

    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeNextWord, 4000); // cycle time = typing duration + pause
  }

  window.addEventListener("DOMContentLoaded", typeNextWord);
