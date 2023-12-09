import { Border, Heading } from "../commons";

const Preparation = () => {
    return(
        <div className="pl-7">
                <div>
                    <Heading heading="Preparation" />
                    <Border />
                </div>
                <ul className="py-3 pl-4 list-disc">
                    <li>
                        2 keys Present
                    </li>
                    <li>
                        Tyres NSR 5mm, OSF 5mm, NSR 3mm, OSR 4mm
                    </li>
                    <li>
                        Stone chips to bonnet
                    </li>
                    <li>
                        1 x 4mm scratch to bonnet – touched in
                    </li>
                    <li>
                        1 x 4mm chip to roof – touched in
                    </li>
                    <li>
                        Light scratch to polish
                    </li>
                    <li>
                        Allow for standard soft prep in addition to above
                    </li>
                </ul>
            </div>
    )
}

export default Preparation;