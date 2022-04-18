import { Card, CardBody, CardTitle, Table,Col,Button} from "reactstrap";


const ProjectTables = () => {
  return (
    <div>
        <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Details Of Request Status
          </CardTitle>
          <CardBody className="">
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Staff ID</th>
                  <th>Staff Name</th>
                  <th>Division</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Remarks</th>
                  <th>Comment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <Button id="color">Delete</Button>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default ProjectTables;
