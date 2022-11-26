import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, checkout }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p></p>
          <a href={checkout}><button >
      Checkout 
    </button>
    </a>
        </div>
      </div>
    </Col>
  )
}