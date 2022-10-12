import React, { useState } from "react";

import countriesData from "./MockData";
//import styles from "./App.module.css";
import Table from "./Table";

const MainTable = () => {
  const [countries] = useState([...countriesData]);
  return (
    <main >
      <div >
        <Table data={countries} rowsPerPage={4} />
      </div>
    </main>
  );
};

export default MainTable;