'use client'
import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect,useState} from 'react'

function TopCategoryList({selectedCategory}) {
  const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
      getCatergoryList();
    },[])
  const getCatergoryList=()=>{
      GlobalApi.getCategory().then(resp=>{
        setCategoryList(resp.data.data);
      })
    }
  return (
    <div className='flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center' >
    {
        categoryList.map((category,index)=>{
           
            return(
                <Link href={'/products-category/'+category.attributes.name} className={`flex flex-col items-center bg-green-50 p-3 rounded-lg group cursor-pointer hover:bg-green-600 w-[150px] min-w-[100px] ${selectedCategory === category.attributes.name ? 'bg-green-600 text-white' : ''}`}>
                    <Image
                    src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+category.attributes.icon.data[0].attributes.url}
                    width={50}
                    height={50}
                    alt='icon'
                    className='group-hover:scale-125 transition-all ease-in-out'
                    /> 
                    <h2 className={`text-green-600 group-hover:text-white ${selectedCategory===category.attributes.name?'text-white':''}`}>{category?.attributes?.name}</h2>
                </Link>
            );
        })
    }  

</div>
  )
}

export default TopCategoryList