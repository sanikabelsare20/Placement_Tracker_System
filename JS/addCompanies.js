let companiesForm =document.getElementById("companiesForm");
//console.log(companiesForm);

companiesForm.addEventListener("submit",async (e) =>{
    e.preventDefault();
    


    let companies = {
        company_id: company_id.value,
        name: name.value,
        industry: industry.value,
    };
    console.log(companies);

    await fetch(`${baseURL}/companies`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(companies),
    });
    
    alert("Companies added Successfuly");

});