import Link from "next/link"
import { FooterWrapper } from "./styles"

export default function Footer() {
  return (
    <FooterWrapper>
      made by{" "}
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/tripyy_land/"
      >
        @firedev99
      </Link>
    </FooterWrapper>
  )
}
