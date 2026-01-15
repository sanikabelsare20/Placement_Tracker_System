let jobRolesContainer = document.getElementById("jobRoles-container");
let allJobRoles;

let callJobRolesFromApi = async () =>{
    allJobRoles = await getJobRoles();
    console.log(allJobRoles);
    displayJobRoles(allJobRoles);
}
callJobRolesFromApi();

let displayJobRoles = async (jobRoles)=>{
    jobRolesContainer.innerHTML = jobRoles.map((ele,index)=>`
    <div id="jobRoles-card" >
    <h4>Job Roles ID: ${ele.role_id}</h4>
    <h4>Job Name: ${ele.title}</h4>
    </div>`).join("") 
};

let newJobRoles = document.getElementById("newJobRoles");
newJobRoles.addEventListener("click", ()=>{
    window.location.href = "../HTML/addJobRoles.html";
});

document.getElementById("allJobRoles").addEventListener("click", ()=>{
    if(allJobRoles && allJobRoles.length > 0){
        displayJobRoles(allJobRoles);
    } else {
        alert("Job Roles data is still loading...");
    }
});
