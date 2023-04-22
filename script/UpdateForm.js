$(document).ready(function(){
    getDataforUser();
})

function getDataforUser(){

    let empId = localStorage.getItem('empId');
    console.log(empId)

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees/"+empId,
        contentType: "application/json",

        success: function (data) {
              console.log(data);

            //   let fullName = $('.name-input').inputValues('name');
              $('.name-input').val(data.name);
            //   $('input:radio[value= " '+ data.profilePic +' "]').prop('checked',true);
              $(`input:radio[value="${data.profilePic}"]`).prop("checked",true);
            //   $('input[id="gender"][value = " '+ data.gender +' "]').prop("checked",true);
              $(`input:radio[value="${data.gender}"]`).prop("checked",true);
              var dept = data.department;
                
              dept.forEach( deptName => { $(`input:checkbox[value="${deptName}"]`).prop("checked",true)});
              

              $('#salary').val(data.salary);
              var startDate = data.startDate.split(" ");
              $('#Day').val(startDate[0]);
              $('#Month').val(startDate[1]);
              $('#Year').val(startDate[2]);

              $('#note').val(data.note);

        },
        error: function () {
            alert("Something went wrong !!!");
        }
    });
}

function updatingData() {

    let empId = localStorage.getItem('empId');
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
            type: "PUT",
            url: "http://localhost:3000/employees/"+empId ,
            contentType: "application/json",
            data: JSON.stringify(EmpData),
            // dataType: "json",    
            success: function () {
                alert("Data Updated successfully");
            },
            error: function () {
                alert("Something went wrong !!!");
            }
        });
    }
}

function backToTableAgain() {
    window.location.href = "/page/EmpTable.html"
    console.log("cancel ");
    return false;
}