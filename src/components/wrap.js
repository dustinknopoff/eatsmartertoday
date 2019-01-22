import React from "react"
import RHS from "../components/RHS"
import styled from "styled-components"

class Wrap extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.left}
        <RHS />
      </Wrapper>
    )
  }
}

export default Wrap

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3vmin;
  padding-top: 6vmin;

  > div {
    width: 50%;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`
