import { Footer } from ".";
import loader from '../../assets/loader.gif'

const LoadingScreen = () => {
    return (
        <>
        <div className="w-full h-full bg-[#0000002e] absolute top-0 right-0 flex items-center justify-center">
            <img src={loader} alt="loading..." loading="eager" className="w-14 h-14" />
        </div>
        <Footer absoute/>
        </>
    )
}

export default LoadingScreen;