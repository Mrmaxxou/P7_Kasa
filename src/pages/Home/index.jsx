import styled from 'styled-components'
import Background from '../../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg'
import colors from '../../utils/style/colors'
import Card from '../../components/Card'



// CSS Footer //
// ----------------------------------------------------------------- //

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 70px 100px 30px 100px;
`

const StyledCardh1 = styled.div`
position: relative;  
background: url(${Background}) center no-repeat;
background-size: cover;
border-radius: 30px;
`

const StyledBackgroundImg = styled.div`
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.3);
height: 100%;
width: 100%;
border-radius: 30px;
`
const StyledTexth1 = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin: 0;
  padding: 70px 260px 70px 260px;
  color: ${colors.secondary};
`
// ----------------------------------------------------------------- //

function Home(){
  return (
  <StyledHome>
    <StyledCardh1>
      <StyledBackgroundImg></StyledBackgroundImg>
      <StyledTexth1>Chez vous, partout et ailleurs</StyledTexth1>
    </StyledCardh1>
    <div>
      <Card/>
    </div>

  </StyledHome>)
}

export default Home