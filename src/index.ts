export const useParallax = (
  targetClass: string = "",
  offsetTop: number = 0
) => {
  window.onload = () => {
    // Adds mouse listener
    document.addEventListener("mousemove", (e) => {
      const objs: any = [...document.getElementsByClassName(`.${targetClass}`)];
      objs.forEach((elem: HTMLElement) => {
        const vel = Number(elem.getAttribute("parallax-speed"));
        const x = (window.innerWidth - e.pageX * vel) / 100;
        const y = (window.innerHeight - e.pageY * vel) / 100;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  };
};

// window.onscroll = (e: Event) => {
//   let elements = [...document.getElementsByClassName(targetClass)];
//   elements.forEach((element) => {
//     if (
//       element.getBoundingClientRect().top < window.innerHeight - offsetTop &&
//       element.getBoundingClientRect().bottom
//     ) {
//       element.classList.add("slideUp");
//     } else {
//       element.classList.remove("slideUp");
//     }
//   });
// };
