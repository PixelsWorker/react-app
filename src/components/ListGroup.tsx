import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItom: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItom }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItom(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
