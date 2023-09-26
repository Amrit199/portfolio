import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto p-5">
        <h1 className="text-black">Miljø Renholdtjenester AS</h1>
        <div className="w-full h-[2px] bg-black my-4"></div>
        <p className=" px-3 text-lg">
          Miljø Renholdtjenester AS a cleaning company located in center of
          Oslo. Primary focus of this company is to provide high quality cleaning
          solutions and adaptable expertise that covers a wide range of
          commercial environments. Service offers in various locations
          including busy shopping malls, health clinics, restaurants, canteens,
          offices and shops.
        </p>
        <div className="flex items-center justify-center gap-6 py-4">
              <Link href={item.code}>
                <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                  Code
                </button>
              </Link>
              <Link href={item.demo}>
                <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                  Demo
                </button>
              </Link>
            </div>
      </div>
      <div className="w-[80%] mx-auto p-5">
        <h3 className="text-black text-center text-xl pb-2">Home page</h3>
        <Image src={item.img} />
      </div>
    </div>
  );
};

export default ProductCard;
