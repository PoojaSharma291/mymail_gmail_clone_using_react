import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import './SendMail.css';
import { useForm } from "react-hook-form";
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import firebase from 'firebase';

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (formData) => {
        db.collection('emails').add({
            to : formData.to,
            subject : formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };
    const dispatch = useDispatch();
    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={() => dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="email" ref={register({ required: true })} />
                {errors.to && <p className="sendMail_error"> To is Required </p>}
                <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />
                <input name="message" placeholder="Message.." type="text" className="sendMail_message" ref={register({ required: true })} />

                <div className="sendMail_options">
                    <Button className="sendMail_send" type="Submit">Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail;
