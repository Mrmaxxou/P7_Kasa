import styled from 'styled-components'
import DataAbout from '../../Datas/About.json'
import IconCollapse from '../../assets/arrow_back_ios.svg'

// CSS Collapse //

// ----------------------------------------------------------------- //

const StyledBlockAbout = styled.section`
display: flex;
flex-direction: column;
width: 70%;

`

const StyledCollapseTitled = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin : 0px 18px 0px 18px;

`

// ----------------------------------------------------------------- //

function Collapse(){
    return (
        <StyledBlockAbout>
            {DataAbout.map((data) => (
                <div key={data.title}>
                    <StyledCollapseTitled>
                        <h3>{data.title}</h3>
                        <img src={IconCollapse} alt="Icone déplit-replis" />
                    </StyledCollapseTitled>
                    <div>
                        <p>{data.text}</p>
                    </div>
                </div>
        ))}
        </StyledBlockAbout>
    );
}

export default Collapse;