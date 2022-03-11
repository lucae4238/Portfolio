import React from 'react'
import * as Styled from "./styles"

const Header = () => {
  return (
    <Styled.Container>
      <div>logo</div>
      <Styled.CenterList>
        <Styled.ListItem>home</Styled.ListItem>
        <Styled.ListItem>how it works</Styled.ListItem>
        <Styled.ListItem>faqs</Styled.ListItem>
        <Styled.ListItem>pricing</Styled.ListItem>
      </Styled.CenterList>
      <Styled.Button>login</Styled.Button>
    </Styled.Container>
  )
}

export default Header
