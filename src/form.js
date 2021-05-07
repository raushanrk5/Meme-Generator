export default function Form(props) {
  return (
    <form onSubmit={props.generateMeme}>
      <input
        className="form-control-sm"
        type="text"
        name="topText"
        placeholder="Your Top Text Goes Here.."
        value={props.details.topText}
        onChange={props.handleChange}
      />

      <input
        className="form-control-sm"
        type="text"
        name="bottomText"
        placeholder="Your Bottom Text Goes Here.."
        value={props.details.bottomText}
        onChange={props.handleChange}
      />

      <button className="btn-sm btn-info">Generate</button>
    </form>
  );
}
