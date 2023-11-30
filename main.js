import "./style.css";
import { createVideoElement, takeVideoSnapshot } from "./camera.js";

(async () => {
  const video = await createVideoElement();
  const button = document.querySelector("#take-photo");
  const canvas = document.querySelector("canvas");

  button.addEventListener("click", () => takeVideoSnapshot(video, canvas));
})();
