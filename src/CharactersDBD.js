import BannerPerkCharacter from "./BannerPerkCharacter"
import useFetch from "./useFetch";

const BannerCDBD = ({url}) => {

    const {data: characters, isLoading, error: Error} = useFetch(url);

    return ( 
        <div className="BannerCDBD">
            {!Error && <div> {Error} </div> }
            {isLoading && <h4 className="loading">LOADING...</h4>}
            {characters && characters.map(character =>(
                
                <div key={character._id} className="characterPreview">

                    <div className="imgColumn">
                        <img src={character.icon.portrait} alt= {character.name} />
                    </div>

                    <div className="infoColumn">
                        <h3>{character.name}</h3>
                        <p>Overview: {character.overview}</p>
                        {<BannerPerkCharacter character={character} />}
                    </div>
                    
                    
                </div>

            ))}
        </div>
     );
}
 
export default BannerCDBD;