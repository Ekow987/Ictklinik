import {
  ListGroup,
  ListGroupItem,
  Badge
} from "reactstrap";

// import Layout from "../../layouts/Layout";
// import ProjectTables from "../../components/dashboard/ProjectTable";
// import StatusTable from "../../components/dashboard/StatusTable";




const Cards = () => {
  return (
      <div>
  <p>
    The{' '}
    <code>
      list
    </code>
    {' '} of technical staff and contact.
  </p>
  <ListGroup>
  <ListGroupItem className="justify-content-between">
    Albert Ansah (User Support){' '}
    <Badge pill>
      0559331396
    </Badge>
  </ListGroupItem>
  <ListGroupItem className="justify-content-between">
    David Baiden (Database And Application){' '}
    <Badge pill>
      0559416491
    </Badge>
  </ListGroupItem>
  <ListGroupItem className="justify-content-between">
    Godwin Baah (Network And System Administration){' '}
    <Badge pill>
      0550988260
    </Badge>
  </ListGroupItem>
</ListGroup>

  {/* <Layout/>

  <ProjectTables/>

  <StatusTable/> */}
</div>
  );
};

export default Cards;
