import { Border, Heading } from "../commons";

const ServiceHistory = () => {
    return(
        <div className="pl-7">
                <div>
                    <Heading heading="Service History" />
                    <Border />
                </div>
                <ul className="py-3 pl-4 list-disc">
                    <li>
                        29/06/2020 @ 7793 miles – Volvo
                    </li>
                    <li>
                        01/07/2021 @ 16761 miles – Volvo
                    </li>
                    <li>
                        17/06/2022 @ 34645 miles – Volvo
                    </li>
                    <li>
                        05/04/2023 @ 44252 miles - Volvo
                    </li>
                </ul>
            </div>
    )
}

export default ServiceHistory;