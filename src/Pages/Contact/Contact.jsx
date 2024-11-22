import { useFormik } from 'formik'
import TitleDark from '../../Components/Title/TitleDark'
import { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
        document.title = "Contact"
    }, [])

    let formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            password: ""
        },
    })
    useEffect(() => {
        let nameLabel = document.querySelector("#nameLabel");
        if (formik.values.name == "") {
            nameLabel.classList.remove("bottom-[50px]")
            nameLabel.classList.add("bottom-[0px]")
        } else {
            nameLabel.classList.remove("bottom-[0px]")
            nameLabel.classList.add("bottom-[50px]")
        }
    }, [formik.values.name])

    useEffect(() => {
        let ageLabel = document.querySelector("#ageLabel");
        if (formik.values.age == "") {
            ageLabel.classList.remove("bottom-[50px]")
            ageLabel.classList.add("bottom-[0px]")
        } else {
            ageLabel.classList.remove("bottom-[0px]")
            ageLabel.classList.add("bottom-[50px]")
        }
    }, [formik.values.age])

    useEffect(() => {
        let emailLabel = document.querySelector("#emailLabel");
        if (formik.values.email == "") {
            emailLabel.classList.remove("bottom-[50px]")
            emailLabel.classList.add("bottom-[0px]")
        } else {
            emailLabel.classList.remove("bottom-[0px]")
            emailLabel.classList.add("bottom-[50px]")
        }
    }, [formik.values.email])

    useEffect(() => {
        let passwordLabel = document.querySelector("#passwordLabel");
        if (formik.values.password == "") {
            passwordLabel.classList.remove("bottom-[50px]")
            passwordLabel.classList.add("bottom-[0px]")
        } else {
            passwordLabel.classList.remove("bottom-[0px]")
            passwordLabel.classList.add("bottom-[50px]")
        }
    }, [formik.values.password])
    function hundleSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
            <div className="min-h-[100vh] pt-[86px]">
                <div className=" h-full flex flex-col  items-center py-[100px] px-[16px]">
                    <TitleDark words="conatct section" />
                    <form className='flex flex-col gap-4 w-full md:w-[50%]' onSubmit={(e) => { hundleSubmit(e) }}>
                        <div className='relative '>
                            <label htmlFor="name" id='nameLabel' className='text-[#1abc9c] mb-[7px] absolute z-0 bottom-[0px] translate-y-[0px] transition-all duration-300'>userName :</label>
                            <input type="text" placeholder='userName' id='name' className='relative mt-[25px] w-full z-20 py-[16px] px-[12px] border-b-[1px] rounded  focus:outline-none' required
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className='relative '>
                            <label htmlFor="age" id='ageLabel' className='text-[#1abc9c] mb-[7px] absolute z-0 bottom-[0px] translate-y-[0px] transition-all duration-300'>userAge :</label>
                            <input type="number" min="1" placeholder='userAge' id='age' className='relative mt-[25px] w-full z-20 py-[16px] px-[12px] border-b-[1px] rounded  focus:outline-none' required
                                name="age"
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className='relative '>
                            <label htmlFor="emil" id='emailLabel' className='text-[#1abc9c] mb-[7px] absolute z-0 bottom-[0px] translate-y-[0px] transition-all duration-300'>userEmail :</label>
                            <input type="email" placeholder='userEmail' id='email' className='relative mt-[25px] w-full z-20 py-[16px] px-[12px] border-b-[1px] rounded  focus:outline-none' required
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className='relative '>
                            <label htmlFor="password" id='passwordLabel' className='text-[#1abc9c] mb-[7px] absolute z-0 bottom-[0px] translate-y-[0px] transition-all duration-300'>userPassword :</label>
                            <input type="password" placeholder='userPassword' id='password' className='relative mt-[25px] w-full z-20 py-[16px] px-[12px] border-b-[1px] rounded  focus:outline-none' required
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <button className='mt-[24px] py-[6px] px-[12px] bg-[#1abc9c] text-white w-fit rounded-[7px] border border-[#1abc9c] cursor-pointer active:border-white'>send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}
