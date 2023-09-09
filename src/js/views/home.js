import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactFile } from "../component/contactFile";
import meme from "../../img/meme.gif";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (<div className="container">

		<h5 id="pageTitle"><i class="fa-regular fa-address-book me-2"></i>Contact List by Yohan Mayorga</h5>
		<p id="pageTitle">For 4Geeks Academy</p>

		<Link to="/addcontact">
			<button type="button" class="btn btn-success" id="mainButton" ><i class="bi bi-telephone"></i>Add new contact</button>
		</Link>
		{store.contacts.length === 0 ?
			<div id="conditionalRendering">
				<img id="rollingPlant" src={meme} alt="loadingImage" />
				<p id="conditionalText">It's kind of empty around here, add a new contact to get started.</p>
			</div> :
			null}
		{store.contacts.map((contact) => (<ContactFile
			key={contact.id}
			fullName={contact.fullName}
			address={contact.address}
			phone={contact.phone}
			email={contact.email}
			id={contact.id} />))}
	</div>)
};
