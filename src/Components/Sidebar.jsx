import React from "react";
import "../CSS/sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import VideocamIcon from "@material-ui/icons/Videocam";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "../redux/mailSlice";
import { selectUser } from "../redux/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className='sidebar'>
      <img
        onClick={() => dispatch(openSendMessage())}
        src='https://it.stonybrook.edu/sites/default/files/articles/33851/images/new-gmail-compose-button.jpg'
        alt=''
      />

      <SidebarOption selected Icon={InboxIcon} title='Inbox' number={51} />
      <SidebarOption Icon={StarIcon} title='Starred' />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' />
      <SidebarOption Icon={SendIcon} title='Sent' />
      <SidebarOption Icon={LabelImportantIcon} title='[Imap]/Trash' />
      <SidebarOption Icon={ExpandMoreIcon} title='More' />
      <hr />
      <h4>Meet</h4>
      <SidebarOption Icon={VideocamIcon} title='New meeting' />
      <SidebarOption Icon={KeyboardIcon} title='Join a meeting' />

      <hr />
      <h4>Hangouts</h4>

      <div className='sidebar__avatar'>
        <div className='sidebar__avatarLeft'>
          <Avatar src={user?.photo} style={{ height: 30, width: 30 }} />
          <p>{user?.displayName}</p>
          <ArrowDropDownIcon />
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>

      <div className='sidebar__footer'>
        <p>No Hangouts contacts</p>
        <a href='#'>Find someone</a>
      </div>
    </div>
  );
};

export default Sidebar;
