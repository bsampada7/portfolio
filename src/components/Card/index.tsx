import Link from "next/link";
import React from "react";
import Badge, { BadgeType } from "../Badge";

const Card = ({ name, imgclass, badges, description, github, livelink, className }:
  { name: string, imgclass: string, badges: BadgeType[], description?: string, github?: string, livelink?: string, className?: string }) => {
  return (
    <div className={`card relative max-w-full w-60 xxs:w-80 h-fit bg-background2 pointer-events-auto rounded-lg flex flex-col gap-2 p-4 items-center text-center scale-100 ${className}`}>
      <div className={`media w-full pb-[80%]  ${imgclass} bg-no-repeat bg-cover bg-center rounded-lg`}>
      </div>
      <span className="text-base xs:text-lg font-bold">{name}</span>
      <div className="flex flex-wrap gap-2 justify-center">
        <>
          {badges.map((item) =>
            <Badge text={item.text} color={item.color} key={item.text} />
          )}
        </>
      </div>
      <div className="leading-4 h-8 text-text-muted text-xs xs:text-base">
        {description}
        {/* The first prototype for an interactive magazine used for company marketing */}
      </div>
      <div className="flex w-full justify-between items-center">
        {github && <Link href={github} title="Link to Github Repo" target="_blank" rel="noopener"
          className="w-10 h-10 bg-slate-200 flex items-center justify-center rounded-lg">
          <img src="/icons/github.svg" className="w-6 h-6"></img>
        </Link>}
        {livelink && <Link href={livelink} target="_blank" rel="noopener"
          className="btn bg-primary flex-grow w-auto text-text-muted py-2 px-4 rounded-lg text-center cursor-pointer hover:bg-primary-dark m-2">
          Visit site
        </Link>}
      </div>
    </div>
  );
};

export default Card;
