// import { Col } from "react-bootstrap";

// // export const ProjectCard = ({ title, description, imgUrl, liveLink, techStack }) => {
// //     return (
// //             <div className="proj-imgbx">
// //                 <img src={imgUrl} alt={title} />
// //                 <div className="proj-txtx">
// //                     <h4>{title}</h4>
// //                     <p>{description}</p>
// //                 </div>
// //             </div>
        
// //     );
// // };

import {Col} from "react-bootstrap";
export const ProjectCard = ({title, description, imgUrl}) => {
    return (
        <Col sm = {9}>
            <div className = "proj-imgbx">
                <img src = {imgUrl} />
                <div className = "proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}