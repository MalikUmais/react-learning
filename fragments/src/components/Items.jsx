import Item from "./Item";
const Items = ({ iTem }) => {
  return (
    <ul className="list-group">
      {iTem.map((itEm) => (
        <Item key={itEm} items={itEm} />
      ))}
    </ul>
  );
};
export default Items;
