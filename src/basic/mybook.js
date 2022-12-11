import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MyBook = () => {
    let [newbook, pickbook] = useState("");
    let dispatch = useDispatch();

    //transfer data from react to redux after saving so make one object and send into dispatch 
    const save = () => {
        var bookinfo = { "name": newbook, "type": "addbook" };
        dispatch(bookinfo);
        pickbook("");
        alert(newbook + "sent to store!");
    }
    //we need to receive this data into bookreducer 

    const allbook = useSelector(state => state.BookList)

    const deleteBook = (bookindex) => {
        var dispatchdata = { "index": bookindex, "type": "deletebook" }
        dispatch(dispatchdata)
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-2 "></div>
                <div className="col-lg-7 rounded border border-primary p-3">
                    <h1 className="text-center">Book Management: {allbook.length}</h1>
                    <p className="text-primary p-3">
                        Enter name:
                        <input type="text" className="m-3" value={newbook} onChange={obj => pickbook(obj.target.value)} />
                        <button onClick={save} className="btn btn-primary m-2" >Add Book</button>
                    </p>
                    <table className="table table-bordered shadow mt-3">
                        <thead>
                            <tr className="bg-light  text-primary">
                                <th>Book id</th>
                                <th>Book Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbook.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item}</td>
                                            <td><button onClick={deleteBook.bind(this, index)} className="btn btn-danger btn-sm">Delete</button></td>
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
export default MyBook;