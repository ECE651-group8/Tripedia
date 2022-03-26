import React from "react";
import "../App.css";
import "./TimelineAlone.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineBackup from "./timelineBackup";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelineAlone() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <VerticalTimeline>
      {timelineBackup.map((element) => {
        let isWorkIcon = element.icon === "work";
        //Here, isWork will be true if element.icon is equal to work
        //叫做checker property
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
            //this iconstyle contains all css for the icon, just remember this point.
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            //this is 用来展示，圆圈中进展的图片以及使用的方式
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h5 className="vertical-timeline-element-subtitle">
              {element.location}
            </h5>
            <p id="description">{element.description}</p>
            {showButton && (
              <a
                className={`button ${
                  isWorkIcon ? "workButton" : "schoolButton"
                }`}
                href="/detail"
              >
                {element.buttonText}
              </a>
            )}
            {/* here button has function logic */}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
