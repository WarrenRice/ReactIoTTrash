import React, { useEffect } from "react";
import plastic from "./img/plastic.png";
import metal from "./img/metal.png";
import paper from "./img/paper.png";
import other from "./img/others.png";
import { Col, FormGroup, Image, ProgressBar, Row } from "react-bootstrap";
//import useFetch from "react-fetch-hook";
import FetchData from "./FetchData";
import axios from "axios";

function ThinkDeeDash() {
  const url = "https://thinkdeedashboard.glitch.me/trash";
  const [dataTrashA, setDataA] = React.useState("");
  const [dataTrashB, setDataB] = React.useState("");
  /*
  /*
  useEffect(() => {
    axios
      .get("url")
      .then((response) => console.log(response.data.metal));
  }, []);
  */
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(url);
        if (result.data !== null) {
          setDataA(result.data.A);
          setDataB(result.data.B);
          console.log(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  });

  return (
    <>
      <br />
      <h5>ThinkDee Drashboard</h5>
      <Row>
        <Col>
          <FormGroup>
            <br />
            <Image className="col-1" src={plastic} alt="plasticIcon" />
            <h5>Plastic : {JSON.stringify(dataTrashA.plastic) + " %"}</h5>
            <ProgressBar
              id="barTrashAplastic"
              now={dataTrashA.plastic}
              animated
            ></ProgressBar>
            <br />
            <Image className="col-1" src={metal} alt="metalIcon" />
            <h5>Metal : {JSON.stringify(dataTrashA.metal) + " %"}</h5>
            <ProgressBar
              id="barTrashAmetal"
              now={dataTrashA.metal}
              animated
            ></ProgressBar>
          </FormGroup>

          <FormGroup>
            <br />
            <Image className="col-1" src={paper} alt="paperIcon" />
            <h5>Paper : {JSON.stringify(dataTrashA.paper) + " %"}</h5>
            <ProgressBar
              id="barTrashApaper"
              now={dataTrashA.paper}
              animated
            ></ProgressBar>
            <br />
            <Image className="col-1" src={other} alt="othersIcon" />
            <h5>Others : {JSON.stringify(dataTrashA.others) + " %"}</h5>
            <ProgressBar
              id="barTrashAothers"
              now={dataTrashA.others}
              animated
            ></ProgressBar>
          </FormGroup>

          <h6 className="mt-3">Location: Canteen 1</h6>
        </Col>
        <Col>
          <FormGroup>
            <br />
            <Image className="col-1" src={plastic} alt="plasticIcon" />
            <h5>Plastic : {JSON.stringify(dataTrashB.plastic) + " %"}</h5>
            <ProgressBar
              id="barTrashBplastic"
              now={dataTrashB.plastic}
              animated
            ></ProgressBar>
            <br />
            <Image className="col-1" src={metal} alt="metalIcon" />
            <h5>Metal : {JSON.stringify(dataTrashB.metal) + " %"}</h5>
            <ProgressBar
              id="barTrashBmetal"
              now={dataTrashB.metal}
              animated
            ></ProgressBar>
          </FormGroup>

          <FormGroup>
            <br />
            <Image className="col-1" src={paper} alt="paperIcon" />
            <h5>Paper : {JSON.stringify(dataTrashB.paper) + " %"}</h5>
            <ProgressBar
              id="barTrashBpaper"
              now={dataTrashB.paper}
              animated
            ></ProgressBar>
            <br />
            <Image className="col-1" src={other} alt="othersIcon" />
            <h5>Others : {JSON.stringify(dataTrashB.others) + " %"}</h5>
            <ProgressBar
              id="barTrashBothers"
              now={dataTrashB.others}
              animated
            ></ProgressBar>
          </FormGroup>

          <h6 className="mt-3">Location: Canteen 2</h6>
        </Col>
      </Row>
      <FetchData/>
    </>
  );
}
export default ThinkDeeDash;
