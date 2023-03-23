import CircuitBoard from "./CircuitBoard";
import Matrix from "./Matrix";

const Education = () => {
  return (
    <>
      {/* <Book /> */}
      <div className="flex flex-col w-full h-full relative">
       <div className="text-3xl font-bold mb-4 text-primary mx-auto mt-20">
          <span>Education</span>
        </div> 
        <div className="absolute flex flex-col w-full overflow-hidden right-triangle items-end justify-end h-full
                        bg-background1">
          <CircuitBoard />
          <div className="overflow-hidden flex flex-col text-3xl w-1/2 text-right gap-2 mb-20 mr-8">
            <span>Bachelors in Electronics and Communication Engineering</span>
            <span className="text-xl">IOE Pulchowk Campus, Tribhuvan University</span>
            <span className="font-bold text-xl">2014 - 2018</span>
          </div>

        </div>
        <div className="absolute flex flex-col w-full overflow-hidden left-triangle items-start justify-start h-full
                        ">
          <Matrix />
          <div className="overflow-hidden flex flex-col text-3xl w-1/2 text-left gap-2 mt-40 ml-8">
            <span>Master of Science in Computer Science</span>
            <span className="text-xl">Miami University</span>
            <span className="font-bold text-xl">2022 - 2024</span>
          </div>
        </div>
      </div>

    </>

  );
};

export default Education;
