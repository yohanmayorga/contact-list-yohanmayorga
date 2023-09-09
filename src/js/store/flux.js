const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {

			createContact: (contact) => {
				const store = getStore();
				if (contact.fullName == "" || contact.email == "" || contact.phone == "" || contact.address == "") return false
				setStore({ ...store, contacts: [...store.contacts, { ...contact }] });
				return true
			},

			deleteContact: (id) => {
				const store = getStore();
				const contacts = store.contacts.filter((contact) => contact.id !== id);
				setStore({ ...store, contacts });
			},

			editContact: (actual, newInfo) => {
				const store = getStore();
				let numberContact = store.contacts.find(identification => actual.id == identification.id)
				if (numberContact) {
					newInfo.fullName != "" ? numberContact.fullName = newInfo.fullName : "";
					newInfo.email != "" ? numberContact.email = newInfo.email : "";
					newInfo.phone != "" ? numberContact.phone = newInfo.phone : "";
					newInfo.address != "" ? numberContact.address = newInfo.address : "";
					setStore("");
				}
				return true
			},
		}
	};
};

export default getState;
