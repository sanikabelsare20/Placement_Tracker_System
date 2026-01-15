let companiesContainer = document.getElementById("companies-container");
let allCompanies;

let callCompaniesFromApi = async () =>{
    allCompanies = await getCompanies();
    console.log(allCompanies);
    displayCompanies(allCompanies);
}
callCompaniesFromApi();

let displayCompanies = async (companies)=>{
    companiesContainer.innerHTML = companies.map((ele,index)=>`
    <div id="companies-card">
    <h4>Company_Id: ${ele.company_id}</h4>
    <h4>Name: ${ele.name}</h4>
    <h5>Industry: ${ele.industry}</h5>
    </div>`).join("") 
};

let newCompany = document.getElementById("newCompany");
newCompany.addEventListener("click", ()=>{
    window.location.href = "../HTML/addCompanies.html";
});

document.getElementById("allCompanies").addEventListener("click", ()=>{
    if(allCompanies && allCompanies.length > 0){
        displayCompanies(allCompanies);
    } else {
        alert("Companies data is still loading...");
    }
});
