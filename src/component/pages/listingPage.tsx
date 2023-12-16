import { useNavigate } from "react-router-dom";
import { Border, Footer, Heading } from "../commons";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { reviloActions } from "../../features/slice";

const Listing = () => {
    const userId = useSelector((state: RootState) => state.userId)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/users/showMe`, { withCredentials: true });
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
    return (
        <div>
            <div className="px-7">
                <div>
                    <Heading heading="Listings" />
                    <Border />
                </div>
                <div className="mt-12 flex items-center justify-evenly gap-4">
                    <div className="bg-[#D9D9D9] border-[1px] border-gray-400 text-sm text-gray-500 w-[9.5rem] rounded-lg h-14 flex items-center justify-center cursor-pointer" onClick={() => navigate('/key-information')}>
                        + add a new listing
                    </div>
                    <div className="bg-[#D9D9D9] border-[1px] border-gray-400 text-sm text-gray-500 w-[9.5rem] h-14 flex items-center justify-center rounded-lg cursor-pointer" onClick={() => navigate('/all-listing')}>
                        see all listings
                    </div>
                </div>
            </div>
            <Footer absoute />
        </div>
    )
}

export default Listing;