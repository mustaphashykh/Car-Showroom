import { Border, Heading } from "../commons";
import React from "react";

const decodeHtml = (html: string) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = html;
    return textArea.value;
};
const Specification: React.FC<{ specification: string }> = ({ specification }) => {
    const decodedHTML = decodeHtml(specification)
    return (
        <div className="px-7 py-5">
            <div>
                <Heading heading="Specifications" />
                <Border />
            </div>
            <ul className="pt-2.5 list-disc">
                <div dangerouslySetInnerHTML={{ __html: decodedHTML }} />
            </ul>
        </div>
    )
}

export default Specification;