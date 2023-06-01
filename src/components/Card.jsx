function Card(props) {
  return (
    <div className="card">
      <div id="card-links">
        <a href={props.demoLink} target="blank">
          <i class="fa-sharp fa-solid fa-link fa-2x"></i>
        </a>
        <a href={props.gitLink} target="blank">
          <i class="fa-brands fa-github fa-2x"></i>
        </a>
      </div>
      <img className="card-image" src={props.image} alt={props.alt} />
      <p>{props.body}</p>
    </div>
  );
}

export default Card;
