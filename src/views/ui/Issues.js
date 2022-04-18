import {
  Col, Container,
  Row
} from "reactstrap";
import DashboardCards from "./Card";
import DisplayIssues from "./DisplayIssues";




const Issues = () => {
  
  return (

    <div>
    <section>
    <Container>
    <Row>
    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    <DashboardCards title="Total Issues" text={100} />
    </Col>
    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    <DashboardCards title="Pending" text={100} />
    </Col>
    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    <DashboardCards title="Resolved" text={100} />
    </Col>
    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
    <DashboardCards title="Resolved Rate" text={100} />
    </Col>
    </Row>
    </Container>
    </section>
  
  <DisplayIssues/>
</div>

    
  );
};

export default Issues;
