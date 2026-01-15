let jobRolesForm =document.getElementById("jobRolesForm");
//console.log(jobRolesForm);

jobRolesForm.addEventListener("submit",async (e) =>{
    e.preventDefault();
    


    let jobRoles = {
        company_id: company_id.value,
        name: name.value,
        industry: industry.value,
    };
    console.log(jobRoles);

    await fetch(`${baseURL}/job-roles`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jobRoles),
    });
    
    alert("Job-Role added Successfuly");

});