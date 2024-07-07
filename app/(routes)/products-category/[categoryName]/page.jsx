import React from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import TopCategoryList from '../_components/TopCategoryList';
import ProductList from '@/app/_components/ProductList';

async function ProductCategory({params}) {
  const decodedCategoryName = decodeURIComponent(params.categoryName);
  const categoryList=await GlobalApi.getCategoryList();
  const productList=await GlobalApi.getProductsByCategory(params.categoryName);
  return (
    <div>
      <h2 className='p-4 bg-primary text-white font-bold text-3xl text-center'>{params.categoryName}</h2>
      <TopCategoryList categoryList={categoryList}
      selectedCategory={params.categoryName} />
      <div className='p-5 md:p-10'>
        <ProductList productList={productList}/>
      </div>
      
    </div>
  )
}

export default ProductCategory


// className={`selection:flex flex-col 
// items-center bg-green-50 
// p-3 rounded-lg group 
// cursor-pointer 
// hover:bg-green-600 
// w-[150px] min-w-[100px]
// ${selectedCategory==category.attributes.name&&'bg-green-600 text-white'}
// `}