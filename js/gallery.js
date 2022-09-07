document.addEventListener("DOMContentLoaded", () => {
  let prevBtn = document.getElementById("prev");
  let nextBtn = document.getElementById("next");
  let background = document.querySelector(".galleryBg");
  let indices = document.querySelectorAll(".index");
  let bgImgs = ["/gallery/1.jpeg", "/gallery/2.jpeg", "/gallery/3.jpeg", "/gallery/4.jpeg","/gallery/5.jpeg","/gallery/6.jpeg","/gallery/7.jpeg","/gallery/8.jpg","/gallery/9.jpg"];
  let currentIndex = 0;
  indices.forEach(index => index.classList.remove("active"));
  indices[currentIndex].classList.add("active");
  var myAnimation = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[0]}`,
    image2: `img/${bgImgs[1]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation2 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[1]}`,
    image2: `img/${bgImgs[2]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation3 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[2]}`,
    image2: `img/${bgImgs[3]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation4 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[3]}`,
    image2: `img/${bgImgs[4]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation5 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[4]}`,
    image2: `img/${bgImgs[5]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation6 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[5]}`,
    image2: `img/${bgImgs[6]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation7 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[6]}`,
    image2: `img/${bgImgs[7]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation8 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[7]}`,
    image2: `img/${bgImgs[8]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  var myAnimation9 = new hoverEffect({
    parent: document.querySelector(".galleryBg"),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: `img/${bgImgs[8]}`,
    image2: `img/${bgImgs[0]}`,
    displacementImage: "img/parallax.webp",
    hover: false
  });
  let distortAnimations = [
    myAnimation,
    myAnimation2,
    myAnimation3,
    myAnimation4,
    myAnimation5,
    myAnimation6,
    myAnimation7,
    myAnimation8,
    myAnimation9
  ];
  function startNextDistortAnimation() {
    let prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 9;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[prevIndex].next();
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      distortAnimations[prevIndex].previous();
    }, 1500);
  }
  function startPrevDistortAnimation() {
    currentIndex = currentIndex - 1 < 0 ? 8 : currentIndex - 1;
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
    distortAnimations[currentIndex].next();
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.insertBefore(canvas[canvas.length - 1], background.firstChild);
      distortAnimations[currentIndex].previous();
    }, 500);
  }
  nextBtn.addEventListener("click", () => {
    startNextDistortAnimation();
  });
  prevBtn.addEventListener("click", () => {
    startPrevDistortAnimation();
  });
});