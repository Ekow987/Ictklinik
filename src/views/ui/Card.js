import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";




const DashboardCard = ({title,text}) => {
  
  return (

    <div>
  <Card>
    <CardBody>
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      <CardText>
        {text}
      </CardText>
    </CardBody>
  </Card>
</div>

    
  );
};

export default DashboardCard;
