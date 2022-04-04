import React, { useState } from "react";
import "../App.css";
import "./TimelineAlone.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const userid = window.location.pathname.substring(10);
async function getData() {
  const res = await fetch("http://localhost:8080/api/user/" + userid, {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  });
  const json = await res.json();

  return json.posts;
}

const time = getData();

export default function TimelineAlone() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  const [post, setPost] = useState([]);
  time.then((item) => {
    setPost(item);
  });

  return (
    <VerticalTimeline>
      {post.map((element) => {
        return (
          <VerticalTimelineElement
            key={element.postId}
            date={element.tripTime}
            dateClassName="date"
            iconStyle={workIconStyles}
            //this iconstyle contains all css for the icon, just remember this point.
            icon={<WorkIcon />}
            //this is 用来展示，圆圈中进展的图片以及使用的方式
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>

            {<a href={"/detail/" + element.postId}>See more description</a>}
            {/* here button has function logic */}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
