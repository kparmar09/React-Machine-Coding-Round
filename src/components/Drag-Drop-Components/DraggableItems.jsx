import React, { useState } from "react";
import DragDropData from "../../public/DragDropData.js";

function DraggableItems() {
  const [itemData, setItemData] = useState(DragDropData);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(itemData);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setItemData(items);
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMoveToTop = (index) => {
    const items = Array.from(itemData);
    const [movedItem] = items.splice(index, 1);
    items.unshift(movedItem);
    setItemData(items);
    setActiveDropdown(null);
  };

  const handleMoveToBottom = (index) => {
    const items = Array.from(itemData);
    const [movedItem] = items.splice(index, 1);
    items.push(movedItem);
    setItemData(items);
    setActiveDropdown(null);
  };

  const handleDelete = (index) => {
    const items = Array.from(itemData);
    items.splice(index, 1);
    setItemData(items);
    setActiveDropdown(null);
  };

  return (
    <ul className="mt-6">
      {itemData.map((item, index) => {
        // Ensure item and item.id are defined
        if (!item || !item.id) {
          console.warn(
            `Item or item.id is undefined for index: ${index}`,
            item
          );
          return null; // Skip rendering this item if it's undefined
        }

        return (
          <li key={item.id.toString()} className="mb-2 relative">
            <div className="grid grid-cols-10 gap-6 mb-5 border-2 rounded-lg shadow-md p-1 items-center">
              <div className="col-span-2">
                <div className="grid grid-cols-2 items-center">
                  <svg
                    fill="#000000"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                  >
                    <path d="M8.5,10a2,2,0,1,0,2,2A2,2,0,0,0,8.5,10Zm0,7a2,2,0,1,0,2,2A2,2,0,0,0,8.5,17Zm7-10a2,2,0,1,0-2-2A2,2,0,0,0,15.5,7Zm-7-4a2,2,0,1,0,2,2A2,2,0,0,0,8.5,3Zm7,14a2,2,0,1,0,2,2A2,2,0,0,0,15.5,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,15.5,10Z" />
                  </svg>
                  <img
                    src={item.imgSrc}
                    className="rounded-lg"
                    alt={item.title}
                  />
                </div>
              </div>
              <h1 className="col-span-5 text-lg font-semibold p-1">
                {item.title}
              </h1>
              <div className="col-span-3">
                <div className="grid grid-cols-3 relative">
                  <h1 className="p-1">{item.price}</h1>
                  <h1 className="font-normal p-1">
                    <span
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "#DBFFCE" }}
                    >
                      {item.resource}
                    </span>
                  </h1>
                  <svg
                    width="23px"
                    height="23px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    className="bi bi-three-dots-vertical cursor-pointer m-1"
                    onClick={() => handleDropdownClick(index)}
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                  {activeDropdown === index && (
                    <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded shadow-lg z-10">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleMoveToTop(index)}
                      >
                        Move to Top
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleMoveToBottom(index)}
                      >
                        Move to Bottom
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default DraggableItems;
