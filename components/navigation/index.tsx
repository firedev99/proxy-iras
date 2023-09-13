import styled, { css } from "styled-components"

export default function Navigation() {
  return (
    <>
      <SidebarWrapper>
        <UpperWrapper>
          <SideElement>Home</SideElement>
          <SideElement>Courses</SideElement>
          <SideElement>Works</SideElement>
          <SideElement>Profile</SideElement>
          <SideElement>Calculate Grade</SideElement>
        </UpperWrapper>
        <BottomWrapper>
          <SideElement>User Control</SideElement>
        </BottomWrapper>
      </SidebarWrapper>
      <NavWrapper>
        <TopElement>Settings</TopElement>
      </NavWrapper>
    </>
  )
}

export const SidebarWrapper = styled.div`
  position: absolute;
  z-index: 99;
  left: 0;
  top: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: papayawhip;
`
export const NavWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;
  background-color: papayawhip;
`

export const UpperWrapper = styled.div``

export const BottomWrapper = styled.div`
  margin-top: auto;
  display: flex;
`

export const SideElement = styled.div`
  padding: 1rem;
  /* width: 8rem; */
  height: 4rem;
  margin: 1rem;
  background: pink;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
`
export const TopElement = styled.div`
  padding: 1rem;
  /* width: 8rem; */
  height: 4rem;
  margin: 1rem;
  background: pink;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
`
