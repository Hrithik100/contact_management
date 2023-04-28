import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/reducers/contactSlice";
import {toast} from "react-toastify"
import Header from "../components/Header";

const Home = () => {
  const { contacts } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      dispatch(deleteContact(id));
      toast.success("Contact deleted successfully");
    }
  };
  const titledata = {
    title: "Contact Page",
  };

  return (
    <>
      <section className="">
        <Header myTitle={titledata} />
       
          <div className="p-14">
            <div className="flex items-center justify-center">
              <Link to="/addContact">
                <button className="bg-[#787276] p-2 border-2 border-gray-900 rounded-[5px] text-[#000] font-[500] text-[20px]">
                  Create Contact
                </button>
              </Link>
            </div>
            <div>
              <p className="text-center py-[5rem] text-[#000] font-[400] text-[20px]">
                <span className="text-[#000] font-[500] text-[20px]">
                  {contacts.length}
                </span>{" "}
                {contacts.length > 0 ? "contacts" : "contact"} found
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-10 sm:grid-cols-1 xs:grid-cols-1">
                {contacts.map((item, index) => (
                  <div className="" key={index}>
                    <div className="bg-white  border-2 border-gray-900 rounded-[5px] p-4 flex flex-col gap-3">
                      <div className="text-[#000] font-[500] text-[20px]">
                        First Name:{" "}
                        <span className="text-[#000] font-[400] text-[20px]">
                          {item.fname}
                        </span>
                      </div>
                      <div className="text-[#000] font-[500] text-[20px]">
                        Last Name:{" "}
                        <span className="text-[#000] font-[400] text-[20px]">
                          {item.lname}
                        </span>
                      </div>
                      <div className="text-[#000] font-[500] text-[20px]">
                        Status:{" "}
                        <span className="text-[#000] font-[400] text-[20px]">
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-4 pt-4">
                      <Link to={`/update/${item.id}`}>
                        <button className="bg-[#29C235]  border-2 border-gray-900 rounded-[5px] py-2 px-4 text-[#fff] font-[500] text-[20px]">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-[#EF3B3B]  border-2 border-gray-900 rounded-[5px] py-2 px-4 text-[#fff] font-[500] text-[20px]"
                        onClick={() => onDeleteContact(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Home;
