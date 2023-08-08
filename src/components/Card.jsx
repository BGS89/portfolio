import { useState, useEffect } from "react";

function Card(props) {
  const [imageFilter, setImageFilter] = useState("none");

  useEffect(() => {
    if (props.theme === "dark") {
      console.log("dark mode set");
      setImageFilter("invert(1)");
    } else {
      setImageFilter("none");
    }
  }, [props.theme]);

  return (
    <div className="card">
      <div id="card-links">
        <a href={props.demoLink} target="_blank" rel="noopener noreferrer">
          <i className="fa-sharp fa-solid fa-link fa-2x"></i>
        </a>
        <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
      </div>
      <img
        style={{ filter: imageFilter, transition: "filter 0.75s" }}
        className="card-image"
        src={props.image}
        alt={props.alt}
      />
      <p>{props.body}</p>
    </div>
  );
}

export default Card;
