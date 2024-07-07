import Image from "next/image";
import { Button } from "@/components/ui/button"
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Footer from "./_components/Footer";

export default async function Home() {
  
  const sliderList=await GlobalApi.getSliders();
  const categoryList=await GlobalApi.getCategoryList();
  const productList=await GlobalApi.getProductList();
  return (
    <div className='p-5 md:p-10 px-16'>
      <Slider sliderList={sliderList}/>
      <CategoryList categoryList={categoryList}/>
      <ProductList productList={productList}/>
      <Image className='w-full h-[400px] object-contain'src='/banner.png'
             width={1000}
             height={100}/>
      <Footer/>
    </div>
  );
}
