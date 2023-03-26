import Script from "next/script";
import React, { useEffect } from "react";

let interval: NodeJS.Timer

const Tweet = () => {

  useEffect(() => {
    interval = setInterval(() => {
      const tweetEl = document.getElementById('tweet')
      const wrapper = document.getElementById('socials-wrapper')
      if (wrapper && tweetEl) {
        clearInterval(interval)
        wrapper.appendChild(tweetEl)
      }
    }, 2000);
    return (() => {
      clearInterval(interval)
    })
  }, []);

  return (
    <div id="tweet">
      <div className="hidden md:block ">
        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">I&#39;m publicly committing to the 100DaysOfCode Challenge starting today! Learn More and Join me! hey <a href="https://twitter.com/ka11away?ref_src=twsrc%5Etfw">@ka11away</a> <a href="https://t.co/bzrFUc5hLG">https://t.co/bzrFUc5hLG</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a></p>&mdash; Sampada (@bsampada_) <a href="https://twitter.com/bsampada_/status/1629839046817067009?ref_src=twsrc%5Etfw">February 26, 2023</a></blockquote>
      </div>
      <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
    </div>
  );
};

export default Tweet;
