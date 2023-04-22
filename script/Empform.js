console.log("working");

const submitData = () => {
    const name = $('.name-input').val();

    if(name.length <= 0){
        alert("Please enter name !!!");
    }

    const profile = $('input[id="profilepic"]:checked').val();

    if(profile == null){
        alert("Please select image");
    }

    const gender = $('input[id="gender"]:checked').val();

    if(gender == null){
        alert("Please select gender");
    }

    const departments = [];
    $('input[type="checkbox"]:checked').each(function () {
        departments.push($(this).val());
    })

    if(departments.length == 0){
        alert("Please select departments");
    }

    const salary = $('#salary').val();
    if(salary == null){
        alert("Please select salary");
    }
    const day = $('#Day').val();
    if(day == null){
        alert("Please select day");
    }
    const month = $('#Month').val();
    if(month == null){
        alert("Please select month");
    }
    const year = $('#Year').val();
    if(year == null){
        alert("Please select year");
    }
    const note = $('#note').val();
    if(note == null){
        alert("Please write note");
    }

    // console.log(name);
    // console.log(profile);
    // console.log(gender);
    // console.log(departments);
    // console.log(salary);

    let EmpData = {
        "name": name,
        "profilePic": profile,
        "gender": gender,
        "department": departments,
        "salary": salary,
        "startDate": day + " " + month + " " + year,
        "note": note
    }

    // console.log(EmpData);

    if(EmpData.name == null | EmpData.profilePic == null | EmpData.gender == null | EmpData.department == null | EmpData.salary == null | EmpData.startDate == null |EmpData.note == null){
        alert("Please fill form completely!!");
        return false;
    }
    else {

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/employees",
            contentType: "application/json",
            data: JSON.stringify(EmpData),
            // dataType: "json",    
            success: function () {
                alert("Data Added successfully");
            },
            error: function () {
                alert("Something went wrong !!!");
            }
        });
    }

}

function backToTable() {
    window.location.href = "/page/EmpTable.html"
    console.log("cancel ");
    // return false;
}
