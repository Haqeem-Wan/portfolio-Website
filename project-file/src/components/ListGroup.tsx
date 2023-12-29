import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  /*
  const getMessage = () => {
    return items.length === 0 ? <p>No Item Foundd</p> : null;
  };
*/

const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Test Document</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
