import * as React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table3 from "./Table3";
import Table4 from "./Table4";
import Status from "./Btn2"


export default function Create(){

  return(
      <div>
        <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="home" title="All Requested Training">
    <Table3/>
  </Tab>
  <Tab eventKey="Pending" title="Status">
   <Status/>
  </Tab>
  <Tab eventKey="Resolved" title="All Requested Devices">
   <Table4/>
   </Tab>

</Tabs>
      </div>
  );
}