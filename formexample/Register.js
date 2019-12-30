import React from 'react';
import { connect } from 'react-redux';
import  { userActions }  from './success.action';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userDetails: {
                name: '',
                surName: '',
                dateOfBirth:'',
                pAddr:'',
                tAddr:'',
                occupation:'',
                pName:'',
                pNum:'',
                emailId:'',
                panNo:'',
                depositAmount:''
               



            },
            file : ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickCheckbox = this.onClickCheckbox.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
       
    }
   
    onClickCheckbox(e){
        const { userDetails } = this.state;
        if(e.target.checked === true){
          
          userDetails.tAddr = userDetails.pAddr;
                           
                 alert(this.state.userDetails.tAddr);
          
        }else {
            userDetails.tAddr = '';
        }
        this.setState({
            userDetails: {
                 ...userDetails
             }
         });

    }
    handleSubmit(e) {
        e.preventDefault();
        const { userDetails } = this.state;
        alert('The value is: ' + userDetails.name);
        alert('The value is: ' + userDetails.surName);
        this.props.register(userDetails,this.state.file);

    }
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        const { userDetails } = this.state;
        
        this.setState({
            userDetails: {
                ...userDetails,
                [name]: value
            }
        });
        

    }
    

    

    handleFileChange(e) {
        e.preventDefault();
        const maxAllowedSize = 10 * 1024 * 1024;
        const{name} = e.target;
        console.log(e.target.files[0])
      //  const { files} = e.target.files;
       
        
        
      this.setState({[name] : e.target.files[0]});
        
        if(e.target.files[0].size>maxAllowedSize){
            alert('The file size is too big');
        }
    

    }

    render() {
      
        return (
            <form onSubmit={this.handleSubmit}>
            <div class="container well">
               <div>
                <h2 class = "text-center col-sm-12">New User Register Here</h2>
                
                <div class=" row ">
                    <div class="control-label col-sm-2 ">
                   
                    <label>Name:</label>
                    </div>
                    <div class="form-group col-sm-10">
                        <input  class="form-control" type="text" name="name"  onChange={this.handleChange} required/>
                    </div>
                </div>
                <div class="row ">
                    <label class="control-label  col-sm-2" >

                        Surname: </label>
                    <div class="form-group col-sm-10">
                        <input class="form-control" type="text" name="surName"  onChange={this.handleChange} required/>
                    </div>
                </div>
                <div class="row ">
                    <label class="control-label  col-sm-2" >

                        Date of birth: </label>
                    <div class="form-group col-sm-10">
                        <input  type="date"name="dateOfBirth"  placeholder="dd/mm/yyyy" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row">
                    <label class="control-label  col-sm-2" >

                        Permanent Address: </label>
                    <div class="form-group col-sm-10">
                        <textarea class="form-control"  name="pAddr"  onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row ">
                    
                    <div class="form-group col-sm-10">
                        <input  type="checkbox" onClick={this.onClickCheckbox} />Same as the permanent address
                    </div>
                </div>
                <div class="row ">
                    <label class="control-label  col-sm-2" >

                        Temporary Address: </label>
                    <div class="form-group col-sm-10">
                        <textarea class="form-control" name="tAddr" value={this.state.userDetails.tAddr} disabled={this.state.userDetails.tAddr && true}  onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row">
                    <label class="control-label  col-sm-2" >

                        Occupation: </label>
                    <div class="form-group col-sm-10">
                        <input class="form-control" type="text" name="occupation" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row ">
                    <label class="control-label  col-sm-2" >

                        Parent/Gaurdian name: </label>
                    <div class="form-group col-sm-10">
                        <input class="form-control" type="text" name="pName" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row">
                    <label class="control-label  col-sm-2" >

                        Phone no: </label>
                    <div class="form-group col-sm-10">
                        <input class="form-control" type="text" name="pNum" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row ">
                    <label class="control-label  col-sm-2" >

                        email Id: </label>
                    <div class="form-group col-sm-10">
                        <input class="form-control" type="text" name="emailId" onChange={this.handleChange}  />
                    </div>
                </div>
                <div class="row">
                    <label class="control-label  col-sm-2" >

                        PAN NO: </label>
                    <div class="form-group col-sm-10">
                        <input class="form-control" type="text" name="panNo" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row">
                    <label class="control-label  col-sm-2" >

                        Initial Deposit amount: </label>
                    <div class="form-group col-sm-10">
                        <input class="form-control" type="text" name="depositAmount" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="row ">
                    <label class="control-label  col-sm-4" >

                        upload your doucment here </label>
                    <div class="form-group col-sm-8">
                        <input type="file" name="file" onChange={this.handleFileChange} />
                    </div>
                </div>
                <div class="row text-center col-sm-6">
                    <button class = "btn secondary" size="sm" onSubmit={this.handleSubmit}>Enter</button>
                </div>
                </div>
            </div>
            </form>
        );
    }

}
function mapState(state) {
    const{register} = state.register
    return {register};

}

const actionCreators = {
    register : userActions.register
};
const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };

