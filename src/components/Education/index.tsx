import CircuitBoard from "./CircuitBoard";
import Matrix from "./Matrix";

const Education = () => {
  return (
    <>
      {/* <Book /> */}
      <div className="flex flex-col w-full h-full relative">
        <div className="text-2xl xs:text-3xl font-bold mb-4 text-primary mx-auto mt-20">
          <span>Education</span>
        </div>
        <div className="absolute w-full overflow-hidden top-1/2 md:top-0 right-triangle h-1/2 md:h-full
                        bg-background1">
          <div className="max-w-[90rem] h-full flex flex-col items-center justify-center md:items-end md:justify-end mx-auto">
            <CircuitBoard />
            <div className="overflow-hidden flex flex-col text-xl xxs:text-2xl sm:text-3xl w-full md:w-1/2 text-center md:text-right gap-2 md:mb-20 px-8">
              <span>Bachelors in Electronics and Communication Engineering</span>
              <span className="text-base xxs:text-xl">IOE Pulchowk Campus, Tribhuvan University</span>
              <span className="font-bold text-base xxs:text-xl">2014 - 2018</span>
            </div>
          </div>
        </div>
        <div className="absolute w-full overflow-hidden left-triangle h-1/2 md:h-full 
                         ">
          <div className="max-w-[90rem] h-full flex flex-col  items-center justify-center md:items-start md:justify-start mx-auto">
            <Matrix />
            <div className="overflow-hidden flex flex-col text-xl xxs:text-2xl sm:text-3xl w-full md:w-1/2 text-center md:text-left gap-2 mt-40 px-8">
              <span>Master of Science in Computer Science</span>
              <span className="text-base xxs:text-xl">Miami University</span>
              <span className="font-bold text-base xxs:text-xl">2022 - 2024</span>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Education;
