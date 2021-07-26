const createLighter = (root) => {
  const lights = root.querySelectorAll(".light_item");

  const toggleOff = () => {
    for (let i = 0; i < lights.length; i++) {
      lights[i].classList.remove("active");
    }
  };
  const switchOn = (light) => {
    toggleOff();
    light.classList.add("active");
  };
  for (let i = 0; i < lights.length; i++) {
    lights[i].addEventListener("click", () => {
      switchOn(lights[i]);
    });
  }
  let activIndex = 0;
  setInterval(() => {
    if (activIndex + 1 < lights.length) {
      activIndex++;
    } else {
      activIndex = 0;
    }
    switchOn(lights[activIndex]);
  }, 2000);
};

createLighter(document.querySelector("#lighter1"));
createLighter(document.querySelector("#lighter2"));

/*const red = document.querySelector('.light_red');
const yellow = document.querySelector('.light_yellow');
const green = document.querySelector('.light_green');
const turnOnRed = ()=> {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "transparent";
    green.style.backgroundColor = "transparent";
};
const turnOnYellow = ()=> {
    yellow.style.backgroundColor = "yellow";
    red.style.backgroundColor = "transparent";
    green.style.backgroundColor = "transparent";
};
const turnOnGreen = ()=> {
    green.style.backgroundColor = "green";
    red.style.backgroundColor = "transparent";
    yellow.style.backgroundColor = "transparent";
};

red.addEventListener('click', turnOnRed);
yellow.addEventListener('click', turnOnYellow);
green.addEventListener('click', turnOnGreen);*/
