import React,{useState} from "react"
import './diary.css';

const Diary =()=>{
    const [formData,setFormData]=useState({
        name:'',
        roll:'',
        branch:'',
        progress:''
    })
    // const {name,setName}=useState("")
    // const {roll,setRoll}=useState("")
    // const {branch,setBranch}=useState("")
    // const {progress,setProgress}=useState("")
    // const handleChange=(e)=>{
    //     setInput"s({
    //         ...inputs,
    //         [e.target.name]: e.target.value,
    //       });
      
    // }
    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log('name',formData.name);
    }
    const onChangeHandler=(event)=>{
        
    }

    return (
        <div className="container Diary">
            <div><h1 className="text-center">Project Diary</h1></div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-c">
                        {/* <label for="exampleInput1">Name</label> */}
                        <input type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={onChangeHandler} 
                        id="exampleInputName1"
                        aria-describedby="nameHelp"
                        placeholder="Enter Name" />
                    </div>
                    <div className="form-group form-c">
                        {/* <label>Roll No.</label> */}
                        <input type="text"
                        className="form-control"
                        value={formData.roll}
                        onChange={onChangeHandler}
                        id="exampleInputRollNo" aria-describedby="rollnohelp" 
                        placeholder="Enter University Roll NO" />
                    </div>
                    <div className="form-group form-c">
                        {/* <label>Branch</label> */}
                        <input type="text"
                        value={formData.branch}
                        onChange={onChangeHandler}
                        className="form-control" 
                        id="exampleInputBranch" aria-describedby="branchhelp" 
                        placeholder="Branch"/>
                    </div>
                    <div className="form-group form-c">
                        {/* <label>Progress</label> */}
                        <input type="text"
                        value={formData.progress}
                        onChange={onChangeHandler}
                        className="form-control" 
                        placeholder="Progress"/>
                    </div>
                    <button type="submit" className="btn btn-primary ">Send Data</button>
                </form>
            </div>
        </div>
    )
}

export default Diary;