
import { useSelector } from "react-redux";

const AllData = () => {
    const alluser = useSelector(state => state.UserList);
    const allbook = useSelector(state => state.BookList);
    const apidata = useSelector(state => state.ApiList);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-3">
                    <h2 className="text-center">Book list from Redux: {allbook.length}</h2>
                    {
                        allbook.map((book, index) => {
                            return (
                                <p className="border rounded text-primary p-2 ">
                                    {index + 1}.{book}
                                </p>
                            )
                        })
                    }
                </div>
                <div className="col-lg-9">
                    <h2 className="text-center">user list from Redux: {alluser.length}</h2>
                    <table className="table table-bordered shadow mt-3">
                        <thead>
                            <tr className="bg-light  text-primary">
                                <th>User Index</th>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Education</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.mobile}</td>
                                            <td>{user.education}</td>
                                            <td>{user.age}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center">Api data from Redux: {apidata.length}</h2>
                    {
                        apidata.map((item, index) => {
                            return (
                                <div className="border rounded text-primary p-2 mb-2" key={index}>
                                    <h4>{item.name}</h4>
                                    <p>{item.address.city}</p>
                                    <p>{item.company.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default AllData;