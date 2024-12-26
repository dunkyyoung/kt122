import { useState } from "react";
import "./App.css";
import ServiceItem from "./components/serviceItem/ServiceItem";
const data = [
  { id: 1, name: "Велосипед", price: 1000, count: 1 },
  { id: 2, name: "Самокат", price: 700, count: 1 },
  { id: 3, name: "Ролики", price: 1300, count: 2 },
  { id: 4, name: "Сноуборд", price: 19000, count: 4 },
];
function App() {
  const [dataX, setDataX] = useState(data);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const addProduct = () => {
    if (name === "" || price === 0) {
      alert("Ошибка валидации");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price,
      count: 1,
    };
    setDataX((prev) => [...prev, newProduct]);
  };

  return (
    <>
      <div className="form">
        <label>
          {" "}
          Название продукта
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <label>
          {" "}
          Цена
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />
        </label>
        <button onClick={addProduct}>Добавить продукт</button>
      </div>

      <div className="container">
        {dataX
          .filter((el) => el.count !== 0)
          .map((el) => {
            return (
              <ServiceItem
                text={el.name}
                prise={el.price}
                countX={el.count}
                key={el.id}
                setCountX={setDataX}
                id={el.id}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
