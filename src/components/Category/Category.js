import React from 'react'
import './Category.scss';
import axios from 'axios';

const Category = ({ category, setProduct }) => {

    const handleOnClick = async (id) => {
        try {
            const response = await axios.get(`https://api.duong.id.vn/api/products/category/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('something went wronggggg:', error);
        }
    }

    return (
        <>
            <div className='category-wrapper'>
                <h2>Category</h2>
                <div className='category-list'>
                    {category.map((cate, index) => (
                        <div
                            key={cate.id}
                            className='category-info'
                            onClick={() => handleOnClick(cate.id)}
                        >
                            {cate.name}
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default Category