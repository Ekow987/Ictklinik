import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PendingIssues from "./PendingIssues";
import ResolvedIssues from "./ResolvedIssues";
import AddIssues from "./AddIssues";

export default function DisplayIssues() {
  return (
    <div>
    <AddIssues/>
      <Tabs
        defaultActiveKey="pending"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
      
        <Tab eventKey="pending" title="Pending Issues">
          <PendingIssues />
        </Tab>
        <Tab eventKey="resolved" title="Resolved Issues">
          <ResolvedIssues />
          
        </Tab>
       
      </Tabs>
      
    </div>
  );
}
