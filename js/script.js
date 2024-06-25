const Skills = [
  {
    id: 1,
    name: "html",
    Level: 90,
    src: "./images/html.png",
  },
  {
    id: 2,
    name: "css",
    Level: 80,
    src: "./images/css.png",
  },
  {
    id: 3,
    name: "js",
    Level: 70,
    src: "./images/js.png",
  },
  {
    id: 4,
    name: "bootstrap",
    Level: 85,
    src: "./images/bootstrap.png",
  },
  {
    id: 5,
    name: "tailwind",
    Level: 10,
    src: "./images/tailwind.png",
  },
  {
    id: 6,
    name: "react",
    Level: 15,
    src: "./images/react.png",
  },
  {
    id: 7,
    name: "figma",
    Level: 75,
    src: "./images/figma.png",
  },
  {
    id: 8,
    name: "git",
    Level: 22,
    src: "./images/git.png",
  },
  {
    id: 9,
    name: "github",
    Level: 55,
    src: "./images/github.png",
  },
];

let skillNames = document.querySelector(".skill-names");

Skills.forEach((skil) => {
  skillNames.insertAdjacentHTML(
    "beforeend",
    `  
  <div class="skill-names__box">
    <div class="skill-names__box-top">
      <img src="${skil.src}" alt="" />
      <p class="skill-names__box-name">${skil.name}</p>
    </div>
    <div class="skill-names__box-bottom">
      <progress value="${skil.Level}" max="100"></progress>
      <p class="skill-names__box-percent">${skil.Level}<span>%</span></p>
    </div>
  </div>`
  );
});
