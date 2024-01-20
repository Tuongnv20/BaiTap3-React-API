
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Detail.scss'

const Detail = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`https://api.duong.id.vn/api/products/id/${id}`);
                setProductDetails(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className='product-detail'>
            {productDetails ?
                <>
                    <button onClick={handleBack}>Back</button>
                    <h2>{productDetails.name}</h2>
                    <p>{productDetails.description}</p>
                    <p>${productDetails.price}</p>

                </>
                :
                <p>Loading...</p>
            }
        </div>
    );
};

export default Detail