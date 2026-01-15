let collegeContainer = document.getElementById("college-container");
let allColleges;

let callCollegesFromApi = async () =>{
    allColleges = await getColleges();
    console.log(allColleges);
    displayColleges(allColleges);
}
callCollegesFromApi();

let displayColleges = async (colleges)=>{
    collegeContainer.innerHTML = colleges.map((ele,index)=>`
    <div id="college-card" >
    <h4>College Name: ${ele.name}</h4>
    <h4>CollegeId: ${ele.college_id}</h4>
    <h4>College Type: ${ele.type}</h4>
    <h5>City: ${ele.location?.city || "N/A"}</h5>
    </div>`).join("") 
};

let newColleges = document.getElementById("newColleges");
newColleges.addEventListener("click", ()=>{
    window.location.href = "../HTML/addColleges.html";
});

document.getElementById("allColleges").addEventListener("click", ()=>{
    if(allColleges && allColleges.length > 0){
        displayColleges(allColleges);
    } else {
        alert("Colleges data is still loading...");
    }
});

let governmentColleges = document.getElementById("governmentColleges");

governmentColleges.addEventListener("click", ()=>{
    let filterGovernment = allColleges.filter((ele)=>{
        return ele.type==="Government";
    });

    console.log(filterGovernment);
    displayColleges(filterGovernment)   
})

let privateColleges = document.getElementById("privateColleges");

privateColleges.addEventListener("click", ()=>{
    let filterPrivate = allColleges.filter((ele)=>{
        return ele.type === "Private";
    });

    console.log(filterPrivate);
    displayColleges(filterPrivate);
})
