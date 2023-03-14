import Link from "next/link";
import PrimaryButton from "../PrimaryButton";

const Introduction = () => {
  return (
    <div className="pointer-events-none">
      <div className="greeting text-primary absolute top-20 left-10 ">
        <div className="text-9xl font-bold ">
          <span>H</span>
          <span>I</span>
          <span className="flicker">!</span>
        </div>
        <div className="text-5xl mt-4">I am Sampada Bhujel</div>
        <div className="text-3xl mt-4">A full stack developer with over<br /> <strong className="text-secondary">3 years</strong> experience</div>

      </div>

      <div className="absolute left-10 top-96 z-10">
        <Link href={"#Contact"} className="pointer-events-auto">
          <PrimaryButton text={"Get in touch"} className={"mt-8 ml-0 pointer-events-auto cursor-pointer"} />
        </Link>

      </div>
    </div>
  );
}

export default Introduction;
