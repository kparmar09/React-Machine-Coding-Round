import React from "react";
import Container from "../components/Container/Container";
import Table from "../components/Paginate-Table-Components/Table";

function PaginateTable() {
  return (
    <>
      <Container
        outerColor="#E2BBE9"
        innerColor="white"
        width="75vw"
        textColor="#444B79"
        padding="2vw"
      >
        <h1 className=" font-bold text-4xl">Batches</h1>
        <p className=" font-normal text-lg mt-1">
          Create learner's batch and share information at the same time.
        </p>
        <div className="mb-6">
          <input className="border border-black mt-4" />
          <button className="border border-black ml-2">Search</button>
        </div>
        <Table />
      </Container>
    </>
  );
}

export default PaginateTable;
