import Link from "next/link"
import React from "react"
import { FooterWrapper, WalingDogWrapper } from "./styles"
import styled from "styled-components"
import dynamic from "next/dynamic"

const WalkingDog = dynamic(() => import("../lottie/WalkingDog"))

export default function Footer() {
  return (
    <FooterWrapper>
      <WalingDogWrapper>
        <WalkingDog />
      </WalingDogWrapper>
      Made by{" "}
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
