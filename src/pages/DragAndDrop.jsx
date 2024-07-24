import React from "react";
import Container from "../components/Container/Container";
import DraggableItems from "../components/Drag-Drop-Components/DraggableItems";

function DragAndDrop() {
  return (
    <>
      <div>
        <Container
          innerColor="white"
          outerColor="#D2E3C8"
          textColor="#4F6F52"
          width="80vw"
          padding="2vw"
        >
          <div className="">
            <h1 className=" font-bold text-3xl">Manage Bundle</h1>
            <p className=" font-light text-lg">
              Change orders of the products based on priority
            </p>
          </div>
          <div>
            <DraggableItems />
          </div>
        </Container>
      </div>
    </>
  );
}

export default DragAndDrop;
