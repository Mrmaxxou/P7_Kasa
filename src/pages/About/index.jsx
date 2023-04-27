import Collapse from '../../components/Collapse'
import Banner from '../../components/Banner'

import dataAbout from '../../Datas/About.json'

import styled from 'styled-components'
import '../../utils/style/banner.css'

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
 align-items: center;
  margin: 70px 100px 30px 100px;
  @media (max-width: 768px){
    margin: 16px 20px 140px 20px;
  } 
`



function About(){
    return (
        <StyledAbout>
            <Banner bannerClass="container-banner-about"/>
            {dataAbout.map((data) => (
            <Collapse width={"80%"}
              key={data.title}
              title={data.title}
              text= {data.text}
            />
            ))}
        </StyledAbout>
    )

}

export default About