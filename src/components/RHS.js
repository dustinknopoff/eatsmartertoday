import React from 'react'
import styled from 'styled-components'
import Obfuscate from 'react-obfuscate'

const RHS = () => {
  return (
    <div>
      <h1>
        Life. <br />
        From a Dietitian's Perspective
      </h1>
      <Obfuscate email="eatsmartertoday@gmail.com">
        <Card>
          <img
            src=""
            alt="profile of jill knopoff"
            style={{ borderRadius: '50%' }}
          />
          <div>
            <h5>Jill Knopoff, RD, MS</h5>
            <p>
              Jill is a registered dietitian with over 20 years experience
              working with people of all ages combating many ailments
            </p>
          </div>
        </Card>
      </Obfuscate>
    </div>
  )
}

export default RHS

export const Card = styled.div`
  background: #f6f6f6;
  border-radius: 4px;
  box-shadow: 0px 2px 4px black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
`
