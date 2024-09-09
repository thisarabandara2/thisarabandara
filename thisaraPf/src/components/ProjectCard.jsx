import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx" style={{ color: 'white' }}>
            <h4 style={{ color: 'white' }}>{title}</h4>
            <span style={{ color: 'white' }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
