import { useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  window.onscroll = function () {
    if (document.body.scrollTop || document.documentElement.scrollTop > 150) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return {
    scroll,
    setScroll,
  };
};

export default useScroll;
