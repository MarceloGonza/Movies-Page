function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">
          {props.title} ({props.year})
        </h2>
        <a href={props.imdbLink} target="_blank">
          View on IMDB
        </a>
      </div>
    </div>
  );
}

export default Card;
