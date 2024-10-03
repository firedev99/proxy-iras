import Link from "next/link"
import { TextWrapper } from "./styles"

export default function LaunchingSoon() {
  return (
    <TextWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h3>
        IUB is now using a new hashing algorithm for iras. Finally i guess they
        hired someone to fill the blanks, good for em. It&apos;s been a good
        journey from SUMMER 2023 to AUTUMN 2024, around 2000+ active students
        have used this platform and i think most of em were benefited from PROXY
        IRAS.{" "}
        <span className="warning_bitches">
          If I ever feel bored I&apos;ll try to decode their hashing algorithm
          to make PROXY IRAS alive again.
        </span>{" "}
        till then peace out 🤞🏼🏃🏼‍♂️
      </h3>
      <h5 className="notice">
        I&apos;ll soon be founding a tech startup but idk when 🥹 So, looking for
        smart peoples to join me. Also if you have any idea for a startup we can
        have a dicuss on that as well. CS/Non-CS doesn&apos;t matters, you just
        have to be smart, good with communication, a fast learner, interested to
        learn and explore new stuffs. You can reach out to me over here,{" "}
        <Link
          href="https://www.instagram.com/tripyy_land"
          target="blank"
          rel="noreferrer"
        >
          @firedev99
        </Link>
      </h5>
      {/* <h3>
        Coming back soon 🤞🏼 Thanks to everyone, this app was used by 1200+
        students in just 2 days 🤧 If you have anything to ask, reach me out
        here{" "}
        <Link
          href="https://www.instagram.com/tripyy_land"
          target="blank"
          rel="noreferrer"
        >
          @firedev99
        </Link>
      </h3> */}

      {/* <h3>launching🚀soon🤞🏼</h3> */}
    </TextWrapper>
  )
}
