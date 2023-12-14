import { Border, Footer, Heading } from "../commons";

const Listing = () => {
    return (
        <div>
            <div className="px-7">
                <div>
                    <Heading heading="Listings" />
                    <Border />
                </div>
                <div className="mt-12 flex items-center justify-between">
                    <div className="bg-[#D9D9D9] border-[1px] border-gray-400 text-sm text-gray-500 w-[9.5rem] rounded-lg h-14 flex items-center justify-center">
                        + add a new listing
                    </div>
                    <div className="bg-[#D9D9D9] border-[1px] border-gray-400 text-sm text-gray-500 w-[9.5rem] h-14 flex items-center justify-center rounded-lg">
                        see all listings
                    </div>
                </div>
            </div>
            <Footer absoute />
        </div>
    )
}

export default Listing;