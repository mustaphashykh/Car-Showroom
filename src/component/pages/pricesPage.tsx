import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Border, Footer, Heading } from "../commons";

const PricePage = () => {
    const validation = Yup.object({
        asking_price: Yup.string()
            .required('please fill the above field.'),
        cap_clean: Yup.string()
            .required('please fill the above field.'),
        autorader_retail: Yup.string()
            .required('please fill the above field.'),
    })
    return (
        <div>
            <div className="px-7">
                <div>
                    <Heading heading="Prices" />
                    <Border />
                </div>
                <div className="py-6">
                    <p className="text-[0.625rem]">
                        step 4 of 5
                    </p>
                    <div className="bg-[#D9D9D9] w-full rounded-full h-4 mt-2">
                        <div className="bg-high-light-color w-4/5 h-full rounded-full px-1.5 text-[0.5rem] text-white flex items-center justify-end">
                            <p>80%</p>
                        </div>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        asking_price: '',
                        cap_clean: '',
                        autorader_retail: '',
                    }}
                    validationSchema={validation}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm()
                    }}
                >
                    {({ ...keyInfoForm }) => (
                        <Form>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Asking Price</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('asking_price')} />
                                {keyInfoForm.touched.asking_price && keyInfoForm.errors.asking_price ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.asking_price}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Cap Clean</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('cap_clean')} />
                                {keyInfoForm.touched.cap_clean && keyInfoForm.errors.cap_clean ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.cap_clean}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Autorader Retail</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('autorader_retail')} />
                                {keyInfoForm.touched.autorader_retail && keyInfoForm.errors.autorader_retail ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.autorader_retail}</div>
                                ) : null}
                            </div>
                            <button type="button" className="bg-high-light-color text-white py-2 rounded-full text-xs font-bold w-24 mt-2">Previous</button>
                            <br />
                            <button type="submit" className="bg-main-color text-white py-2 rounded-full text-xs font-bold w-24 mt-2">Next</button>
                        </Form>)}
                </Formik>
            </div>
            <Footer absoute />
        </div>
    )
}

export default PricePage;