const UserList = (state=[], action) =>{
    var userArray = Object.assign([],state);
    if(action.type === "adduser"){
        userArray.push(action.data)
    }
    if(action.type === "deleteuser"){
        userArray.splice(action.data, 1)
    }
     return userArray;
}
export default UserList;
