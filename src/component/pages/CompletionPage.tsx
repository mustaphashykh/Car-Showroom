import { Border, Footer, Heading } from "../commons";

const CompletionPage = () => {
    return (
        <div>
            <div className="px-7">
                <div>
                    <Heading heading="Completion" />
                    <Border />
                </div>
                <div className="py-6">
                    <p className="text-[0.625rem]">
                        step 5 of 5
                    </p>
                    <div className="bg-[#D9D9D9] w-full rounded-full h-4 mt-2">
                        <div className="bg-high-light-color w-full h-full rounded-full px-1.5 text-[0.5rem] text-white flex items-center justify-end">
                            <p>100%</p>
                        </div>
                    </div>
                </div>
                <p className="text-xs font-bold text-center pb-6">Review the Information and Publish!</p>
                <div className="flex justify-center">
                <button type="button" className="bg-main-color text-white py-2 rounded-full text-xs font-bold w-24">Publish</button>
                </div>
            </div>
            <Footer absoute />
        </div>
    )
}

export default CompletionPage;