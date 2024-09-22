import Imge from "./cover/page";
import  Jewllery13  from "./jawcard12/page";
import  Jewllery2  from "./jewcard1/page";
import  Jewllery11  from "./jewcard10/page";
import  Jewllery12  from "./jewcard11/page";
import  Jewllery3  from "./jewcard2/page";
import  Jewllery4  from "./jewcard3/page";
import  Jewllery5  from "./jewcard4/page";
import  Jewllery6 from "./jewcard5/page";
import  Jewllery7  from "./jewcard6/page";
import  Jewllery8  from "./jewcard7/page";
import  Jewllery9  from "./jewcard8/page";
import  Jewllery10  from "./jewcard9/page";

const Jewllery = () => {
  return (
    <div>
      <Imge/>
     <h1 className="flex justify-around p-2 sm:text-5xl font-bold text-slate-900 text-opacity-90 sm:p-4 sm:w-2/2">Women Jewlleries</h1>
      
      <p className="text-[10px] p-1 m-4 sm:text-base text-neutral-500 dark:text-neutral-400 flex justify-center sm:justify-around sm:p-11 sm:m-7">
        {" "}
        Upgrade your everyday look with our cool jewllery collection. Shop now
        and elevate your style
      </p>

      <span className="font-semibold underline sm:text-xl font-[Poppins] flex justify-center sm:pb-8 dark:text-gray-600">
        Avalibility
      </span>

      <Jewllery2 />
      <Jewllery3 />
      <Jewllery4 />
      <Jewllery5 />
      <Jewllery6 />
      <Jewllery7 />
      <Jewllery8 />
      <Jewllery9 />
      <Jewllery10 />
      <Jewllery11 />
      <Jewllery12 />
      <Jewllery13 />
    </div>
  );
};
export default Jewllery;
