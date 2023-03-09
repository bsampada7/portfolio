import { socialLinks } from "@/constants";
import Script from "next/script";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 pb-10 pt-32 bg-gray-dark relative p-10">
      <div className="text-3xl font-bold text-primary mb-4">
        <span>Contact Me</span>
      </div>
      <div className="w-full flex-grow flex flex-col md:flex-row gap-8 items-start justify-center" >
        <div className="w-full h-full">
          <ContactForm />

        </div>
        <div>
          <div className="flex gap-2 items-center justify-center">
            <div className="text-neutral-100 text-xl font-bold">Connect with me on socials</div>
            <>
              {socialLinks.map(({ name, link, image, className }) =>
                <a key={name} target="_blank" href={link} className="p-0.5" rel="noopener noreferrer">
                  <img src={image} alt={name} className={`w-8 h-8 ${className || ''}`} ></img>
                </a>
              )
              }
            </>
          </div>
          <hr className="text-neutral-300 opacity-50 w-80 mx-auto my-4"/>
          <div className="text-neutral-100 text-center">Follow my <span className="text-primary">#100DaysOfCode</span> journey on twitter</div>
          {/* <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              Day 8 of <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a>
              <br />I used useContext and useReducer for state management for a small-scale app. I also worked on a CSS horizontal progress bar.
              <a href="https://t.co/6xhxqVoKst">pic.twitter.com/6xhxqVoKst</a>
            </p>&mdash; Sampada (@bsampada_) <a href="https://twitter.com/bsampada_/status/1632723953578917891?ref_src=twsrc%5Etfw">March 6, 2023</a>
          </blockquote> */}
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">I&#39;m publicly committing to the 100DaysOfCode Challenge starting today! Learn More and Join me! hey <a href="https://twitter.com/ka11away?ref_src=twsrc%5Etfw">@ka11away</a> <a href="https://t.co/bzrFUc5hLG">https://t.co/bzrFUc5hLG</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a></p>&mdash; Sampada (@bsampada_) <a href="https://twitter.com/bsampada_/status/1629839046817067009?ref_src=twsrc%5Etfw">February 26, 2023</a></blockquote>
          <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </div>
      </div>
      {/* <div>
        Contact me socials
      </div>
      <div>
        Contact me form
      </div>
      <div>
        email
      </div> */}
    </div>
  );
};

export default Contact;
