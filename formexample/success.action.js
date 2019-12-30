
 import axios from 'axios';


 export const userActions = {
    success,
    register
};
 function success(user) {
    return    dispatch => {
            dispatch(request(user) );

             axios.get(`http://localhost:8080/BankAccountMaintenance/LoginUser`)
             .then(res => {
               
               alert(res.data);
               dispatch(success(res));
               this.history.push('/homepage');
              
             })
       
        

    };
     function request(user) { return { type: 'REQUEST',user } }
     function success(res){return {type : 'SUCCESS',res}}
   
}


 function register(userDetails,file) {
   var formData = new FormData();
formData.append('userDetails',JSON.stringify(userDetails));
formData.append('file',file);
 

    return    dispatch => {
        alert("hi");
         // const requestData={
         //  method:'POST',
         //  headers:{'content-type':'multipart/form-data'},
         //  body:formData
         
         // }
           // dispatch(request(userDetails) );

         //   {
         //    method: 'post',
         //    url: 'myurl',
         //    data: bodyFormData,
         //    headers: {'Content-Type': 'multipart/form-data' }
         //    }
             axios.post('http://localhost:8080/BankAccountMaintenance/register', formData)
             .then(res =>{
                dispatch(success(res));
                this.history.push('/');
               })
             
             
            
              
          
       
        

    };
    // function request(user) { return { type: 'REG_REQUEST',user } }
     function success(res){return {type : 'REG_SUCCESS',res}}
   
   
}

