import React, { useContext, useState } from "react";
import "../../styles/alertModal.css";

export const AlertModal = ({ alertOpen, closeAlertModal }) => {

    const [alertModal, setAlertModal] = useState(false)

    if (!alertOpen) return null;
    return (
        <>
            <div className="alertModalBackground"></div>
            <div id="alertModalContainer" >
                <div id="alertModalHeader">
                    <h4>Hey!</h4>
                </div>
                <p>You must fill in all the fields to continue.</p>
                <div id="alertModalCancel">
                    <button type="button" class="btn btn-danger" onClick={() => closeAlertModal(false)}>Accept</button>
                </div>
            </div >
        </>
    )
};