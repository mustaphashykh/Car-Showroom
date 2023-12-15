import { useNavigate } from 'react-router-dom';
import img from '../../assets/image 2.png'

const ProductCard = () => {
    const navigate = useNavigate()
    return (
        <div className="text-[0.65rem] border-b-[1px] border-b-gray-400 flex justify-between items-center">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/car-display/2')}>
                <img src={img} loading="lazy" alt="img" className="w-14" />
                <p>Volvo V40 Hatchback</p>
            </div>
            <div className="text-gray-500 text-xs flex gap-5 pr-2">
                <i className="fa-solid fa-pen cursor-pointer"></i>
                <i className="fa-regular fa-trash-can cursor-pointer"></i>
            </div>
        </div>
    )
}

export default ProductCard;