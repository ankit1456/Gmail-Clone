import "../CSS/mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { Avatar, IconButton, Snackbar, Fade } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CloseIcon from "@material-ui/icons/Close";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ReplyIcon from "@material-ui/icons/Reply";
import ForwardIcon from "@material-ui/icons/Forward";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../redux/mailSlice";
import { selectUser } from "../redux/userSlice";
import moment from "moment";
import { useState } from "react";

const Mail = () => {
  const user = useSelector(selectUser);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  const deleteFromList = () => {
    db.collection("emails").doc(selectedMail?.id).delete();
    setOpen(true);
  };
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  let img;
  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='mail__toolsRight'>
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
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>

      <div className='mail__messageContainer'>
        <div className='mail__subject'>
          <div className='mail__subjectLeft'>
            <p>{selectedMail?.subject}</p>

            <button>
              Inbox
              <CloseIcon onClick={deleteFromList} />
            </button>
            <Snackbar
              className='snack'
              open={open}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              TransitionComponent={Fade}
              autoHideDuration={5000}
              onClose={() => setOpen(false)}
              message='Conversation removed from Inbox.'
              action={
                <>
                  <IconButton onClick={handleClose}>
                    <CloseIcon style={{ color: "#fff" }} />
                  </IconButton>
                </>
              }
            />
          </div>
          <div>
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
        <div className='mail__messageContainerHeader'>
          <div className='mail__messageContainerHeaderLeft'>
            <Avatar className='mail__HeaderAvatar' />
            <div>
              <p>
                <span className='title'>{selectedMail?.title}</span>
                <span className='span'>&#60;{user?.email}&#62;</span>
              </p>
              <h6 className='tome'>
                to me <ArrowDropDownIcon />
              </h6>
            </div>
          </div>
          <div className='mail__messageContainerHeaderRight'>
            <p>
              {moment(selectedMail?.time).format("MMMM Do YYYY, h:mm A")} ({" "}
              {moment(selectedMail?.time).fromNow()})
            </p>
            <IconButton>
              <StarOutlineIcon />
            </IconButton>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className='mail__content'>
          <div className={img && "mail__imageBg"}>
            {img && (
              <center>
                <img className='mail__img' src={img} alt='' />
              </center>
            )}
          </div>

          <p>{selectedMail?.description}</p>

          <div className='btn__group'>
            <button>
              <ReplyIcon /> <p>Reply</p>
            </button>
            <button>
              <ForwardIcon /> <p>Forward</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
