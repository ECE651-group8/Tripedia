import React from "react";
import TopbarOption from "./TopbarOption";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "./Topbar.css";

function Topbar() {
  return (
    <div className="topbar-box">
      <div className="topbar">
        <TopbarOption active Icon={EmojiEventsIcon} text="All" />
        <TopbarOption Icon={LocalFireDepartmentIcon} text="Hot" />
        <TopbarOption Icon={AccessTimeIcon} text="Latest" />
      </div>
      <hr />
    </div>
  );
}

export default Topbar;
