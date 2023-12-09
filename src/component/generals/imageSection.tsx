import image1 from '../../assets/image 2.png'
import image2 from '../../assets/image 3.png'
import image3 from '../../assets/image 4.png'
import image4 from '../../assets/image 5.png'
import { useEffect, useRef, useState } from "react";

const ImageSection = () => {
    const images = [image1, image2, image3, image4]
    const [counter, setCounter] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);
    const increaseCounter = () => {
        const imageCounter = counter;
        if (imageCounter === images.length - 1) {
            setCounter(0)
        } else {
            setCounter(imageCounter + 1)
        }
    }
    const decreaseCounter = () => {
        const imageCounter = counter;
        if (imageCounter === 0) {
            setCounter(images.length - 1)
        } else {
            setCounter(imageCounter - 1)
        }
    }
    const scrollImage = () => {
        if (imageRef.current) {
            imageRef.current.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
    useEffect(() => {
        scrollImage()
    }, [counter])
    return(
        <div className="py-10">
                <div className="relative">
                    <div className="absolute text-2xl flex w-full top-[42%] justify-between px-2">
                        <div className="w-8 h-8 border-[1px] border-black bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={decreaseCounter}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <div className="w-8 h-8 border-[1px] border-black bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={increaseCounter}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                    <div className="flex overflow-hidden w-4/5 mx-auto">
                        {
                            images.map((image, idx) => <img ref={idx === counter ? imageRef : null} src={image} key={idx} alt="product" />)
                        }
                    </div>
                </div>
                <div className="flex overflow-hidden w-4/5 mx-auto pt-1">
                    <img src={image2} className="w-1/3" alt="product1" />
                    <img src={image3} className="w-1/3" alt="produc2" />
                    <img src={image4} className="w-1/3" alt="product3" />
                </div>
            </div>
    )
}

export default ImageSection;