import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Footer from "../components/Footer";

function Experience() {
  return (
    <div>
      <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2021"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Long Xuyên High School
            </h3>
            {/* <p> Long Xuyên High School </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              HCM University of Teachnology and Education
            </h3>

            {/* <h4 className="vertical-timeline-element-subtitle">
            Information Teachnology Degree
          </h4> */}

            <p> Information Teachnology </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025-????"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Viet Nam</h4>
            <p>Developed the front-end infrastructure</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
