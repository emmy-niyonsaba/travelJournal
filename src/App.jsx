import './App.css'
import Header from './components/Header'
import Entery from './components/Entery'
import {marker, spain, norway} from './assets'
import data from '/data.js'

function App() {
  return (
    <>
      <div className=''>
        <Header />
        {data.map((entry) => {
          return (
            <Entery
              key={entry.id}
              imageUrl={entry.img.src}
              country={entry.country}
              googleMapsUrl={entry.googleMapsLink}
              title={entry.title}
              startDate={entry.dates.split(" - ")[0]}
              endDate={entry.dates.split(" - ")[1]}
              description={entry.text}
              marker={marker}
            />
          )
        }
       
      )}
        </div>
    </>
  )
}

export default App
