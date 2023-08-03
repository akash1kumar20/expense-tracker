import React, { useEffect, useState } from "react";
import axios from "axios";
const ShowRecords = () => {
  const [dataRecord, setDataRecord] = useState([]);
  useEffect(() => {
    const emailValue = localStorage.getItem("userEmail");
    let changeEmail;
    if (emailValue === null) {
      changeEmail = 0;
    } else {
      changeEmail = emailValue.replace("@", "").replace(".", "");
    }
    const fetchData = async () => {
      try {
        let res = await axios.get(
          ` https://expense-tracker-887e6-default-rtdb.firebaseio.com/expense${changeEmail}.json`
        );
        let data = Object.values(res.data);
        setDataRecord(data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>Hi</h1>
    </div>
  );
};

export default ShowRecords;
