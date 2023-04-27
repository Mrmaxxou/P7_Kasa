import React, {useState, useEffect} from 'react'
import itemLogement from '../../Datas/logements.json'

import  '../../utils/style/carousel.css'
import IconCarousel from '../../assets/arrow_back_ios.svg'




const Carousel = ({logementId}) => {
        const [pictures, setImages] = useState([]);
        const [index, setIndex] = useState(0);

        useEffect(() => {
            const logement = itemLogement.find(item => item.id === logementId);

            setImages(logement.pictures);
            console.log("Logement:", logement);
            console.log("Pictures:", logement.pictures);
        }, [logementId]);

        
        
        const length = pictures.length;
    
        const handlePrevious = () => {
            const newIndex = index -1;
            setIndex(newIndex < 0 ? length - 1 : newIndex);
            console.log('move class added');
            //console.log("Previous clicked");
            //console.log("newIndex", newIndex);
            //console.log("length", length);
        };
    
        const handleNext = () => {
            const newIndex = index + 1;
            setIndex(newIndex >= length ? 0 : newIndex);
            console.log('move class added');
            //console.log("Next clicked");
            //console.log("newIndex", newIndex);
            //console.log("length", length);
        };
    


    return(
        <div className="block-carousel">
            
            <img src={IconCarousel} className="block-Previous" alt="Icone Previous" onClick={handlePrevious} />
            <img src={IconCarousel} className="block-Next" alt="Icone Next" onClick={handleNext} />
            <div className="block-carousel-container">
            {pictures.map((data, index) => (
                <img className="block-img" alt="Représentation du logement" src={data} key={`image-${index}`} />
            ))}
            </div>
        </div>
    )
}


export default Carousel;