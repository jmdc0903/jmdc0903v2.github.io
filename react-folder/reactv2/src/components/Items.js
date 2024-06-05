import { useState } from "react";
import "./styles.css";
const Items = () => {
  const [itemname, setItemName] = useState("");
  const [itemprice, setItemPrice] = useState("");

  const [item, setItem] = useState([]);

  function addItem(e) {
    e.preventDefault();

    setItem([...item, { item: itemname, price: itemprice }]);
    setItemName("");
    setItemPrice("");
  }

  function addItemName(e) {
    setItemName(e.target.value);
  }

  function addItemPrice(e) {
    setItemPrice(e.target.value);
  }
  return (
    <div>
      <form>
        <label>Item Name : </label>
        <input
          type="text"
          value={itemname}
          onChange={(e) => addItemName(e)}
        />{" "}
        <br />
        <label>Item Price : </label>
        <input
          type="text"
          value={itemprice}
          onChange={(e) => addItemPrice(e)}
        />
        <br />
        <button onClick={(e) => addItem(e)}>Add Item</button>
      </form>

      <div>
        <ul>
          {item.map((itm) => (
            <li key={itm.item}>
              {itm.item} {itm.price}
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Items;
