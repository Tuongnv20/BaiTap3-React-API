// import React, { useState } from 'react';
// import './Product.scss';
// import Detail from '../Detail/Detail';

// const Product = ({ product }) => {
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const handleDetail = (id) => {
//         const selected = product.find(p => p.id === id);
//         setSelectedProduct(selected);
//     }

//     const handleBack = () => {
//         setSelectedProduct(null);
//     }

//     return (
//         <>
//             {selectedProduct ?
//                 <Detail product={selectedProduct} onBack={handleBack} />
//                 :
//                 <div className='product-wrapper'>
//                     {product.map((p, index) => (
//                         <div
//                             className='product-list'
//                             key={index}
//                             onClick={() => handleDetail(p.id)}
//                         >
//                             <div className='product-image'>
//                                 <img
//                                     src='logo192.png' alt=''
//                                 />
//                             </div>
//                             <div className='product-info'>
//                                 <h3>{p.name}</h3>
//                                 <h4>${p.price}</h4>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             }
//         </>
//     );
// }

// export default Product;


import React, { useState } from 'react';
import './Product.scss';
import Detail from '../Detail/Detail';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();

    const handleDetail = (id) => {
        // Sử dụng navigate để chuyển hướng đến trang Detail
        navigate(`/detail/${id}`);
    }
    return (
        <>
            <div className='product-wrapper'>

                {product.length === 0 ?
                    <h3>Hiện không có sản phẩm nào...</h3>
                    :
                    product.map((p, index) => (
                        <div
                            className='product-list'
                            key={p.id}
                            onClick={() => handleDetail(p.id)}
                        >
                            <div className='product-image'>
                                <img
                                    src='logo192.png' alt=''
                                />
                            </div>
                            <div className='product-info'>
                                <h3>{p.name}</h3>
                                <h4>${p.price}</h4>
                            </div>
                        </div>
                    ))
                }
                {/* {product.map((p, index) => (
                    <div
                        className='product-list'
                        key={p.id}
                        onClick={() => handleDetail(p.id)}
                    >
                        <div className='product-image'>
                            <img
                                src='logo192.png' alt=''
                            />
                        </div>
                        <div className='product-info'>
                            <h3>{p.name}</h3>
                            <h4>${p.price}</h4>
                        </div>
                    </div>
                ))} */}
            </div>

        </>
    );
}

export default Product;
