let studentForm =document.getElementById("studentForm");
//console.log(studentForm);

studentForm.addEventListener("submit",async (e) =>{
    e.preventDefault();
    //console.log("Hello");
    // console.log(studentName.value);
    // console.log(studentGender.value);
    // console.log(programing.value.split(","));


    let student = {
        personal_info:{
            full_name: studentName.value,
            gender: studentGender.value,
            date_of_birth: dob.value,
            profile_image: profileimg.value,
        },
        academic_info:{
            college_id: collegeId.value,
            department: department.value,
            degree: degree.value,
            graduation_year: graduation.value,
            cgpa: cgpa.value,
            backlogs: backlogs.value,
        },
        skills:{
            programming: programing.value.split(","),
            databases: databases.value.split(","),
            tools: tools.value.split(","),
        },
        placement_status: placementStatus.value,
    };
    console.log(student);

    await fetch(`${baseURL}/students`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(student),
    });
    
    alert("Student added Successfuly");

});