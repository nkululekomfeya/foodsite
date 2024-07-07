"use client"
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect,useState} from 'react'
import GlobalApi from '../_utils/GlobalApi';


function CategoryList() { 
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
    <div className='mt-5'>
        <h2 className='text-green-600 font-bold text-2xl'>Shop by Category</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2' >
            {
                categoryList.map((category,index)=>{
                   
                    return(
                        <Link key={index} href={'/products-category/'+category.attributes.name} className='flex flex-col items-center bg-green-50 p-3 rounded-lg group cursor-pointer hover:bg-green-200'>
                            <Image
                            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+category.attributes.icon.data[0].attributes.url}
                            width={50}
                            height={50}
                            alt='icon'
                            className='group-hover:scale-125 transition-all ease-in-out'
                            /> 
                            <h2 className='text-green-800'>{category?.attributes?.name}</h2>
                        </Link>
                    );
                })
            }  

        </div>
    </div>
  )
}

export default CategoryList

/* {
    categoryList.map((category,index)=>{
        console.log("in console")
        return(
            <div>
                <h2>{category?.attributes?.name}</h2>
                 <Image
                src={category.name}
                width={50}
                height={50}
                alt={icon}
                /> 
            </div>
        );
    })
} */