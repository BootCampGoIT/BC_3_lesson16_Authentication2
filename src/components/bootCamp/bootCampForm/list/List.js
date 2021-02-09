import React from "react";

const List = ({ list, category, onHandleClick, onRemove, existedList }) => {
  return (
    <>
      <h2>{category[0].toUpperCase() + category.slice(1)}</h2>
      <ul className="list">
        {list.map((item) => (
          <li key={item.id} className="listItem">
            {item.courseName ? (
              <p>{item.courseName}</p>
            ) : (
              <p>
                {item.firstName}
                <span> </span>
                {item.lastName}
              </p>
            )}

            {existedList.some((listItem) => listItem === item.id) ? (
              <button
                type="button"
                id={item.id}
                onClick={onRemove}
                data-category={category}
              >
                Remove {category.slice(0, category.length - 1)}
              </button>
            ) : (
              <button
                type="button"
                id={item.id}
                onClick={onHandleClick}
                data-category={category}
              >
                Add {category.slice(0, category.length - 1)}
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
