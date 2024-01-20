import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Category from './components/Category/Category';
import Product from './components/Product/Product';
import Pagination from './components/Pagination/Pagination';

function App() {
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);


  const getAllProducts = async () => {
    try {
      const response = await axios.get('https://api.duong.id.vn/api/products')
      //console.log('product', response.data)
      setProduct(response.data)
    } catch (e) {
      console.log('something went wrong........')
    }
  }
  useEffect(() => {

    getAllProducts()
  }, [])



  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const response = await axios.get('https://api.duong.id.vn/api/categories')
        //console.log('category', response?.data)
        setCategory(response.data)
      } catch (e) {
        console.log('something went wrong........')
      }
    }
    getAllCategories()
  }, [])

  const handleMyShopClick = () => {
    // Gọi hàm getAllProducts khi click vào My Shop
    getAllProducts();
  };

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentPosts = product.slice(firstIndex, lastIndex);


  return (
    <>
      <h1 onClick={handleMyShopClick}>My Shop</h1>
      <div className='app'>
        <div className='category'>
          <Category category={category} setProduct={setProduct} />
        </div>
        <div className='product'>
          <Product product={currentPosts} />
          <div className='pagination'>
            <Pagination
              totalProducts={product.length}
              productsPerPage={productsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
