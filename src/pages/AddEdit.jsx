import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  addContact,
  updateContact,
  getContact,
} from "../redux/reducers/contactSlice";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  fname: "",
  lname: "",
  status: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { fname, lname, status } = state;

  const { contact } = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getContact(id));
    setState({ ...contact });
  }, [id, contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !status) {
      toast.error("Please provide value into each input field");
    } else {
      if (!id) {
        dispatch(addContact(state));
        toast.success("Contact added successfully");
      } else {
        dispatch(updateContact(state));
        toast.success("Contact updated successfully");
      }
      setTimeout(() => navigate("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <section>
      <header className="bg-[#1f456e] p-3 text-center">
        <h1 className="text-white font-[500] text-[40px]">Contact Page</h1>
      </header>
      <div className="p-14">
        <div className="flex items-center justify-center">
          <h1 className="text-[#000] font-[500] text-[30px]">
            {id ? "Edit Contact Screen " : "Create Contact Screen"}
          </h1>
        </div>
        <div className="flex justify-center">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="bg-white  border-2 border-gray-900 rounded-[5px] mt-[4rem] p-4 flex flex-col gap-4">
              <div className="flex gap-4">
                <label
                  htmlFor="name"
                  className="text-[#000] font-[500] text-[20px]"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your First Name"
                  value={fname || ""}
                  onChange={handleInputChange}
                  className="border-2 border-gray-900 rounded-[5px] pl-2"
                />
              </div>
              <div className="flex gap-4">
                <label
                  htmlFor="email"
                  className="text-[#000] font-[500] text-[20px]"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Your Last Name"
                  className="border-2 border-gray-900 rounded-[5px] pl-2"
                  value={lname || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex gap-4">
                <label htmlFor="status" className="text-[#000] font-[500] text-[20px]">Status:</label>
                <select
                  className="border-2 border-gray-900 rounded-[5px] pl-2 text-[#000] font-[500] text-[18px]"
                  name="status"
                  onChange={handleDropdownChange}
                >
                  <option >Please Select Status</option>
                  <option
                    value="Active"
                    selected={status === "Active" ? status : ""}
                  >
                    Active
                  </option>
                  <option
                    value="Inactive"
                    selected={status === "Inactive" ? status : ""}
                  >
                    Inactive
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 mt-3">
              <input type="submit" value={id ? "Save Edited Contact" : "Save Contact"} className="bg-[#787276] p-2 border-2 border-gray-900 rounded-[5px] text-[#000] font-[500] text-[20px] cursor-pointer" />
              <Link to="/">
                <input type="button" value="Go Back" className="bg-[#787276] p-2 border-2 border-gray-900 rounded-[5px] text-[#000] font-[500] text-[20px] cursor-pointer" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEdit;
