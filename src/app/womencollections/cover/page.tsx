import Image from "next/image";
const Cover = () => {
  return (
    <div className="flex justify-center bg-orange-300">
      <Image
        src="/cover.jpg"
        alt="men clothes gallery"
        height="1000"
        width="1000"
        className="  sm:rounded-sm object-contain flex justify-center"
        priority
      />
    </div>
  );
};
export default Cover;
