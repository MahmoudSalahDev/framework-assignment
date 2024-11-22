import { useEffect } from "react"


export default function Notfound() {
    useEffect(()=>{
        document.title= "Not Found!"
    },[])
    return (
        <><div className="min-h-[80vh] pt-[86px] flex items-center justify-center">
        <h1>Not found works!</h1>
        </div>
        </>
    )
}
