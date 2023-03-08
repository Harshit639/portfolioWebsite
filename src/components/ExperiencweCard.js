import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditIcon from '@mui/icons-material/Edit';

function WithHeaderStyledExample({companyname,title ,skill1, skill2,link,small}) {
  return (
    <Card style={{color:'white', border:"1px solid black", marginTop:40, marginBottom:40, width:"90%"}} >
      <Card.Header as="h5" id="ghf">{companyname}</Card.Header>
      <Card.Body style={{background:'#151515'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{paddingTop:20,}}>
        <EditIcon/>
          {skill1}
        </Card.Text>
        <Card.Text style={{paddingTop:20,}}>
        <EditIcon/>
          {skill2}
        </Card.Text>
        <Button className='buttonstyle' href={link} style={{marginTop:20,}}>Visit {small}</Button>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;