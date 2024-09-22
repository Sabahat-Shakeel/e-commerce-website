import Cover from "./cover/page";
import { Women1 } from "./wocard1/page";
import { Women2 } from "./wocard2/page";
import { Women3 } from "./wocard3/page";
import { Women4 } from "./wocard4/page";
import { Women5 } from "./wocard5/page";
import { Women6 } from "./wocard6/page";

const Women = ()=>{
    return (
        <div>
            <Cover/>
            <h1 className="flex justify-around p-2 sm:text-5xl font-bold text-orange-400 text-opacity-60 sm:p-4 sm:w-2/2">Women Wastern Fashion</h1>
            <p className="text-neutral-600 dark:text-neutral-500  sm:text-base sm:p-8 p-2 m-2 flex justify-center text-xs">Soft and high-quality materials, these are perfect for all season</p> <span className="font-semibold underline sm:text-xl font-[Poppins] flex justify-center sm:pb-8 pb-2  dark:text-gray-600">
        Avalibility
      </span>
            <Women1/>
            <Women2/>
            <Women3/>
            <Women4/>
            <Women5/>
            <Women6/>

        </div>
    )
}
export default Women;