const scrollToTop = () => {
  const button = document.getElementById("scrollTop");
  const scroll = () => {
    window.scroll(0, 0);
  }

  button.addEventListener('click', scroll);

  let viewportHeight = window.innerHeight;

  const toggleEventListenr = () => {
    if (window.scrollY > viewportHeight / 2) {
      button.classList.add('scrollButton--visible');
    } else {
      button.classList.remove('scrollButton--visible');
    }
  };
  document.addEventListener('scroll', toggleEventListenr);
};

export default scrollToTop;