import React, { useState, useEffect, useContext } from "react";;
import { Context } from "../store/appContext";
import "../../styles/editModal.css";
import { Link } from "react-router-dom";



export const EditModal = ({ open, data, closeEditModal }) => {

    if (!open) return null;
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    })

    function saveEdit() {

        actions.editContact(data, contact);
        closeEditModal(false)
    }

    return (
        <div style={{ position: "absolute" }}>
            <div className="editModalBackground"></div>
            <div className="editModalContainer">
                <div id="editModalHeader">
                    <h2>Edit contact</h2>
                    <p id="editModalClose" onClick={() => closeEditModal(false)}>X</p>
                </div>


                <label for="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={(data1) => setContact({ ...contact, fullName: data1.target.value })} />

                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(data2) => setContact({ ...contact, email: data2.target.value })} />

                <label for="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={(data3) => setContact({ ...contact, phone: data3.target.value })} />

                <label for="address" className="form-label">Address</label>
                <input type="email" className="form-control mb-2" id="address" placeholder="Enter address" onChange={(data4) => setContact({ ...contact, address: data4.target.value })} />

                <Link to="/"><button type="button" className="btn btn-primary mb-2" id="saveButton" onClick={() => { saveEdit() }}>Save</button></Link>
            </div>
        </div>)
};