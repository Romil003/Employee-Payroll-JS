$(document).ready(function () {
    getAllData();
})

function addNewUser() {

    window.location.href = "/page/EmpForm.html";
}

function getAllData() {

    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees/",
        contentType: "application/json",

        success: function (data) {
            var employeeData = $("#table-data");
            
            console.log(data);

            $.each(data, function (key, value) {
                // console.log(`${value.department}`);
                var employee = ' ';

                employee += '<tr class="tr-2">';
                employee += ' <td ><img src=" '+ value.profilePic + '" /></td> '
                employee += '<td >' + value.name + '</td>';
                employee += '<td >' + value.gender + '</td>';

                var deptArray = value.department;
                employee += "<td>"
                deptArray.forEach(data => {
                    employee += '<span class="dept-text">' + data + " " + '</span>';
                })
                employee += "</td>";

                // employee += '<td class="dept-text">' + value.department.join('  ') + '</td>';
                employee += '<td >' + value.salary + '</td>';
                employee += '<td >' + value.startDate + '</td>';
                employee += '<td ><img src="../assets/icons/delete-black-18dp.svg" onclick="deleteUser(' + value.id + ')"><img onclick="editUser(' + value.id + ')" src="../assets/icons/create-black-18dp.svg" /></td>';
                employee += '</tr>';

                employeeData.append(employee);
                // console.log(value.department)
                // employeeData += `
                // <tr class="newrow">
                // <td class="emp-profile"><img src="${value.profilePic}" /></td>
                // <td class="emp-name">${value.name}</td>
                // <td class="emp-gender">${value.gender}</td>
                // <td >${value.department.join(' ')}</td>
                // <td class="emp-salary">${value.salary}</td>
                // <td class="emp-date">${value.startDate}</td>
                // <td style="gap: 15px;"><img src="../assets/icons/delete-black-18dp.svg" onclick="deleteUser(${value.id})"><img onclick="editUser(${value.id})" src="../assets/icons/create-black-18dp.svg" /></td>
                // </tr>
                // `
                
                
            })
        },
        error: function () {
            alert("Something went wrong !!!");
        }
    });

}


function deleteUser(id) {

    $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/employees/" + id,
        contentType: "application/json",

        success: function () {
            alert("Data deleted successfully");
        },
        error: function () {
            alert("Something went wrong !!!");
        }
    });

    // alert("Delete button clicked");
}

function editUser(id) {
         
    localStorage.setItem('empId', id);
    // console.log(localStorage.getItem('empId'))
    window.location.href = "/page/UpdateForm.html";
}

// const date = new Date();

// const day = date.getDate();
// const month = date.getMonth() +1;
// const year = date.getFullYear();
// var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

// const currentdate = day + " " + month + " " + year;
// console.log(currentdate);
// console.log(current_time);

// $('#realTime').html(current_time);
