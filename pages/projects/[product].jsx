import { useRouter } from "next/router";
import { Data } from "../../data";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function Project({}) {
  const router = useRouter();
  const { product } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (product) {
      const fetchedProject = Data.projects.find(
        (project) => project.name === product
      );
      setProject(fetchedProject);
    }
  }, [product]);
  console.log({ product });

  if (!project) {
    return <div>Loading.....</div>;
  }
  return (
    <div className=" w-full h-full py-5 px-2 font font-playfair bg-slate-200">
      <div className=" w-[80%] mx-auto">
        <Link href="/">
          <button className=" flex items-center gap-2 transition-all hover:scale-110 hover:bg-slate-300">
            <BiArrowBack size={25} />
            <p>Back</p>
          </button>
        </Link>
      </div>
      <ProductCard item={project}/>
      <div className="w-full md:w-[80%] mx-auto h-full my-4 p-5 md:p-8 lg:p-10 xl:p-14 shadow-lg shadow-gray-700 bg-white flex flex-col gap-4">
        {/* heading and intro */}
        <div className=" w-full text-center flex flex-col gap-4">
          <h1>{project.title}</h1>
          <p></p>
        </div>
        {/* project image */}
        <div className="w-full overflow-hidden">
          <Link href="https://cleaning-website-beta.vercel.app/">
            <Image
              src={project.img}
              alt="momo"
              className=" cursor-pointer transition-all hover:scale-110 duration-300 active:border-green-600"
            />
          </Link>
        </div>
        {/* A brief description and technologies */}
        <div className=" w-full flex flex-col gap-4">
          <h2>The Brief</h2>
          <div className="flex flex-col gap-3">
            <p>{project.desc1}</p>
            <p>{project.desc2}</p>
            <div className="flex items-center justify-center gap-6 py-4">
              <Link href={project.code}>
                <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                  Code
                </button>
              </Link>
              <Link href={project.demo}>
                <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                  Demo
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3>Technologies</h3>
            <div className="w-full flex gap-4">
              {project.technologies.map((technology, id) => (
                <div key={id} className="flex items-center gap-4">
                  <Image
                    src={technology.img}
                    title={technology.alt}
                    alt={technology.alt}
                    className=" w-14 cursor-pointer transition-transform hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
