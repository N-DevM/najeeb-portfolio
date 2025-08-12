import { useState, useEffect } from "react";

export const useScrollVisibility = (threshold = 100) =>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        const toggleVisibility = () =>{
            if(window.scrolly > threshold){
                setIsVisible(true);
            }
            else{
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll',toggleVisibility);

        return() => window.removeEventListener('scroll', toggleVisibility);
    },[threshold]);

    return isVisible;
};