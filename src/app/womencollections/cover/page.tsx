import Image from "next/image";
const Cover = () => {
  return (
    <div className="flex justify-center bg-orange-300">
      <Image
        src="/cover.jpg"
        alt="men clothes gallery"
        height="100"
        width="1200"
        className="  sm:rounded-sm object-contain flex justify-center"
      />
    </div>
  );
};
export default Cover;
