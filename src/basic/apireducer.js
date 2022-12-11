const ApiList = (state=[], action) =>{
    var apiarray = Object.assign([],state);
    if(action.type === "processapi"){
        apiarray= action.apidata;
    }
   
     return apiarray;
}
export default ApiList;