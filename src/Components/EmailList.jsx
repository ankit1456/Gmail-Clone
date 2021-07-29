import "../CSS/emailList.css";
import { IconButton, Checkbox } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RefreshIcon from "@material-ui/icons/Refresh";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const EmailList = () => {
  const [emails, setEmails] = useState();
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) =>
        setEmails(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className='emailList__sections'>
        <Section Icon={InboxIcon} title='primary' color='red' selected={true} />
        <Section Icon={PeopleIcon} title='Social' color='#1A73ED' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>

      <div className='emailList__list'>
        {emails?.map(
          ({ id, data: { recipients, subject, message, timestamp } }) => (
            <EmailRow
              key={id}
              id={id}
              title={recipients}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          )
        )}
      </div>
    </div>
  );
};

export default EmailList;
