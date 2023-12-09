import { Border, Heading } from "../commons";
import checkbox from '../../assets/Vectorcheck.png'

const Specification = () => {
    return (
        <div className="px-7 py-5">
            <div>
                <Heading heading="Specifications" />
                <Border />
            </div>
            <div className="flex flex-col gap-2 pt-2.5">
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>Metallic paint Fusion Red £550</p>
                </div>
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>Winter pack (heated seats, windscreen and headlamp cleaning system) -£400</p>
                </div>
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>18” Diamond cut alloys</p>
                </div>
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>Sensus connect with high performance sound and navigation</p>
                </div>
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>Rear camera</p>
                </div>
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>Electric folding wing mirrors</p>
                </div>
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>Full leather interior</p>
                </div>
                <div className="flex gap-1">
                    <img src={checkbox} className="w-3 object-contain" alt="checkbox" />
                    <p>Total options £950</p>
                </div>
            </div>
        </div>
    )
}

export default Specification;