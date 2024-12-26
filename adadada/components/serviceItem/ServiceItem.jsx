import { useState } from "react";
import styles from "./styles.module.css";

function ServiceItem({ text, countX, prise, setCountX, id }) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{text}</p>
      <p> Прайс {prise} </p>
      <div className={styles.row}>
        <button
          onClick={() =>
            setCountX((prev) => {
              return prev.map((item) => {
                if (item.id === id) {
                  return { ...item, count: item.count - 1 };
                }
                return item;
              });
            })
          }
        >
          -
        </button>
        <span>{countX}</span>
        <button
          onClick={() =>
            setCountX((prev) => {
              return prev.map((item) => {
                if (item.id === id) {
                  if (item.count === 25) {
                    return item;
                  } else {
                    return { ...item, count: item.count + 1 };
                  }
                }
                return item;
              });
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ServiceItem;
