
import { useEffect } from "react"
import avatar from "../../assets/avatar.svg"
import Title from "../../Components/Title/Title"

export default function Home() {
    useEffect(()=>{
        document.title= "Home"
    },[])
    return (
        <>
            <div className="min-h-[85vh] pt-[86px] bg-[#1abc9c] flex  justify-center items-center">
                <div className="flex flex-col text-center items-center text-white">
                    <img src={avatar} alt="avatar image" className="w-[250px] mb-[16px]" />
                    <Title words="start Framework" color="white"/>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
