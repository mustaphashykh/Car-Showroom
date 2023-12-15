import { Border, Footer, Heading } from "../commons";
import { ProductCard } from ".";

const AllListingPage = () => {
    return (
        <div>
            <div className="px-7">
                <div className="pb-4">
                    <Heading heading="All Listings" />
                    <Border />
                </div>
                <div>
                    <div className="text-[0.5rem] border-b-[1px] border-b-gray-400 flex justify-between text-gray-500">
                        <p>Name</p>
                        <div className="flex gap-3">
                            <p>Edit</p>
                            <p>Delete</p>
                        </div>
                    </div>
                    <div className="pb-32">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    </div>
                </div>
            </div>
            <Footer absoute />
        </div>
    )
}

export default AllListingPage;