import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'
import BannerAbout from '../../assets/banners-propos.jpg'

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
            <Banner backgroundImg={BannerAbout}  height={"223px"}/>
            <Collapse/>
        </StyledAbout>
    )

}

export default About