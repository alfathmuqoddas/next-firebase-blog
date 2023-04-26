export default function CardView({ title, desc, thumbnail }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail} alt="thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
