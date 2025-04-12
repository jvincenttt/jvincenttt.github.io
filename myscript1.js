document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const progressBar = document.getElementById("progress-bar");
  
    // Check if required elements exist
    if (!audioPlayer || !playPauseBtn || !progressBar) {
      console.error("Required audio elements not found!");
      return;
    }
  
    // Remove autoplay: Do not call audioPlayer.play() automatically.
    // Optionally, load the audio file:
    audioPlayer.load();
  
    // Function to update the play/pause icon
    function updatePlayPauseIcon() {
      if (audioPlayer.paused) {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      }
    }
  
    // Set initial icon (should be the play icon because it's paused)
    updatePlayPauseIcon();
  
    // Toggle play/pause on button click
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
  
    // Seek in the song when the progress bar is adjusted
    progressBar.addEventListener("input", function () {
      if (audioPlayer.duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
      }
    });
  
    // Also update the icon on play and pause events
    audioPlayer.addEventListener("play", updatePlayPauseIcon);
    audioPlayer.addEventListener("pause", updatePlayPauseIcon);
  });
  