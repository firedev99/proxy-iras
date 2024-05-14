import Link from "next/link"
import { TextWrapper } from "./styles"

export default function LaunchingSoon() {
  return (
    <TextWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h3>
        This app fetches data from iub&apos;s existing system. Seems like they
        have turned off their main server which is IRAS Version 2. They might be
        facing some internal issues or smth else, just wait for some moments it
        will get fixed automatically and also thanks to everyone, this app was
        used by 1200+ students in just 2 days 🤧 If you have anything to ask,
        reach me out here{" "}
        <Link
          href="https://www.instagram.com/tripyy_land"
          target="blank"
          rel="noreferrer"
        >
          @firedev99
        </Link>
      </h3>

      {/* <h3>launching🚀soon🤞🏼</h3> */}
    </TextWrapper>
  )
}
