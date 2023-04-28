import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const items = localStorage.getItem('contacts') !== null ? JSON.parse(localStorage.getItem('contacts')): []

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: items,
    contact: {
      fname: "",
      lname: "",
      status: "",
    },
  },
  reducers: {
    addContact: (state,action) =>{
        const newData = {...action.payload, id: uuidv4()};
        state.contacts = [newData,...state.contacts]
        localStorage.setItem('contacts', JSON.stringify(state.contacts.map(item=>item)))
    },
    deleteContact: (state, action) =>{
        state.contacts = state.contacts.filter((item) => item.id !== action.payload)
        localStorage.setItem('contacts', JSON.stringify(state.contacts.map(item=>item)))
    },
    getContact: (state,action) =>{
        state.contact = state.contacts.find((item) => item.id == action.payload)
        localStorage.setItem('contacts', JSON.stringify(state.contacts.map(item=>item)))
    },
    updateContact: (state, action) => {
        state.contacts = state.contacts.map((item) => item.id === action.payload.id ? action.payload : item)
        localStorage.setItem('contacts', JSON.stringify(state.contacts.map(item=>item)))
    }
  }
});

export const {addContact, deleteContact, getContact,updateContact} = contactSlice.actions

export default contactSlice.reducer;
