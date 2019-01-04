import React from 'react'
import styled, { css } from 'styled-components'

export default class Centerfold extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        `Diabetes`,
        `Weight Loss`,
        `Food Sensitivity`,
        `Healthy Eating`,
        `Low Carb`,
        `Lyme Disease`,
      ],
      index: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ index: e })
  }

  render() {
    let _this = this
    return (
      <Wrapper>
        <LBT>
          {_this.state.options.map((opt, index) => {
            if (index === _this.state.index) {
              return (
                <Button
                  onClick={() => this.handleClick(index)}
                  key={index}
                  curr
                >
                  {opt}
                </Button>
              )
            } else {
              return (
                <Button onClick={() => this.handleClick(index)} key={index}>
                  {opt}
                </Button>
              )
            }
          })}
        </LBT>
        <Info>lala</Info>
      </Wrapper>
    )
  }
}

export const Button = styled.button`
  background: transparent; /* Green */
  border: none;
  color: white;
  text-decoration: none;
  font-size: 2vmin;
  text-align: left;
  padding: 5px 20px 5px 20px;

  ${props =>
    props.curr &&
    css`
      background: rgba(255, 255, 255, 0.1);
    `};
`

export const LBT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Info = styled.p`
  background: rgba(255, 255, 255, 0.1);
  min-width: 30vw;
  min-height: 20vh;
  padding: 10px;
  margin: 0;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
