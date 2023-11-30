/**
 *
 * @returns {Promise<HTMLVideoElement>} A promise that resolves with a video element.
 */
export async function createVideoElement() {
  const video = document.createElement("video");
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  try {
    video.srcObject = stream;
    await video.play();
  } catch (error) {
    video.src = window.URL.createObjectURL(stream);
  }

  return video;
}

/**
 * Take a video snapshot and display a camera shutter animation.
 *
 * @param {HTMLVideoElement} video - The video element to capture the snapshot from.
 * @param {HTMLCanvasElement} canvas - The canvas element to display the snapshot.
 */
export function takeVideoSnapshot(video, canvas) {
  const context = canvas.getContext("2d");
  const camera = document.querySelector(".camera");

  setTimeout(() => (camera.textContent = "📸"), 50);
  setTimeout(() => (camera.textContent = "📷"), 200);

  context.drawImage(video, 0, 0);
}
