import "./productlist.css";
// import Product from "../product/product";
// import {products} from "../../data";
import { ReactComponent as WorkIcon } from '../../img/work.svg'
import { ReactComponent as SchoolIcon } from '../../img/school.svg'
import timelineElements from "./timelineElements";
import { ThemeContext } from '../../context';
import { useContext } from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function ProductList() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <div>
            <h1 className="title">Timeline</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}

                        >
                            <h3 className="vertical-timeline-element-title" style={{
                                backgroundColor: darkMode ? "white" : "white",
                                color: darkMode ? "#343434" : "#343434"
                            }}>
                                {element.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle" style={{
                                backgroundColor: darkMode ? "white" : "white",
                                color: darkMode ? "#343434" : "#343434"
                            }}>
                                {element.location}
                            </h5>
                            <p id="description" style={{
                                backgroundColor: darkMode ? "white" : "white",
                                color: darkMode ? "#343434" : "#343434"
                            }}>{element.description}</p>
                            {showButton && (
                                <a
                                    className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                                        }`}
                                    href="/"
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}
// <div className="pl">
//     <div className="pl-texts">
//         <h1 className="pl-title">Create & inspire.</h1>
//         <p className="pl-desc">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate obcaecati odio laudantium dolores exercitationem reprehenderit hic aut temporibus iure similique et, pariatur perferendis illum at rem! Voluptatem quia cum odit?
//         </p>
//     </div>
//     <div className="pl-list">
//         {
//             products.map((item) => (
//                 <Product key={
//                     item.id
//                 }
//                     img={
//                         item.img
//                     }
//                     link={
//                         item.link
//                     } />
//             ))
//         } </div>
// </div>


export default ProductList;
