export const useParallax = (target: string = "", offsetTop: number = 0) => {
  window.onload = () => {
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
