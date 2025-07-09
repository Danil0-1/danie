const audio = document.getElementById('audio');
const playPause = document.getElementById('playPause');
const progress = document.getElementById('progress');
const current = document.getElementById('current');
const duration = document.getElementById('duration');

function formatTime(time) {
  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

playPause.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPause.textContent = '⏸️';
  } else {
    audio.pause();
    playPause.textContent = '▶️';
  }
});

audio.addEventListener('loadedmetadata', () => {
  progress.max = audio.duration;
  duration.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  progress.value = audio.currentTime;
  current.textContent = formatTime(audio.currentTime);
});

progress.addEventListener('input', () => {
  audio.currentTime = progress.value;
});
