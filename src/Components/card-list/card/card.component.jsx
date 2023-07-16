import './card.styles.css';

const Card = (props) => {
  const { className, card } = props;
  const { name, email, id } = card;

  return (
    <div className={className} key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
