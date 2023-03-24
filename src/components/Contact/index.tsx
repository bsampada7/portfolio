import { socialLinks } from "@/constants";
import Script from "next/script";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

let interval: NodeJS.Timer

const Contact = () => {

  useEffect(() => {
    interval = setInterval(() => {
      const contactContents = document.getElementById('contact-contents')
      if (contactContents) {
        clearInterval(interval)
        document.getElementById('Contact')?.appendChild(contactContents)
      }
    }, 2000);
    return (() => {
      clearInterval(interval)
    })
  }, []);

  return (
    <div id="contact-contents" className="flex flex-col w-full h-full gap-4 pb-10 pt-30 max-w-[90rem] relative p-10">
      <div className="text-3xl font-bold text-primary mx-auto my-10 text-center">
        <span>Contact Me</span>
      </div>
      <div className="w-full flex-grow flex flex-col md:flex-row gap-16 items-center justify-center" >
        <ContactForm />
        <div>
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
            <div className="text-text-muted text-xl font-bold">Connect with me on socials</div>
            <div className="flex gap-2 items-center justify-center">
              {socialLinks.map(({ name, link, image, className }) =>
                <a key={name} target="_blank" href={link} className="p-0.5" rel="noopener noreferrer">
                  <img src={image} alt={name} className={`w-8 h-8 ${className || ''}`} ></img>
                </a>
              )
              }
            </div>
          </div>
          <hr className="text-text-muted opacity-50 w-80 mx-auto my-4" />
          <div className="text-text-muted text-center">Follow my <span className="text-primary">#100DaysOfCode</span> journey on
            <a target="_blank" href={socialLinks[1].link} className="p-1 text-[#1d9bf0]" rel="noopener noreferrer">
              twitter
            </a>
          </div>
          <div className="hidden md:block ">
            <blockquote className="twitter-tweet"><p lang="en" dir="ltr">I&#39;m publicly committing to the 100DaysOfCode Challenge starting today! Learn More and Join me! hey <a href="https://twitter.com/ka11away?ref_src=twsrc%5Etfw">@ka11away</a> <a href="https://t.co/bzrFUc5hLG">https://t.co/bzrFUc5hLG</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a></p>&mdash; Sampada (@bsampada_) <a href="https://twitter.com/bsampada_/status/1629839046817067009?ref_src=twsrc%5Etfw">February 26, 2023</a></blockquote>
          </div>
          <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
