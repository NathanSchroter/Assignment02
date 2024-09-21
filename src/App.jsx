import "./index.css"
import ArtistDetails from "./components/ArtistDetails";
import { artists } from './best-selling-music-artists';

function App() {

  return (
    <div className="app">
      <h1>Best-Selling Music Artist </h1>
      {
        artists.map((artist) =>(
          
          <ArtistDetails
          name ={artist.name}
          photo_url = {artist.photo_url}
          country = {artist.country}
          years_active = {artist.years_active}


          />
      )
        )
      }
    </div>
  );
}

export default App;
