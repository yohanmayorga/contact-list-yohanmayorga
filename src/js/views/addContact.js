import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { AlertModal } from "../component/alertModal";

let idc = 4

export const AddContact = () => {

    idc = idc + 1

    const { actions, store } = useContext(Context)
    const [contact, setContact] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        id: idc,
    })
    const navigate = useNavigate()
    const [alertModal, setAlertModal] = useState(false)

    function addNew() {
        let status = actions.createContact(contact);
        if (status) navigate("/");
        if (!status) setAlertModal(true);
    }

    return (

        <div id="container">

            <AlertModal
                alertOpen={alertModal}
                closeAlertModal={setAlertModal} />
            <h1 className="text-center">Add new contact</h1>

            <label for="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Full Name" onChange={(data1) => setContact({ ...contact, fullName: data1.target.value })} />

            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={(data2) => setContact({ ...contact, email: data2.target.value })} />

            <label for="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone" placeholder="Enter phone" onChange={(data3) => setContact({ ...contact, phone: data3.target.value })} />

            <label for="address" className="form-label">Address</label>
            <input type="email" className="form-control mb-2" id="address" placeholder="Enter address" onChange={(data4) => setContact({ ...contact, address: data4.target.value })} />

            <button type="button" className="btn btn-primary mb-2" id="saveButton" onClick={() => { addNew() }}>Save</button>

            <Link to="/">
                <a>Or get back to contacts</a>
            </Link>

        </div>
    )


};