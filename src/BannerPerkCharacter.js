import useFetch from "./useFetch";

const BannerPDBD = ({character}) => {

    const perksUrl = "https://dbd-api.herokuapp.com/perks";

    const {data: perksData, isLoading, Error} = useFetch(perksUrl);

    return ( 
        <div className="BannerPDBD">
            <h4 className="perkTitle">Perks:</h4>
            {Error && <div> {Error} </div> }
            {isLoading && <h4 className="loading">LOADING...</h4>}
            {perksData && perksData
            .filter(perk => (perk.name_tag === character.name_tag ) && perk.lang === "en" )
            .map((filteredPerk) =>(

                <img className="PerkIcon" key={filteredPerk._id} src={filteredPerk.icon} alt={filteredPerk.perk_name} />
                
            ))}
        </div>
     );
}
 
export default BannerPDBD;