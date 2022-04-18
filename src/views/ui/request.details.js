import {
    Card,
    CardText,
    CardBody,
    CardTitle,
  } from "reactstrap";
import Dtl1 from "./Card4"
import Dtl2 from "./Card5";
import Tab2 from "./Tab2";


  
  
  
  
  const Forms = () => {
    
    return (
  
      <div>
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          REQUESTED TRAINING
        </CardTitle>
        <CardText>
         100
        </CardText>
      </CardBody>
    </Card>
    < Dtl1/>
    < Dtl2/>
    <Tab2/>
  </div>
  
      
    );
  };
  
  export default Forms;
  