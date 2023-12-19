import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { reviloActions } from '../../features/slice';
const ProductCard: React.FC<{ item: { make: string, model: string, variant: string, images: string[], _id: string }, deleteProduct: (id:string) => void }> = ({ item, deleteProduct }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy text to clipboard', err);
        }
    };
    const updateProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/products/${item._id}`)
            if (response.status === 200) {
                dispatch(reviloActions.set(response.data.product))
                navigate('/key-information')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="text-[0.65rem] border-b-[1px] border-b-gray-400 flex justify-between items-center">
            <div className="flex items-center gap-1 cursor-pointer">
                <img src={item.images[0]} loading="lazy" alt="img" className="w-14 h-9 object-cover" />
                {item.make && <p>{item.make}</p>}
                {item.model && <p>{item.model}</p>}
                {item.variant && <p>{item.variant}</p>}
            </div>
            <div className="text-gray-500 text-xs flex gap-5 pr-2">
                <i className="fa-regular fa-copy pr-1 cursor-pointer" onClick={() => copyToClipboard(`http://localhost:5173/car-display/${item._id}`)}></i>
                <i className="fa-solid fa-pen cursor-pointer" onClick={updateProduct}></i>
                <i className="fa-regular fa-trash-can cursor-pointer" onClick={() => deleteProduct(item._id)}></i>
            </div>
        </div>
    )
}

export default ProductCard;