import React from "react";
import { Link } from "react-router-dom";

export const GeneralCard = ({ img, title, link }) => {

  /* Para la lógica de gifs aleatorios
    Para que funcione solo pasar en la función takeLoadError 
    el valor del resultado de randomGif
  */

  const gifs = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjVhMTAzNjlhNTk4ZTVjNGVkOTI3NWI5ZjQ2NDM3ZWMxMTliNTBjNCZjdD1n/obnNO8h7UcLMA/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWM3ZmRlMjdkN2UyZjljMDJmOGM5NzYyYjMxYWJhMjk0OTIxZGMyZSZjdD1n/EMJB7ewmSDeDMhJkyo/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTUwYzJmNzU2MmQ5N2U0OWY4N2RkYzg4NDlhMjZiNzY1ODkxZDI1ZSZjdD1n/vt4gALQsxCDmM/giphy.gif",
    "https://media3.giphy.com/media/3NFMoy45AFQMIVdokb/200w.webp?cid=ecf05e47dstq4mh0muk0i2rr6uscgb8kx6fyyrbov8wvuexj&rid=200w.webp&ct=g",
    "https://media1.giphy.com/media/xT9DPGg8VG49Kzmvza/100.webp?cid=ecf05e47dstq4mh0muk0i2rr6uscgb8kx6fyyrbov8wvuexj&rid=100.webp&ct=g",
    "https://media4.giphy.com/media/3ohuPrhvXgjR8DCJhK/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZjMGMyNzZlNjUwMTY4N2E4OTZhODIxNjk1ZTliYzJmMzI2OGFiZiZjdD1n/oeGgcmHVHLVCg/giphy.gif",
  ];

  const randomNumber = Math.floor(Math.random() * gifs.length);

  const randomGif = gifs[randomNumber];

  const takeLoadError = (e) => {
    e.target.src = "https://i.pinimg.com/originals/e8/63/92/e863927635dc1c5aba5663e8dd33efa0.jpg";
  };

  return (
    <div id="general-card" className="card">
      <img
        src={img}
        className="card-img-top"
        onError={takeLoadError}
        alt="..."
      />
      <div className="card-body">
        <hr id="line" />
        <hr id="line" />
        <h5 className="card-title">{title}</h5>
        <Link to={link} className="btn btn-primary">
          More details
        </Link>
      </div>
    </div>
  );
};











const gifs = [
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjVhMTAzNjlhNTk4ZTVjNGVkOTI3NWI5ZjQ2NDM3ZWMxMTliNTBjNCZjdD1n/obnNO8h7UcLMA/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWM3ZmRlMjdkN2UyZjljMDJmOGM5NzYyYjMxYWJhMjk0OTIxZGMyZSZjdD1n/EMJB7ewmSDeDMhJkyo/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTUwYzJmNzU2MmQ5N2U0OWY4N2RkYzg4NDlhMjZiNzY1ODkxZDI1ZSZjdD1n/vt4gALQsxCDmM/giphy.gif",
  "https://media3.giphy.com/media/3NFMoy45AFQMIVdokb/200w.webp?cid=ecf05e47dstq4mh0muk0i2rr6uscgb8kx6fyyrbov8wvuexj&rid=200w.webp&ct=g",
  "https://media1.giphy.com/media/xT9DPGg8VG49Kzmvza/100.webp?cid=ecf05e47dstq4mh0muk0i2rr6uscgb8kx6fyyrbov8wvuexj&rid=100.webp&ct=g",
  "https://media4.giphy.com/media/3ohuPrhvXgjR8DCJhK/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZjMGMyNzZlNjUwMTY4N2E4OTZhODIxNjk1ZTliYzJmMzI2OGFiZiZjdD1n/oeGgcmHVHLVCg/giphy.gif",
];

const randomNumber = Math.floor(Math.random() * gifs.length);

const randomGif = gifs[randomNumber];

const takeLoadError = (e) => {
  e.target.src = randomGif;
};