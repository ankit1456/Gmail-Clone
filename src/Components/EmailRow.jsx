import "../CSS/emailRow.css";
import { IconButton, Checkbox } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useHistory } from "react-router";
import { selectMail } from "../redux/mailSlice";
import moment from "moment";
import { useDispatch } from "react-redux";
const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    history.push("/mail");
  };
  return (
    <div className='emailRow' onClick={openMail}>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h4 className='emailRow__title'>{title}</h4>
      <div className='emailRow__message'>
        <h5>
          {subject}
          <span className='emailRow__description'>{description}</span>
        </h5>
      </div>
      <p className='emailRow__time'>{moment(time).format("h:ss a")}</p>
    </div>
  );
};

export default EmailRow;
