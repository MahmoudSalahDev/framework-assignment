
import { useEffect } from 'react'
import Card from '../../Components/Card/Card'
import TitleDark from '../../Components/Title/TitleDark'
import port1 from "../../assets/port1.png"
import port2 from "../../assets/port2.png"
import port3 from "../../assets/port3.png"

export default function Portfoilo() {

    useEffect(() => {
        document.title = "Portfolio"

        let modal = document.querySelector(".modal")
        modal.addEventListener("click", (e) => {
            if (e.target == modal) {
                modal.classList.replace("flex", "hidden")
            }
        })

    }, [])
    return (
        <>
            <div className="min-h-[100vh] pt-[86px]">
                <div className="container  h-full flex flex-col  items-center py-[100px]">
                    <TitleDark words="portfolio component" />
                    <div className='grid gap-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[20px] md:px-[0px]'>
                        <div onClick={() => {
                            document.querySelector(".modal img").setAttribute("src", port1)
                            document.querySelector(".modal").classList.replace("hidden", "flex")
                        }}><Card img={port1} /></div>
                        <div onClick={() => {
                            document.querySelector(".modal img").setAttribute("src", port2)
                            document.querySelector(".modal").classList.replace("hidden", "flex")
                        }}><Card img={port2} /></div>
                        <div onClick={() => {
                            document.querySelector(".modal img").setAttribute("src", port3)
                            document.querySelector(".modal").classList.replace("hidden", "flex")
                        }}><Card img={port3} /></div>
                        <div onClick={() => {
                            document.querySelector(".modal img").setAttribute("src", port1)
                            document.querySelector(".modal").classList.replace("hidden", "flex")
                        }}><Card img={port1} /></div>
                        <div onClick={() => {
                            document.querySelector(".modal img").setAttribute("src", port2)
                            document.querySelector(".modal").classList.replace("hidden", "flex")
                        }}><Card img={port2} /></div>
                        <div onClick={() => {
                            document.querySelector(".modal img").setAttribute("src", port3)
                            document.querySelector(".modal").classList.replace("hidden", "flex")
                        }}><Card img={port3} /></div>
                    </div>
                </div>
            </div>
            <div className="modal fixed inset-0 bg-[rgba(13,110,253,0.25)] z-[100] hidden justify-center items-center">
                <img src="" className="w-[600px]" alt="image modal" />
            </div>
        </>
    )
}
