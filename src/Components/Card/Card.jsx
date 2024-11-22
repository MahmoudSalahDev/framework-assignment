
export default function Card({ img }) {
    return (
        <>
            <div className="rounded-[10px] card overflow-hidden w-fit relative group cursor-pointer" >
                <img src={img} alt="" />
                <div
                    className="inset-0 absolute flex justify-center items-center text-white text-[100px] bg-[#29b198ee] opacity-0 group-hover:opacity-[1] transition-opacity duration-[.5s]">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </div>
            
        </>
    )
}
