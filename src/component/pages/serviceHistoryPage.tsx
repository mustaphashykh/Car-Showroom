import { useEffect, useState } from "react";
import { Border, Footer, Heading } from "../commons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { reviloActions } from "../../features/slice";

const ServiceHistoryPage = () => {
    const dispatch = useDispatch()
    const serviceHistory = useSelector((state:RootState) => state.serviceHistory)
    const userId = useSelector((state: RootState) => state.userId)
    const [content, setContent] = useState(serviceHistory)
    const [showError, setShowError] = useState(false)
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'bullet' }],
        ],
    };
    const navigate = useNavigate()
    const navigateToNext = () => {
        if (!content.length) {
            setShowError(true)
        } else {
            dispatch(reviloActions.setServiceHistory(content))
            setShowError(false)
            navigate('/price')
        }
    }
    const fetchUser = async () => {
        console.log('no user login')
        // try {
        //     const { data } = await axios.get(`https://revelio-mockup.vercel.app/api/v1/users/showMe`);
        //     dispatch(reviloActions.setUser(data.user.userId));
        // } catch (error) {
        //     dispatch(reviloActions.resetUser())
        //     navigate('/')
        // }
    };
    useEffect(() => {
        if (!userId) {
            fetchUser()
        }
    }, [])
    return (
        <div>
            <div className="px-7">
                <div>
                    <Heading heading="Service History" />
                    <Border />
                </div>
                <div className="py-6">
                    <p className="text-[0.625rem]">
                        step 4 of 7
                    </p>
                    <div className="bg-[#D9D9D9] w-full rounded-full h-4 mt-2">
                        <div className="bg-high-light-color w-[56%] h-full rounded-full px-1.5 text-[0.5rem] text-white flex items-center justify-end">
                            <p>56%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-xs font-bold pb-1">Enter your Service History below</p>
                    <div className="text-[0.65rem]">
                        <ReactQuill value={content} onChange={setContent} modules={modules} />
                    </div>
                    {
                        showError && <p className="text-[0.45rem] text-red-600 pt-0.5">please fill some the specification.</p>
                    }
                </div>
                <button type="button" className="bg-high-light-color text-white py-2 rounded-full text-xs font-bold w-24 mt-4" onClick={() => navigate('/specifications')}>Previous</button>
                <br />
                <button type="button" className="bg-main-color text-white py-2 rounded-full text-xs font-bold w-24 mt-2" onClick={navigateToNext}>Next</button>
            </div>
            <Footer absoute />
        </div>
    )
}

export default ServiceHistoryPage;