export const useParallax = (
  containerClass: string,
  targetClass: string = ""
) => {
  window.onload = () => {
    // Containber Ref
    const container: any = document.getElementsByClassName(containerClass)[0];

    // Mousemove function
    const moveFunction = (e: MouseEvent) => {
      const objs: any = [...document.getElementsByClassName(targetClass)];
      objs.forEach((elem: HTMLElement) => {
        const vel = Number(elem.getAttribute("parallax-speed"));
        const x = (container.style.width - e.pageX * vel) / 100;
        const y = (container.style.height - e.pageY * vel) / 100;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    // Add MouseEnter event
    container.addEventListener("mouseenter", () => {
      container.addEventListener("mousemove", moveFunction);
    });

    // Add MouseLeave event
    container.addEventListener("mouseleave", () => {
      container.removeEventListener("mousemove", moveFunction);
    });
  };
};
