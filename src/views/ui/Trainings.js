import React from "react";
import { Col, Container, Row } from "reactstrap";
import TrainingCards from "./TrainingCards";
export default function RequestTraining (){

    return(
      <div>
           <section>
        <Container>
          <div>
            <Row>
              <Col className="col-xl-10 col-lg-10 col-md-6 col-sm-10" >
                <TrainingCards title="Training" text="Request for ict training" />
              </Col>
              {/* <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <TrainingCards title="Training" text="Request for ict training" />
              </Col>
              <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                <TrainingCards title="Training" text="Request for ict training" />
              </Col> */}
            </Row>
          </div>
        </Container>
      </section>

      </div>
    );
}