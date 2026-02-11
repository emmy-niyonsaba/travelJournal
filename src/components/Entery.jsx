function Entery({imageUrl,marker, country, googleMapsUrl, title, startDate, endDate, description}) {
  return (

     <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={imageUrl} 
                    alt={title} 
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker} 
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={googleMapsUrl}>View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{startDate} - {endDate}</p>
                <p className="entry-text">{description}</p>
            </div>
            
        </article>
  )
}

export default Entery
