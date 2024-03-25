// Basic usage of canvas
function draw1() {
  const canvas1 = document.getElementById("canvas1");
  if (canvas1.getContext) {
      let ctx1 = canvas1.getContext("2d");
      // drawing code here
      ctx1.fillStyle = "rgb(200 0 0)";
      ctx1.fillRect(10, 10, 50, 50);

      ctx1.fillStyle = "rgb(0 0 200 / 50%)";
      ctx1.fillRect(30, 30, 50, 50);
  }
}
// draw1();
window.addEventListener("load", draw1);

//Drawing shapes with canvas
function draw2() {
  const canvas2 = document.getElementById("canvas2");
  if (canvas2.getContext) {
      let ctx2 = canvas2.getContext("2d");

      function drawHappyFace() {
          ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
          ctx2.beginPath();
          ctx2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
          ctx2.moveTo(110, 75);
          ctx2.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
          ctx2.moveTo(65, 65);
          ctx2.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
          ctx2.moveTo(95, 65);
          ctx2.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
          ctx2.stroke();
      }
      function drawFrownyFace() {
          ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
          ctx2.beginPath();
          ctx2.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
          ctx2.moveTo(100, 105);
          ctx2.arc(75, 105, 25, 0, Math.PI, true); // Mouth (clockwise)
          ctx2.moveTo(65, 65);
          ctx2.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
          ctx2.moveTo(95, 65);
          ctx2.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
          ctx2.stroke();
      }

      canvas2.addEventListener("click", (e) => {
      if (canvas2.getAttribute("data-face") === "happy" || canvas2.getAttribute("data-face") === null) {
          drawFrownyFace();
          canvas2.setAttribute("data-face", "frowny");
      } else {
          drawHappyFace();
          canvas2.setAttribute("data-face", "happy");
      }
  });
      drawHappyFace();
  }
}
window.addEventListener("load", draw2);
// draw2();