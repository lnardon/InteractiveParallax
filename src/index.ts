export const useParallax = (
  containerClass: string,
  targetClass: string,
  alertMobileUser: boolean = false
) => {
  window.onload = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
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

      container.addEventListener("mousemove", moveFunction);
    } else {
      alertMobileUser
        ? alert("Parallax Effect is not supported on mobile devices.")
        : console.log("Parallax Effect is not supported on mobile devices.");
    }
  };
};
