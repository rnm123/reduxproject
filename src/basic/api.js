import React from "react";
import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";

const Myapi = () => {
    let [userlist, pickuserlist] = useState([])
    let dispatch = useDispatch();

    const getuser = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(userarray => {
                pickuserlist(userarray)
            })
    }

    useEffect(() => {
        getuser();
    }, [1]);

    const sendData = () => {
        var mydata = { apidata: userlist, type: "processapi" };
        dispatch(mydata);
        alert("sent to store!");
    }
    return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>totsl users: {userlist.length}</h2>
                    <button onClick={sendData} className="btn btn-primary">Send Data to store</button>
                </div>
                {
                    userlist.map((item, index) => {
                        return (
                            <div className="col-lg-3 mb-4" key={index}>
                                <h4>{item.name}</h4>
                                <p>{item.address.city}</p>
                                <p>{item.company.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Myapi;