import React, {useEffect, useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';


const ScrollTop  = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 550){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 550){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    if(window) {
      window.scrollTo({top: 0, behavior: 'smooth', });
    }
  };

  useEffect(() => {
    if(window) {
      window.addEventListener('scroll', checkScrollTop)
    }
    return () => {
      if(window) {
        window.removeEventListener('scroll', checkScrollTop)
      }
    }
  }, [])

  return (
    <>
      <span className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}}>
        <IoIosArrowUp />
      </span>
    </>
    
  );
}

export default ScrollTop;