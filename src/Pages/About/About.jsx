import { useEffect } from "react";
import Title from "../../Components/Title/Title";

export default function About() {
    useEffect(() => {
        document.title = "About"
    }, [])
    return (
        <>
            <div className=" bg-[#1abc9c] pt-[86px]">
                <div className="container min-h-[85vh] flex  justify-center items-center text-white">
                    <div className="flex flex-col items-center">
                        <Title words="about component" color="white" />
                        <div className="flex flex-col px-[30px] md:px-0 md:flex-row gap-[20px] w-[75%]">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                                CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                                CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
