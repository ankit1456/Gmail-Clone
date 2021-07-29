import React from "react";
import "../CSS/header.css";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../redux/userSlice";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon style={{ fontSize: 22 }} />
        </IconButton>
        <img
          src='https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
          alt=''
        />
      </div>
      <div className='header__middle'>
        <SearchIcon style={{ fontSize: 18 }} />
        <input type='text' placeholder='Search mail' />
        <ArrowDropDownIcon
          className='header__iconCaret'
          style={{ fontSize: 20 }}
        />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon style={{ fontSize: 20 }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon style={{ fontSize: 20 }} />
        </IconButton>
        <Avatar src={user?.photo} onClick={Logout} />
      </div>
    </div>
  );
};

export default Header;
