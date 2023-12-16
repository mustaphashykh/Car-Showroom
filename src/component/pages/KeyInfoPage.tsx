import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Border, Footer, Heading } from "../commons";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { reviloActions } from "../../features/slice";
import axios from "axios";

const KeyInfoPage = () => {
    const userId = useSelector((state: RootState) => state.userId)
    const keyInfo = useSelector((state:RootState) => state.keyInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`https://revelio-mockup.vercel.app/api/v1/users/showMe`, {withCredentials: true});
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
    const imageUploadRef = useRef<HTMLInputElement>(null);
    const imageUploadHandler = () => {
        if (imageUploadRef.current) {
            imageUploadRef.current.click()
        }
    }
    const validation = Yup.object().shape({
        images: Yup.array()
            .of(
                Yup.mixed()
                    .required("Atleast four files are required.")
            )
            .required("Atleast four files are required.")
            .max(4, "Can not upload more than 4 images.")
            .min(4, "Atleast four files are required."),
        make: Yup.string()
            .required('please fill the above field.'),
        model: Yup.string()
            .required('please fill the above field.'),
        variant: Yup.string()
            .required('please fill the above field.'),
        registration: Yup.string()
            .required('please fill the above field.'),
        mileage: Yup.string()
            .required('please fill the above field.'),
        owners: Yup.string()
            .required('please fill the above field.'),
    })
    return (
        <div>

            <div className="px-7">
                <div>
                    <Heading heading="Key Information" />
                    <Border />
                </div>
                <div className="py-6">
                    <p className="text-[0.625rem]">
                        step 1 of 7
                    </p>
                    <div className="bg-[#D9D9D9] w-full rounded-full h-4 mt-2">
                        <div className="bg-high-light-color w-[14%] h-full rounded-full px-1.5 text-[0.5rem] text-white flex items-center justify-end">
                            <p>14%</p>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        make: keyInfo.make,
                        model: keyInfo.model,
                        variant: keyInfo.variant,
                        registration: keyInfo.registration,
                        mileage: keyInfo.mileage,
                        owners: keyInfo.owners,
                        images: keyInfo.images,
                    }}
                    validationSchema={validation}
                    onSubmit={(values) => {
                        dispatch(reviloActions.setKeyInfo(values))
                        navigate('/about-car')
                    }}
                >
                    {({ setFieldValue, ...keyInfoForm }) => (
                        <Form>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Make</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('make')} />
                                {keyInfoForm.touched.make && keyInfoForm.errors.make ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.make}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Model</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('model')} />
                                {keyInfoForm.touched.model && keyInfoForm.errors.model ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.model}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Variant</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('variant')} />
                                {keyInfoForm.touched.variant && keyInfoForm.errors.variant ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.variant}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Registration</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('registration')} />
                                {keyInfoForm.touched.registration && keyInfoForm.errors.registration ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.registration}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Mileage</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('mileage')} />
                                {keyInfoForm.touched.mileage && keyInfoForm.errors.mileage ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.mileage}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Number of Owners</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('owners')} />
                                {keyInfoForm.touched.owners && keyInfoForm.errors.owners ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.owners}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Images</label>
                                <input
                                    type="text"
                                    className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none cursor-pointer"
                                    placeholder="+ add files"
                                    readOnly
                                    onClick={imageUploadHandler}
                                />
                                <input
                                    type="file"
                                    className="hidden"
                                    multiple
                                    ref={imageUploadRef}
                                    accept="image/*"
                                    onChange={(event) => {
                                        const files = event.currentTarget.files;
                                        const fileArray = [];
                                        for (let i = 0; i < files!.length; i++) {
                                            fileArray.push(files![i]);
                                        }
                                        setFieldValue("images", fileArray);
                                    }}
                                />
                                {keyInfoForm.touched.images && keyInfoForm.errors.images ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.images}</div>
                                ) : null}
                            </div>
                            <button type="submit" className="bg-main-color text-white py-2 rounded-full text-xs font-bold px-5 mt-4">Continue</button>
                        </Form>)}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}

export default KeyInfoPage;