import React, { useEffect, useState } from 'react'

function Theme() {
    const [theme , setTheme] = useState("");
    const mode= () => {
        theme === "dark-theme" ? setTheme("light-theme"):setTheme("dark-theme")
    }
    useEffect(() => {
        document.body.className=theme
    }, [theme])


return (
    <>
    {
        theme==="dark-theme"?
            <button className='btn' onClick={mode}>
                Dark Mode
            </button>
            :
            <button className='btn' onClick={mode}>
                Light Mode
            </button>
    }


    <div className="heading">
        <h1>bookfolio</h1>
    </div>
    <div className="heading-detail">
        <h3>
            <i>
            Lorem ipsum dolor sit amet consectetur
            </i>
        </h3>
    </div>
    <div className="books-flex">
        <div className="img">
            <img src="./Images/Novel-1.jpg" alt="" />
        </div>
        <div className="img">
            <img src="./Images/Novel-2.jpg" alt="" />
        </div>
        <div className="img">
            <img src="./Images/Novel-3.jpg" alt="" />
        </div>
    </div>
    </>
)
}

export default Theme