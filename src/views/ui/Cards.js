import {
  ListGroup,
  ListGroupItem,
} from "reactstrap";

import Layout from "../../layouts/Layout";
import ProjectTables from "../../components/dashboard/ProjectTable";
import StatusTable from "../../components/dashboard/StatusTable";




const Cards = () => {
  return (
      <div>
  <p>
    The{' '}
    <code>
      list
    </code>
    {' '} of user roles.
  </p>
  <ListGroup numbered>
    <ListGroupItem>
      Administrator
    </ListGroupItem>
    <ListGroupItem>
      Director ICT
    </ListGroupItem>
    <ListGroupItem>
      Networking Manager
    </ListGroupItem>
    <ListGroupItem>
      Database And Applications Manager
    </ListGroupItem>
    <ListGroupItem>
      Emerging Technolgies Manager
    </ListGroupItem>
    <ListGroupItem>
      User Support Manager
    </ListGroupItem>
  </ListGroup>

  <Layout/>

  <ProjectTables/>

  <StatusTable/>
</div>
  );
};

export default Cards;
