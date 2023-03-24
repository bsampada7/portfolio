import useScrollData from "@/utils/hooks/useScrollData";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

const messages = [
  "I am enthusiastic about interactive 3D in web",
  "Currently a student studying MS in CS, I am looking for a summer internship",
  "I have worked professionally with the following techonologies in the past",
  "React.js, Three.js, TypeScript and many more",
  "Do you want to connect with me to know more about me?",
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
  const [positionY, setpositionY] = useState(-1 * height);
  const [showChat, setshowChat] = useState(-1);
  const [showBubbles, setshowBubbles] = useState(true);
  const [userMessages, setuserMessages] = useState<{ msg: string, response: string }[]>([]);
  const [hasGivenEmail, sethasGivenEmail] = useState(false);

  const portalRef = useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement)

  const [scrollPosition1, _] = useScrollData(0.5)
  const [scrollPosition2, delta2] = useScrollData(1)

  useEffect(() => {
    // setpositionY(THREE.MathUtils.damp(positionY, 2.5 * height * scrollPosition2 + 0.5 * scrollPosition2 - 0.5, 4, delta2))
    setpositionY(THREE.MathUtils.lerp(-1 * height, 0.25 * height, scrollPosition2))
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
      let up = chatbox.children[showChat]?.offsetTop + height + 16
      chatbox.style.top = "calc(100% - " + up + "px)"
      func()
    }
    if (showChat >= messages.length - 1) {
      clearTimeout(timeout)
      setTimeout(() => {
        setshowBubbles(false)
      }, 1000);
    }
  }, [showChat]);

  const func = () => {
    timeout = setTimeout(() => {
      setTimeout(() => {
        setshowChat((showChat) => (showChat >= messages.length - 1 ? showChat : showChat + 1))
      }, 500);
    }, 1000);
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
    let msg = document.getElementById('user-msg-input').value
    if (msg) {
      let splitmsg = msg.split(' ');
      const hasEmail = splitmsg.some((item: string) => item.match(mailformat))
      setuserMessages(userMessages => [...userMessages, {
        msg: msg,
        response: hasGivenEmail ? getBackMessage3 : (hasEmail ? getBackMessage2 : getBackMessage1)
      }
      ])
      setshowChat(showChat => showChat + 1)
      if (hasEmail) sethasGivenEmail(true)
      setshowChat(showChat => showChat + 1)
    }
    document.getElementById('user-msg-input').value = ''
    return false
  }

  //normal x 0 z -7.9
  //4k 

  return (
    <Html
      transform
      position={[0, positionY, -7.9]}
      portal={portalRef || undefined}
      occlude='blending'
      wrapperClass={"pointer-none-children-strict about-wrapper"}>
      <div className="skills w-[100vw] h-[100vh] max-w-[78rem] relative pointer-events-none" ref={skillsRef} id="About">
        <div className="pointer-events-none">
          <div className="absolute w-full h-full">
            <div className="text-4xl font-bold mb-4 mt-24 ml-10 text-primary">
              <span>About</span>
            </div>
            <div className="relative rounded-md border-0 ml-10 w-5/12 h-1/2 overflow-hidden bg-transparent text-lg">
              <div className={"absolute bottom-4 right-4 h-12 pt-4 chat-bubble-typing bg-transparent p-4 py-4 border-2 border-transparent inline-block " + (showBubbles ? "show" : "")}>
                <div className="typing items-center flex h-4 gap-1.5">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="dot bg-text-muted rounded-half w-1.5 h-1.5 align-middle inline-block"></div>
                  ))}
                </div>
              </div>
              <div className={"chatbox-container" + (showBubbles ? "" : " expand")}>
                <div id="chatbox" className={`absolute flex flex-col py-8 gap-4 items-end h-full top-[100%] pointer-events-auto `}>
                  {messages.map((message, index) => (
                    <div key={index} className={"chat-bubble bg-transparent p-4 py-4 border-2 border-transparent inline-block "
                      + (showChat >= index ? "show " : "")
                    }>
                      {message}
                    </div>
                  ))}
                  {userMessages.map((message, index) => (
                    <>
                      <div key={index} className={"chat-bubble user show bg-transparent p-4 py-2 border-2 border-transparent inline-block "
                      }>
                        {message.msg}
                      </div>
                      <div key={index + "cb"} className={"chat-bubble show bg-transparent p-4 py-2 border-2 border-transparent inline-block "
                      }>
                        {message.response}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="ml-10 mt-2 w-5/12 relative">
              <form onSubmit={onMessageSend}>
                <input id="user-msg-input" name="user-msg-input" type={'text'} placeholder="Type your message here" className="msg-input w-full p-3.5 pr-12 text-text-muted rounded pointer-events-strict 
                            outline-0 focus-visible:border-primary border-transparent border-0 text-lg "></input>
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
