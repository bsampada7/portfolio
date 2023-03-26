import { socialLinks } from "@/constants";
import ContactForm from "./ContactForm";

const Contact = () => {

  return (
    <div id="contact-contents" className="flex flex-col items-center justify-center w-full h-full gap-4 pb-10 pt-30 max-w-[90rem] relative px-2 py-8 xxs:p-10">
      <div className="title text-2xl xs:text-3xl font-bold text-primary mx-auto my-10 text-center">
        <span>Contact Me</span>
      </div>
      <div className="contact-flex-wrapper w-full my-auto flex-grow flex flex-col md:flex-row gap-4 xl:gap-16 items-center justify-center" >
        <ContactForm />
        <div className="socials-wrapper" id="socials-wrapper">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="text-text-muted text-sm xs:text-xl font-bold">Connect with me on socials</div>
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
          <div className="text-text-muted text-center text-sm xs:text-base">Follow my <span className="text-primary">#100DaysOfCode</span> journey on
            <a target="_blank" href={socialLinks[1].link} className="p-1 text-[#1d9bf0]" rel="noopener noreferrer">
              twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
