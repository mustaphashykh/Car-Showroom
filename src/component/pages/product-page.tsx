import { Footer } from "../commons";
import { HeroSection, ImageSection, InfoSection, KeyInfo, Preparation, ServiceHistory, Specification } from "../generals";

const ProductPage = () => {
    return (
        <div className="text-[0.75rem]">
            <HeroSection />
            <ImageSection />
            <KeyInfo />
            <InfoSection />
            <Specification />
            <ServiceHistory />
            <Preparation />
            <Footer />
        </div>
    )
}

export default ProductPage;