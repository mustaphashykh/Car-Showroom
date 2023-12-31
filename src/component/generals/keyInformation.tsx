import React from 'react';
import pointer from '../../assets/Vector 2.png'
import { Border, Heading } from "../commons";

const KeyInfo: React.FC<{ miles: number, mileage: number, numberOfOwners: number, registration: string }> = ({ miles, mileage, numberOfOwners, registration }) => {
    return (
        <div className="pl-7">
            <div>
                <Heading heading="Key Information" />
                <Border />
                <div className="text-[0.875rem] pt-5 pb-6 flex flex-wrap gap-y-4">
                    <div className="flex items-center gap-1.5 w-1/2">
                        <img src={pointer} className="w-3" alt="pointer" />
                        <p>Registration-{registration}</p>
                    </div>
                    <div className="flex items-center gap-1.5 w-1/2">
                        <img src={pointer} className="w-3" alt="pointer" />
                        <p>Registration-Year-{miles ? miles: 'NAN'}</p>
                    </div>
                    <div className="flex items-center gap-1.5 w-1/2">
                        <img src={pointer} className="w-3" alt="pointer" />
                        <p>Mileage - {mileage}</p>
                    </div>
                    <div className="flex items-center gap-1.5 w-1/2">
                        <img src={pointer} className="w-3" alt="pointer" />
                        <p>Number of owners: {numberOfOwners}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyInfo;