export const useParallax = (target: string = "", offsetTop: number = 0) => {
  window.onload = () => {
    addMouseListener();
    let elements = [...document.getElementsByClassName(target)];
    elements.forEach((element) => {
      if (
        element.getBoundingClientRect().top < window.innerHeight - offsetTop &&
        element.getBoundingClientRect().bottom
      ) {
        element.classList.add("slideUp");
      }
    });
    window.onscroll = (e: Event) => {
      let elements = [...document.getElementsByClassName(target)];
      elements.forEach((element) => {
        if (
          element.getBoundingClientRect().top <
            window.innerHeight - offsetTop &&
          element.getBoundingClientRect().bottom
        ) {
          element.classList.add("slideUp");
        } else {
          element.classList.remove("slideUp");
        }
      });
    };
  };
};

const addMouseListener = () => {
  document.addEventListener("mousemove", (e) => {
    console.log(e);
  });
};

const parallaxObjects = (className: string, e: MouseEvent) => {
  const objs = [...document.querySelectorAll(`.${className}`)];
  objs.forEach((elem) => {
    const vel = Number(elem.getAttribute("parallax-speed"));
    const x = window.innerWidth - e.pageX * vel;
    const y = window.innerHeight - e.pageY * vel;

    elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};
