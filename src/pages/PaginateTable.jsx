import React, { useState } from "react";
import Container from "../components/Container/Container";
import Table from "../components/Paginate-Table-Components/Table";

function PaginateTable() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleClick = () => {};

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
          <input
            value={search}
            placeholder="Search by Title (alt + k)"
            className="border border-black mt-4 p-1"
            onChange={(e) => handleChange(e)}
          />
          <button
            className="border border-black ml-2 p-1"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        <Table search={search} />
      </Container>
    </>
  );
}

export default PaginateTable;
