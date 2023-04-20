import styled from 'styled-components'
import DataAbout from '../../Datas/About.json'
import IconCollapse from '../../assets/arrow_back_ios.svg'

import colors from '../../utils/style/colors'

// CSS Collapse //

// ----------------------------------------------------------------- //

const StyledBlockAbout = styled.section`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin: 31px 0px 0px 0px;
`
const StyledCollapseTitled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${colors.primary};
    border-radius: 5px;
`

const StyledTexth3 = styled.h3`
    font-size: 24px;
    font-weight: 500;
    color: ${colors.secondary};
    margin: 7px 0px 7px 18px;
    @media (max-width: 768px){
        font-size: 13px;
      } 

`

const Styledimg = styled.img`
    margin: 8px 17px 0px 0px;
    width: 1.3em;
    filter: invert(87%) sepia(99%) saturate(0%) hue-rotate(183deg) brightness(200%) contrast(97%);
    rotate: 90deg;
    cursor: pointer;
`

const StyledBackgroundText = styled.div`
    background-color: ${colors.backgroundBlockCard};
    margin: 0px 0px 31px 0px;
    border-radius: 5px;
`

const StyledText = styled.p`
    color: ${colors.primary};
    font-size: 24px;
    font-weight: 400;
    margin: 0px 18px 0px 18px;
    padding: 36px 0px 20px 0px;
    @media (max-width: 768px){
        font-size: 12px;
        line-height: 17px;
      } 

`

// ----------------------------------------------------------------- //

function Collapse(){
    return (
        <StyledBlockAbout>
            {DataAbout.map((data) => (
                <div key={data.title}>
                    <StyledCollapseTitled>
                        <StyledTexth3>{data.title}</StyledTexth3>
                        <Styledimg src={IconCollapse} alt="Icone déplit-replis" />
                    </StyledCollapseTitled>
                    <StyledBackgroundText>
                        <StyledText>{data.text}</StyledText>
                    </StyledBackgroundText>
                </div>
        ))}
        </StyledBlockAbout>
    );
}

export default Collapse;