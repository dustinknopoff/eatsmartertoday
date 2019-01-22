import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import Centerfold from "../components/centerfold"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`nutrition`, `lyme`, `keto`, `food sensitivities`]}
    />
    <FullFlex name="home">
      <Quote>
        “A Dietitian’s duty is to find where lifestyle and health intersect.”
      </Quote>
    </FullFlex>
    <Full>
      <QuoteWrapper>
        <SmallQuote>
          Nutrition is the unsung hero of medicine. Where medication and
          surgeries fail, Eating right can change your life.
        </SmallQuote>
      </QuoteWrapper>
    </Full>
    <FullFlex name="services">
      <Wrapper>
        <H4>Areas where changes to eating can help:</H4>
        <Centerfold name="faq" />
      </Wrapper>
    </FullFlex>
  </Layout>
)

export default IndexPage

export const FullFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

export const Full = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  margin-top: 25vh;
  width: 100vw;
`

export const Quote = styled.blockquote`
  color: black;
  font-size: 6vmin;
  width: 50%;
`

export const QuoteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100vw;
`

export const SmallQuote = styled.blockquote`
  color: black;
  font-size: 2.5vh;
  width: 25%;
  height: 8vh;
  font-style: italic;
  padding-right: 10px;
  border-right: solid 3px black;

  @media only screen and (max-width: 768px) {
    width: 40%;
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const H4 = styled.h4`
  font-size: 4vw;
  color: #efefef;
`
