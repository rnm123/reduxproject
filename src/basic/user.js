import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyUser = () => {
    let dispatch = useDispatch();
    let [newName, pickName] = useState("");
    let [age, pickage] = useState("");
    let [education, pickeducation] = useState("");
    let [mobile, pickmobile] = useState("");

    //transfer data from react to redux after saving so make one object and send into dispatch 
    const save = () => {
        var userinfo = {
            type: "adduser",
            data: { name: newName, age: age, education: education, mobile: mobile }
        };
        pickName("");
        pickage("");
        pickeducation("");
        pickmobile("");
        dispatch(userinfo);
        alert(newName + "sent to store!");
        console.log(userinfo);
    }

    const alluser = useSelector(state => state.UserList)

    const deleteuser = (userindex) => {
        var dispatchdata = { "index": userindex, "type": "deleteuser" }
        dispatch(dispatchdata)
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="text-center">Add new User</h1>
                    <div className="mb-3">
                        <label>Full Name</label>
                        <input type="text" className="form-control"
                            value={newName} onChange={obj => pickName(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Age</label>
                        <input type="text" className="form-control"
                            value={age} onChange={obj => pickage(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Education</label>
                        <input type="text" className="form-control"
                            value={education} onChange={obj => pickeducation(obj.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Mobile No</label>
                        <input type="text" className="form-control"
                            value={mobile} onChange={obj => pickmobile(obj.target.value)} />
                    </div>
                    <div className="text-center">
                        <button onClick={save} className="btn btn-primary">Save User</button>
                    </div>

                </div>
                <div className="col-lg-9">
                    <h2 className="text-center">User Managaement: {alluser.length}</h2>
                    <table className="table table-bordered shadow mt-3">
                        <thead>
                            <tr className="bg-light  text-primary">
                                <th>User Index</th>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Education</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item.name}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.education}</td>
                                            <td>{item.age}</td>
                                            <td><button onClick={deleteuser.bind(this, index)} className="btn btn-danger btn-sm">Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default MyUser;