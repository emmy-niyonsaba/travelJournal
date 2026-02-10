

import './App.css'

import marker from './assets/marker.png'
import spain from './assets/spain.png';
import norway from './assets/norway.png';

import Header from './components/Header'
import Entery from './components/Entery'

function App() {
  return (
    <>
      <div className=''>
        <Header />
        <Entery
          imageUrl={spain}
          country="Spain"
          googleMapsUrl="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          title="Spain Trip"
          startDate="1 May, 2023"
          endDate="15 May, 2023"
          description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
          marker={marker}
        />
        <Entery
          imageUrl={norway}
          country="Norway"
          googleMapsUrl="https://www.google.com/maps/place/6216+Geiranger,+Norway/@62.0988039,7.1887519,14z/data=!3m1!4b1!4m6!3m5!1s0x4614266d0e317cc9:0xee5b40919d3f7313!8m2!3d62.1008441!4d7.2058941!16zL20vMDRrazJy?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
          title="Norway Trip"
          startDate="1 June, 2023"
          endDate="15 June, 2023"
          description="Geirangerfjord is one of Norway’s most famous fjords, known for its dramatic cliffs, deep blue water, and stunning waterfalls like the Seven Sisters. It’s a UNESCO World Heritage Site, located in western Norway, and is especially popular for boat cruises, hiking, and jaw-dropping viewpoints. Quiet, wild, and ridiculously beautiful 🌊🏔️."
          marker={marker}
        />
   
     
      </div>
    </>
  )
}

export default App
