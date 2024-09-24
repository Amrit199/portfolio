import { useRouter } from "next/router";
import { Data } from "../../data";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  if (!project) {
    return <div>Loading.....</div>;
  }
  return (
    <div className=" w-full h-full py-5 px-2 font font-playfair bg-slate-200">
      <div className=" w-[80%] mx-auto">
        <Link href="/">
          <button className=" flex items-center gap-2 transition-all hover:scale-110 hover:bg-gray-900 hover:text-white">
            <BiArrowBack size={25} />
            <p>Back</p>
          </button>
        </Link>
      </div>
      <div className="w-full md:w-[80%] lg:w-[60%] mx-auto h-full my-4 p-5 md:p-8 lg:p-10 flex flex-col gap-10">
        {/* A brief description and technologies */}
        <div className="w-full flex flex-col gap-4">
          <h2 className="font-bold text-3xl bg-white p-3 rounded-xl shadow-lg">
            Project Overview
          </h2>
          <div className="flex flex-col gap-3">
            <p className="text-lg">{project.intro}</p>
            {/* project image */}
            <div className="w-full overflow-hidden">
              <Link href={project.demo}>
                <Image
                  src={project.img}
                  alt="momo"
                  className=" cursor-pointer transition-all hover:scale-110 duration-300 active:border-green-600 rounded-xl"
                />
              </Link>
            </div>
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
            <h2 className="font-bold text-3xl">Technologies</h2>
            <div className="w-full flex gap-4">
              {project.technologies.map((technology, id) => (
                <div key={id} className="flex items-center gap-4">
                  <Image
                    src={technology.img}
                    title={technology.alt}
                    alt={technology.alt}
                    className=" w-20 cursor-pointer transition-transform hover:scale-125"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Goals and challenges */}
        {project.objective && (
          <div className=" w-full flex flex-col gap-4">
            <h2 className="font-bold text-3xl bg-white p-3 rounded-xl shadow-lg">
              Objective
            </h2>
            <p className="text-lg">{project?.objective}</p>
            <h3 className="text-xl font-semibold">Challenges:</h3>
            <ul className="list-disc pl-5 mb-4">
              {project?.projectGoals?.challenges.map((challenge, index) => (
                <li key={index} className="text-lg">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Solution and Approach */}
        {project.solution && (
          <div className="mb-4 text-lg">
            <h2 className="text-2xl font-semibold bg-white p-3 rounded-xl shadow-lg">
              Solution and Approach
            </h2>
            {project?.solutionAndApproach?.process.map((step, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{step.step}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && (
          <div>
            <h2 className="text-2xl font-semibold bg-white p-3 rounded-xl shadow-lg">
              Key Features
            </h2>
            <ul className="list-disc pl-5 text-lg mt-2">
              {project?.keyFeatures?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Results and Impact */}
        {project.resultsAndImpact && (
        <div className="text-lg">
          <h2 className="text-2xl font-semibold bg-white p-3 rounded-xl shadow-lg">
            Results and Impact
          </h2>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <p className="mb-4">
                Outcomes: {project?.resultsAndImpact?.outcomes}
              </p>
            </li>
            <li>
              <p className="mb-4">
                Metrics: {project?.resultsAndImpact?.metrics}
              </p>
            </li>
            <li>
              <p className="mb-4">
                Lessons Learned: {project?.resultsAndImpact?.lessonsLearned}
              </p>
            </li>
          </ul>
        </div>

        )}
      </div>
    </div>
  );
}
