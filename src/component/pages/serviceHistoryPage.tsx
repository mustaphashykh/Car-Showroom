import { useEffect, useState } from "react";
import { Border, Footer, Heading } from "../commons";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { reviloActions } from "../../features/slice";
import axios from "axios";

const ServiceHistoryPage = () => {
    const dispatch = useDispatch()
    const serviceHistory = useSelector((state:RootState) => state.serviceHistory)
    const userId = useSelector((state: RootState) => state.userId)
    const [content, setContent] = useState(serviceHistory)
    const [showError, setShowError] = useState(false)
    const [containsUnorderedList, setContainsUnorderedList] = useState(false)
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'bullet' }],
        ],
    };
    const navigate = useNavigate()
    const navigateToNext = () => {
        if (!content.length && !containsUnorderedList) {
            setShowError(true)
        } else if (containsUnorderedList) {
            dispatch(reviloActions.setServiceHistory(content))
            setShowError(false)
            navigate('/price')
        }
    }
    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/users/showMe`, {withCredentials: true});
            dispatch(reviloActions.setUser(data.user.userId));
        } catch (error) {
            dispatch(reviloActions.resetUser())
            navigate('/')
        }
    };
    useEffect(() => {
        if (!userId) {
            fetchUser()
        }
    })
    
    useEffect(() => {
        if (content.includes('<ul>') && content.includes('</ul>')) {
            setContainsUnorderedList(true);
        } else {
            setContainsUnorderedList(false);
        }
    }, [content])
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
                    {
                        !containsUnorderedList && <p className="text-[0.45rem] text-red-600 pt-0.5">please enter the list of specification.</p>
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