import dataLogements from '../../Datas/logements.json'
import Collapse from '../../components/Collapse';

import '../../utils/style/logement.css'


function Logement(){

// Récupération de la chaîne de requête dans l'URL
    const LogementUrl = window.location.search;

// Extraction de l'Id
    let LogementId = new URLSearchParams(LogementUrl);
    const id = LogementId.get('id');


    const data = dataLogements;
    const itemLogement = data.find(item => item.id === id);
    
    return (
        <div className="block-logement">
            <div >
                
            </div>
            <div className= "block-description">
                <div className= "block-description-title">
                    <div>
                        <h1>{itemLogement.title}</h1>
                        <p>{itemLogement.location}</p>
                    </div>
                    <div>
                        <span>{itemLogement.tags}</span>
                    </div>
                </div>
                <div className="block-name-rate">
                    <div className= "block-name">
                        <p className="block-name-text">{itemLogement.host.name}</p>
                        <img className="block-name-picture"src={itemLogement.host.picture} alt='Profil du propriétaire'></img>
                    </div>
                    <div className="block-rate">
                        <span> {itemLogement.rating}</span>
                    </div>
                </div>
            </div>
            <div className="block-collapse">

                <Collapse width="46%"
                    title = {"Description"}
                    text = {itemLogement.description} 
                />

                <Collapse width="46%"
                    title = {"Equipement"}
                    text = {
                        <ul className="block-listequipment">
                            {itemLogement.equipments.map((data, index) => (
                                <li key={index}>{data}</li>
                            ))}
                        </ul>
                    }
                />
                
            </div>
            
        </div>
        
    )
}

export default Logement;