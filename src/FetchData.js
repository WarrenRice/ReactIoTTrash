import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const FetchData = () => {
  const url = "https://thinkdeedashboard.glitch.me/trash";
  const [dataTrash, setData] = React.useState(null);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    })();
  });

  return (
    <>
      <span>
        <br />
        <h5>Fetch data from api</h5>
        <Form.Control
          type="text"
          placeholder={JSON.stringify(dataTrash)}
          as="textarea"
          rows={5}
          disabled
        />
        <hr />
      </span>
    </>
  );
};
export default FetchData;
