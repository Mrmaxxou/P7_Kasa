import {BannerAbout }from '../../components/Banner'
import Collapse from '../../components/Collapse'

import styled from 'styled-components'

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
 align-items: center;
  margin: 70px 100px 30px 100px;
  @media (max-width: 768px){
    margin: 16px 20px 22px 20px;
  } 

`
function About(){
    return (
        <StyledAbout>
            <BannerAbout/>
            <Collapse/>
        </StyledAbout>
    )

}

export default About