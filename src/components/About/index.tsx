import useScrollData from "@/utils/hooks/useScrollData";
import useWindowSize from "@/utils/hooks/useWindowResize";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Fragment, useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import emailjs from '@emailjs/browser';

const messages = [
  "I am enthusiastic about interactive 3D in web",
  "Currently a student studying MS in CS, I am looking for a summer internship",
  "I have worked professionally with React.js, Three.js, TypeScript and many more",
  "Do you want to connect to know more about me?",
]

const getBackMessage1 = "Thank you for the message! If you want me to contact you back, please enter your email."
const getBackMessage2 = "I got your email. I'll contact you back shortly."
const getBackMessage3 = "Thank you for the message. Your message has been sent"
let started = false
let timeout: NodeJS.Timeout
const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function About() {
  const { height } = useThree((state) => state.viewport)
  const { gl } = useThree();
  const skillsRef = useRef<any>(null)
  const [positionY, setpositionY] = useState(-1.2 * height);
  const [showChat, setshowChat] = useState(-1);
  const [showBubbles, setshowBubbles] = useState(true);
  const [userMessages, setuserMessages] = useState<{ msg: string, response: string }[]>([]);
  const [hasGivenEmail, sethasGivenEmail] = useState(false);
  const size = useWindowSize();

  const portalRef = useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement)

  const [scrollPosition1, _] = useScrollData(0.2)
  const [scrollPosition2, delta2] = useScrollData(1)

  useEffect(() => {
    // setpositionY(THREE.MathUtils.damp(positionY, 2.5 * height * scrollPosition2 + 0.5 * scrollPosition2 - 0.5, 4, delta2))
    setpositionY(THREE.MathUtils.lerp(-1.2 * height, 0.25 * height, scrollPosition2 * 1.5))
    if (skillsRef.current) {
      skillsRef.current.classList.toggle('show', scrollPosition1)
      if (!started) startChat()

    }
  }, [scrollPosition1, scrollPosition2]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (showChat < 0) return
    let chatbox = document.getElementById('chatbox')
    if (chatbox) {
      let height = chatbox.children[showChat]?.clientHeight
      let el = chatbox.children[showChat] as any
      let up = (el.offsetTop || 0) + height + 16
      chatbox.style.top = "calc(100% - " + up + "px)"
      func()
    }
    if (showChat >= (messages.length + userMessages.length - 1)) {
      clearTimeout(timeout)
      setTimeout(() => {
        setshowBubbles(false)
      }, 1000);
    }
  }, [showChat, userMessages]);

  const func = () => {
    timeout = setTimeout(() => {
      setTimeout(() => {
        setshowChat((showChat) => (showChat >= messages.length - 1 ? showChat : showChat + 1))
      }, 500);
    }, 2000);
  }

  const startChat = () => {
    started = true
    let chatbox = document.getElementById('chatbox')
    if (chatbox) {
      chatbox.style.top = "100%"
    }
    clearTimeout(timeout)
    setshowBubbles(true)
    setshowChat(-1)
    func()
  }

  const onMessageSend = (e: any) => {
    e.preventDefault();
    const el = document.getElementById('user-msg-input') as HTMLInputElement
    if (!el) return;
    const msg = el.value
    if (msg) {
      let splitmsg = msg.split(' ');
      const hasEmail = splitmsg.some((item: string) => item.match(mailformat))
      setuserMessages(userMessages => [...userMessages, {
        msg: msg,
        response: hasGivenEmail ? getBackMessage3 : (hasEmail ? getBackMessage2 : getBackMessage1)
      }
      ])
      setTimeout(() => {
        setshowChat(showChat => showChat + 1)
      }, 500);
      if (hasEmail) sethasGivenEmail(true)
    }
    el.value = ''
    return false
  }

  const setSize = () => {
    let width = size.width ?? window.innerWidth
    let height = size.height ?? window.innerHeight
    if (skillsRef.current && (window.innerWidth > 1920 || window.innerWidth < 1000)) {
      skillsRef.current.style.width = `${width / 1.21}px`
      skillsRef.current.style.height = `${height / 1.21}px`
    }

  }

  useEffect(() => {
    setSize();
  }, [size]);

  useEffect(() => {
    setTimeout(() => {
      setSize();
    }, 500);
  }, []);

  useEffect(() => {
    if (userMessages.length) {
      sendEmail()
    }
  }, [userMessages]);


  const sendEmail = () => {

    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const user_id = process.env.NEXT_PUBLIC_USER_ID

    const template_params = {
      'name': 'chat',
      'email': hasGivenEmail ? 'yes' : 'no',
      'message': JSON.stringify(userMessages.map(item => item.msg)),
    }
    if (service_id && template_id && user_id) {
      emailjs.send(service_id, template_id, template_params, user_id)
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  }

  return (
    <Html
      transform
      position={[0, positionY, -7.9]}
      portal={portalRef || undefined}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict about-wrapper"}>
      <div className="skills w-[100vw] h-[100vh] max-w-[65rem] :max-h-[40rem] lg:max-w-[78rem] lg:max-h-[60rem] relative pointer-events-none" ref={skillsRef} id="About">
        <div className="pointer-events-none">
          <div className="absolute w-full h-full flex flex-col">
            <div className="text-4xl font-bold mb-4 mt-24 ml-10 text-primary text-heading">
              <span>About</span>
            </div>
            <div className="relative rounded-md border-0 md:ml-10 w-full h-[70%] max-h-[40rem] md:w-6/12 lg:w-5/12 md:h-1/2 overflow-hidden bg-transparent text-lg">
              <div className={"absolute bottom-4 right-4 h-12 pt-4 chat-bubble-typing bg-transparent p-2 px-4 border-2 border-transparent inline-block " + (showBubbles ? "show" : "")}>
                <div className="typing items-center flex h-4 gap-1.5">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="dot bg-text-muted rounded-half w-1.5 h-1.5 align-middle inline-block"></div>
                  ))}
                </div>
              </div>
              <div className={"chatbox-container" + (showBubbles ? "" : " expand")}>
                <div id="chatbox" className={`absolute flex flex-col py-8 gap-4 items-end h-full top-[100%] pointer-events-auto text-sm`}>
                  {messages.map((message, index) => (
                    <div key={index} className={"chat-bubble bg-transparent p-2 px-4 border-2 border-transparent inline-block "
                      + (showChat >= index ? "show " : "")
                    }>
                      {message}
                    </div>
                  ))}
                  {userMessages.map((message, index) => (
                    <div key={index} className="flex flex-col gap-4 items-end">
                      <div className={"chat-bubble user show bg-transparent p-2 px-4 border-2 border-transparent inline-block "
                      }>
                        {message.msg}
                      </div>
                      <div className={"chat-bubble show bg-transparent p-2 px-4 border-2 border-transparent inline-block "
                      }>
                        {message.response}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:ml-10 mt-2 w-full md:w-6/12 relative">
              <form onSubmit={onMessageSend}>
                <input id="user-msg-input" name="user-msg-input" type={'text'} placeholder="Type your message here" className="msg-input w-full p-3.5 pr-12 text-text-muted text-sm rounded pointer-events-strict 
                            outline-0 focus-visible:border-primary border-transparent border-0"></input>
                <button className="absolute right-1.5 p-3 bg-primary mt-1.5 rounded-half pointer-events-strict " type="submit">
                  <img src="/icons/send.svg" className="w-4 h-4"></img>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Html >
  )
}

export default About;
