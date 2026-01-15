let collegeForm =document.getElementById("collegeForm");
//console.log(collegeForm);

collegeForm.addEventListener("submit",async (e) =>{
    e.preventDefault();
    //console.log("Hello");
    // console.log(studentName.value);
    // console.log(studentGender.value);
    // console.log(programing.value.split(","));

    let college = {
        college_id: college_id.value,
        name: name.value,
        type: type.value,
        affiliated_to: affiliated_to.value,
        established_year: established_year.value,
        location:{
            city: city.value,
            state: state.value,
            country: country.value,
            pincode: pincode.value,
        },
        departments:{
            departments: departments.value.split(","),
        },
        total_students: total_students.value,
    };
    console.log(college);

    await fetch(`${baseURL}/colleges`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(college),
    });
    
    alert("College added Successfuly");

});