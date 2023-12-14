import { Border, Footer, Heading } from "../commons";
import { Formik, Form } from "formik";
import * as Yup from 'yup';

const LoginPage = () => {
    const validation = Yup.object({
        email: Yup.string()
            .email('invalid email address')
            .required('please fill the above field.'),
        password: Yup.string()
            .required('please fill the above field.'),
    })
    return (
        <div>
            <div className="px-7">
                <div>
                    <Heading heading="Login" />
                    <Border />
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validation}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values);
                        resetForm()
                    }}
                >
                    {({ ...keyInfoForm }) => (
                        <Form>
                            <div className="pt-4 pb-4">
                                <label className="text-xs font-bold">Email</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('email')} />
                                {keyInfoForm.touched.email && keyInfoForm.errors.email ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="pb-4">
                                <label className="text-xs font-bold">Password</label>
                                <input type="text" className="bg-[#D9D9D9] w-full text-[0.625rem] p-2 border-[0.5px] border-gray-400 outline-none" placeholder="enter here..." {...keyInfoForm.getFieldProps('password')} />
                                {keyInfoForm.touched.password && keyInfoForm.errors.password ? (
                                    <div className="text-[0.45rem] text-red-600">{keyInfoForm.errors.password}</div>
                                ) : null}
                            </div>
                            <button type="submit" className="bg-main-color text-white py-2 rounded-full text-xs font-bold w-24 mt-2">Login</button>
                        </Form>)}
                </Formik>
            </div>
            <Footer absoute />
        </div>
    )
}

export default LoginPage;