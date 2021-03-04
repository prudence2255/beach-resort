import {useState} from 'react';

/**
 * toggle active element
 */

const useActive = () => {
    const [isActive, setIsActive] = useState();
    const [activeLink, setActiveLink] = useState();

    const setActive = (activeId) => {
        setIsActive(true);
        setActiveLink(activeId);
    }

   return {
       isActive, setIsActive,
       activeLink, setActiveLink,
       setActive,
   } 
}


export default useActive;