import React, { useContext, useState } from "react";
import pp2 from "../../img/pp2.png";
import { Context } from "../store/appContext";
import { EditModal } from "./editModal";
import { DeleteModal } from "./deleteModal";
import "../../styles/contactFile.css";



export const ContactFile = (contact) => {

    const { actions, store } = useContext(Context)
    const [openModal, setOpenModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const handleDelete = () => {
        setDeleteModal(true);
    };

    const handleOpen = () => {
        setOpenModal(true);
    };

    return (

        <div id="contactFile">
            <EditModal
                open={openModal}
                data={contact}
                closeEditModal={setOpenModal} />
            <DeleteModal
                open={deleteModal}
                iden={contact.id}
                closeDeleteModal={setDeleteModal}
            />
            <img id="contactPhoto" src={pp2} alt="Contact image" />
            <div className="d-flex w-100 justify-content-between">
                <span id="contactInfo">

                    <span><h4>{contact.fullName}</h4></span>
                    <span id="contactEmail"><i className="fa-solid fa-envelope me-1"></i><p>{contact.email}</p></span>
                    <span id="contactPhone"><i className="fa-solid fa-phone me-1"></i><p>{contact.phone}</p></span>
                    <span id="contactAddress"><i className="fa-solid fa-location-dot me-1"></i><p>{contact.address}</p></span>

                </span>

                <span className="editButtons">
                    <i className="fa-solid fa-pencil me-3" id="editPointer" onClick={handleOpen}></i>
                    <i className="fa-solid fa-trash me-3" id="deletePointer" onClick={handleDelete}></i>
                </span>

            </div>
        </div>

    )
}