let index = async () =>{
    let students = await getStudents();
    let colleges = await getColleges()
    let companies = await getCompanies();
    let jobroles = await getJobRoles();
    console.log(students.length);
    console.log(colleges.length);
    console.log(companies.length);
    console.log(jobroles.length);

    let studentsbox = document.getElementById("Students");
    let collegebox = document.getElementById("Colleges");
    let companiesbox = document.getElementById("Companies");
    let jobrolesbox = document.getElementById("Jobs")

    studentsbox.innerHTML =`<h2>Total Students <br> ${students.length}</h2>`;
    collegebox.innerHTML =`<h2>Total Colleges <br> ${colleges.length}</h2>`;
    companiesbox.innerHTML =`<h2>Total Companies <br> ${companies.length}</h2>`;
    jobrolesbox.innerHTML =`<h2>Total Job Roles <br> ${jobroles.length}</h2>`;
    
};

index();
