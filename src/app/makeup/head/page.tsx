import Image from "next/image";
const Headd1 = ()=>{
    return (
        <div>
    
    <div className="flex justify-center bg-gradient-to-bl  bg-slate-900">
        
        <Image 
          src="/sc.jpg"
          alt="men clothes gallery"
          height="100"
          width="1000"
          className=" bg-gradient-to-r rounded-sm sm:px-28  sm:py-1  object-contain flex justify-center"
        />
       
    
        </div>
      
            <p className="  font-light text-neutral-600 dark:text-neutral-500 text-xs m-4 p-2 sm:text-base sm:w-5/6 md:ml-28 md:p-11 sm:ml-11 sm:p-6"> Stay stylish and comfortable with our collection of full Availibility of Womens Lipstick and Blusher cool and pretty. Soft and high-quality materials, these are perfect for all season, the perfect addition to your wardrobe. Upgrade your everyday look with our pretty and cool costmatic. Shop now and elevate your style.</p>
            <br/><span className="font-semibold underline sm:text-xl font-[Poppins] flex justify-center pb-2 dark:text-gray-600">Avalibility</span>
        </div>
    )
}
export default Headd1;