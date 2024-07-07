import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Image from 'next/image'
 


function Slider({sliderList}) {
  return (
    <div>
        <Carousel>
            <CarouselContent>
                {sliderList.map((slider,index)=>{
                    return(
                        <CarouselItem key={index}>
                            <Image
                                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+slider.attributes.image.data[0].attributes.url}
                                width={1000}
                                height={400}
                                alt='slider'
                                className='w-full md:h-[400px] h-[200] object-cover rounded-2xl'
                            /> 
                        </CarouselItem>
                    );
                })}
                
                
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default Slider