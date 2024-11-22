
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="bg-[#2c3e50] text-white p-[40px]">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-[35px] gap-y-[50px] sm:grid-cols-3 text-center">
                            <div>
                                <h3 className="text-[calc(1.3rem+.6vw)] mb-[8px] font-semibold">LOCATION</h3>
                                <p className="mb-[16px]">2215 John Daniel Drive</p>
                                <p className="mb-[16px]">Clark, MO 65243</p>
                            </div>
                            <div>
                                <h3 className="text-[calc(1.3rem+.6vw)] mb-[8px] font-semibold">AROUND THE WEB</h3>
                                <div className="flex gap-3 justify-center flex-wrap">
                                    <i className="fa-brands fa-facebook p-[10px] w-[38px] h-[38px] border border-white rounded-full"></i>
                                    <i className="fa-brands fa-twitter p-[10px] border w-[38px] h-[38px] border-white rounded-full"></i>
                                    <i className="fa-brands fa-linkedin-in p-[10px] w-[38px] h-[38px] border border-white rounded-full"></i>
                                    <i className="fa-solid fa-globe p-[10px] border w-[38px] h-[38px] border-white rounded-full"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[calc(1.3rem+.6vw)] mb-[8px] font-semibold">ABOUT FREELANCER</h3>
                                <p className="mb-[16px]">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1a252f] p-[10px] text-center text-white">
                    <p className="pt-[10px] pb-[16px]">Copyright © Your Website 2021</p>
                </div>
            </div>
        </>
    )
}
