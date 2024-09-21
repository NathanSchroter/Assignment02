function ArtistDetails (artist) {
    return(
        <div className="mainContainer">
            <img src={artist.photo_url}/> 
            <div className="text">
                <h2>{artist.name}</h2>
                <p>Country:{artist.country}</p>
                <p>Years active{artist.years_active}</p>

             </div>
        
        </div>
    )
}

export default ArtistDetails;
