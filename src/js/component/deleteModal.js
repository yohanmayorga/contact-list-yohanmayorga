import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/deleteModal.css";
import { ContactFile } from "./contactFile";



export const DeleteModal = ({ open, iden, closeDeleteModal }) => {

    const { actions, store } = useContext(Context)
    const [deleteModal, setDeleteModal] = useState(true)

    if (!open) return null;
    return (
        <>
            <div className="deleteModalBackground"></div>
            <div id="deleteModalContainer" >
                <div id="deleteModalHeader">
                    <h4>Are you sure?</h4>
                    <p id="deleteModalClose" onClick={() => closeDeleteModal(false)}>X</p>
                </div>
                <p>if you delete this thing the entire universe will go down!</p>
                <div id="deleteModalButtons">
                    <button type="button" class="btn btn-primary" id="deleteModalCancel" onClick={() => closeDeleteModal(false)}>Oh no!</button>
                    <button type="button" class="btn btn-secondary" onClick={() => { actions.deleteContact(iden) }}>Yes baby!</button>
                </div>

            </div >
        </>
    )
};