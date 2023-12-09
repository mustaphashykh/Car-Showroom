import { Border, Heading } from "../commons";
import pattern from '../../assets/Group 6.png'

const HeroSection = () => {
    return (
        <div className="pl-7">
            <div>
                <Heading heading="Volvo V40 Hatchback" />
                <Border />
            </div>
            <p className="pt-1 pb-7">T3 [152] Cross Country Pro 5dr Geartronic</p>
            <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                    <img className="w-4 h-4" src={pattern} alt="pattern" />
                    <p>Asking Price - £13350. Zero fees apply!!</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <img className="w-4 h-4" src={pattern} alt="pattern" />
                    <p>Cap Clean - £13000</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <img className="w-4 h-4" src={pattern} alt="pattern" />
                    <p>Autorader Retail - £14625</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;