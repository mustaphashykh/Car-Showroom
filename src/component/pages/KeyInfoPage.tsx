import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Border, Footer, Heading } from "../commons";
import { useRef } from "react";

const KeyInfoPage = () => {
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
                    .required("A file is required")
            )
            .required("At least one file is required")
            .min(1, "Atleast one file is required"),
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
                        step 1 of 5
                    </p>
                    <div className="bg-[#D9D9D9] w-full rounded-full h-4 mt-2">
                        <div className="bg-high-light-color w-1/5 h-full rounded-full px-1.5 text-[0.5rem] text-white flex items-center justify-end">
                            <p>20%</p>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        make: '',
                        model: '',
                        variant: '',
                        registration: '',
                        mileage: '',
                        owners: '',
                        images: []
                    }}
                    validationSchema={validation}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm()
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