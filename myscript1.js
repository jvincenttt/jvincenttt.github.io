document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const progressBar = document.getElementById("progress-bar");
  
    // Check if required elements exist
    if (!audioPlayer || !playPauseBtn || !progressBar) {
      console.error("Required audio elements not found!");
      return;
    }
  
    // Load audio and attempt autoplay (browsers may block autoplay)
    audioPlayer.load();
    audioPlayer.play().catch(error => {
      console.warn("Autoplay blocked:", error);
    });
  
    // Update Play/Pause Button Icon
    function updatePlayPauseIcon() {
      if (audioPlayer.paused) {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
    }
  
    // Toggle Play/Pause on button click
    playPauseBtn.addEventListener("click", function () {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
      updatePlayPauseIcon();
    });
  
    // Update progress bar as the song plays
    audioPlayer.addEventListener("timeupdate", function () {
      if (audioPlayer.duration) {
        progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      }
    });
  
    // Seek functionality when progress bar is changed
    progressBar.addEventListener("input", function () {
      if (audioPlayer.duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
      }
    });
  
    // Update icon when play/pause events occur
    audioPlayer.addEventListener("play", updatePlayPauseIcon);
    audioPlayer.addEventListener("pause", updatePlayPauseIcon);
  });
  