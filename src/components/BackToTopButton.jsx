import React, { useEffect, useState } from 'react'

function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(function () {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])

    function handleScroll() {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }


    return (
        <>
            {
                backToTopButton ? (
                    <button className='h-10 w-10 bg-white transition-all duration-300 opacity-1 font-bold text-xl text-black fixed bottom-[100px] right-[30px] hover:bg-[#d3d300] scale-[1.1] hover:text-white z-10' onClick={handleScroll}>^</button>
                ) : (
                    <button className='h-10 w-10 bg-white transition-all duration-300 opacity-0 text-black fixed bottom-[50px] right-[50px]' onClick={handleScroll}>^</button>

                )
            }
        </>
    )
}

export default BackToTopButton