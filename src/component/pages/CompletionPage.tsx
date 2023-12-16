import { useNavigate } from "react-router-dom";
import { Border, Footer, Heading } from "../commons";
import { useDispatch, useSelector } from "react-redux";
import { reviloActions } from "../../features/slice";
import { useEffect } from "react";
import { RootState } from "../../features/store";
import axios from "axios";
import { uploadImg } from "../../features/firebase";

const CompletionPage = () => {
    const id = useSelector((state: RootState) => state.id)
    const images: string[] = [];
    const keyInfo = useSelector((state: RootState) => state.keyInfo)
    const specification = useSelector((state: RootState) => state.specification)
    const serviceHistory = useSelector((state: RootState) => state.serviceHistory)
    const aboutCar = useSelector((state: RootState) => state.aboutCar)
    const price = useSelector((state: RootState) => state.price)
    const preparation = useSelector((state: RootState) => state.preparation)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const uploadImages = async () => {
        try {
            for (let i = 0; i < keyInfo.images.length; i++) {
                if (keyInfo.images[i] !== null) {
                    const response = await uploadImg(keyInfo.images[i])
                    if (response) {
                        images.push(response)
                    }
                }
            }
            if (images.length === 4) {
                uploadDataToServer()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const uploadDataToServer = async () => {
        const data = {
            make: keyInfo.make,
            model: keyInfo.model,
            variant: keyInfo.variant,
            registration: keyInfo.registration,
            mileage: keyInfo.mileage,
            numberOfOwners: keyInfo.owners,
            specification: specification,
            serviceHistory: serviceHistory,
            askingPrice: price.asking_price,
            capClean: price.cap_clean,
            autoTraderDetail: price.autorader_retail,
            images: images,
            about: aboutCar,
            preparation: preparation
        }
        const response = await axios.post('http://localhost:5000/api/v1/products', data, { withCredentials: true })
        if (response) {
            dispatch(reviloActions.showLoaderToogler())
            dispatch(reviloActions.reset())
            navigate('/all-listing')
        }
    }
    const uploadUpdatedImages = async () => {
        try {
            for (let i = 0; i < keyInfo.images.length; i++) {
                if (keyInfo.images[i] !== null) {
                    const response = await uploadImg(keyInfo.images[i])
                    if (response) {
                        images.push(response)
                    }
                }
            }
            if (images.length === 4) {
                updateDataToServer()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const updateDataToServer = async () => {
        const data = {
            make: keyInfo.make,
            model: keyInfo.model,
            variant: keyInfo.variant,
            registration: keyInfo.registration,
            mileage: keyInfo.mileage,
            numberOfOwners: keyInfo.owners,
            specification: specification,
            serviceHistory: serviceHistory,
            askingPrice: price.asking_price,
            capClean: price.cap_clean,
            autoTraderDetail: price.autorader_retail,
            images: images,
            about: aboutCar,
            preparation: preparation
        }
        const response = await axios.patch(`http://localhost:5000/api/v1/products/${id}`, data, { withCredentials: true })
        if (response) {
            dispatch(reviloActions.showLoaderToogler())
            dispatch(reviloActions.reset())
            navigate('/all-listing')
        }
    }
    const handler = () => {
        dispatch(reviloActions.showLoaderToogler())
        uploadImages()
    }
    const updateHanlder = () => {
        dispatch(reviloActions.showLoaderToogler())
        uploadUpdatedImages()
    }
    const userId = useSelector((state: RootState) => state.userId)
    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/users/showMe`, { withCredentials: true });
            dispatch(reviloActions.setUser(data.user.userId));
        } catch (error) {
            dispatch(reviloActions.resetUser())
            navigate('/')
        }
    };
    const checkForData = () => {
        if (!keyInfo.make || !keyInfo.model || !keyInfo.variant || !keyInfo.registration || !keyInfo.mileage || !keyInfo.owners || !keyInfo.images.length || !specification.length || !serviceHistory.length || !price.asking_price || !price.cap_clean || !price.autorader_retail || !aboutCar.length || !preparation.length) {
            navigate('/key-information')
        }
    }
    useEffect(() => {
        if (!userId) {
            fetchUser()
            checkForData()
        }
    },)
    return (
        <div>
            <div className="px-7">
                <div>
                    <Heading heading="Completion" />
                    <Border />
                </div>
                <div className="py-6">
                    <p className="text-[0.625rem]">
                        step 7 of 7
                    </p>
                    <div className="bg-[#D9D9D9] w-full rounded-full h-4 mt-2">
                        <div className="bg-high-light-color w-full h-full rounded-full px-1.5 text-[0.5rem] text-white flex items-center justify-end">
                            <p>100%</p>
                        </div>
                    </div>
                </div>
                <p className="text-xs font-bold text-center pb-6 cursor-pointer" onClick={() => navigate('/key-information')}>Review the Information and Publish!</p>
                <div className="flex justify-center">
                    {id.length > 0? <button type="button" className="bg-main-color text-white py-2 rounded-full text-xs font-bold w-24" onClick={updateHanlder}>Update</button>:<button type="button" className="bg-main-color text-white py-2 rounded-full text-xs font-bold w-24" onClick={handler}>Publish</button>}
                </div>
            </div>
            <Footer absoute />
        </div>
    )
}

export default CompletionPage;