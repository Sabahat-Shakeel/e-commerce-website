import Image from "next/image";
const Headd = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center bg-black ">
          <Image
            src="/cov1.jpg"
            alt="men clothes gallery"
            height="500"
            width="900"
            className="object-contain"
            priority
          />
        </div>
      </div>
      <h1 className="flex justify-around p-2 sm:text-5xl font-bold text-slate-900 text-opacity-90 sm:p-4 sm:w-2/2">
        Men&apos;s Wastern Fashion
      </h1>
      <p className=" font-light text-neutral-600 dark:text-neutral-500 text-xs m-4 p-2 sm:text-base sm:w-5/6 md:ml-28 md:p-11 sm:ml-11 sm:p-6">
        {" "}
        Stay stylish and comfortable with our collection of full Availibility of
        Mens Clothes including fragrances.Soft and high-quality materials, these
        are perfect for all season, the perfect addition to your wardrobe.
        Upgrade your everyday look with our collection. Shop now and elevate
        your style.
      </p>
      <br />
      <span className="font-semibold underline sm:text-xl font-[Poppins] flex justify-center pb-2 dark:text-gray-600">
        Avalibility
      </span>
    </div>
  );
};
export default Headd;
