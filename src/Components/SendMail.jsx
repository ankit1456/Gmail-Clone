import "../CSS/sendMail.css";
import RemoveIcon from "@material-ui/icons/Remove";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../redux/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";
const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    reset();
    db.collection("emails").add({
      recipients: formData.recipients,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };
  return (
    <div className='sendmail'>
      <div className='sendmail__header'>
        <h4>New Message</h4>
        <div className='sendmail__headerRight'>
          <RemoveIcon />
          <FullscreenIcon />
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(closeSendMessage())}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='Recipients'
          className={errors.recipients ? "error" : "send__mailInput"}
          {...register("recipients", { required: true })}
        />
        {errors.recipients && (
          <p className='sendmail__error'>Recipients is required</p>
        )}
        <input
          type='text'
          className={errors.subject ? "error" : "send__mailInput"}
          placeholder='Subject'
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className='sendmail__error'>Subject is required</p>
        )}
        <textarea type='text' {...register("message")} />
        <div className='sendmail__option'>
          <Button variant='contained' type='submit'>
            Send <ArrowDropDownIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
