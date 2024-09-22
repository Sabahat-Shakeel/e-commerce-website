
import Image from "next/image"
const Imge =()=>{
    return (
        <div className="flex justify-center bg-gradient-to-bl  bg-slate-900">
        
        <Image 
          src="/c1.jpg"
          alt="men clothes gallery"
          height="100"
          width="1000"
          className=" bg-gradient-to-r rounded-sm sm:px-28  sm:py-1  object-contain flex justify-center"
        />
       
    
        </div>
    )
}
export default Imge