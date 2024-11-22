

export default function TitleDark({ words }) {
    return (
        <>
            <div className="flex flex-col items-center text-[#2c3e50]">
                <h2 className=" text-[calc(1.375rem+1.5vw)] mb-[16px] uppercase font-bold mt-[24px] text-center">{words}</h2>
                <div className="flex items-center gap-2 mb-[16px]">
                    <div className="bg-[#2c3e50]  h-[4px] w-[80px]"></div>
                    <i className="fa-solid fa-star "></i>
                    <div className="bg-[#2c3e50]  h-[4px] w-[80px]"></div>
                </div>
            </div>
        </>
    )
}
