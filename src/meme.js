export default function Meme(props) {
  return (
    <div className="meme">
      <img className="meme-img" src={props.data.imgUrl} alt="" />
      <h2 className="top">{props.data.topText}</h2>
      <h2 className="bottom">{props.data.bottomText}</h2>
    </div>
  );
}
