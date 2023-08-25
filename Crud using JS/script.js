// function to validate data form inputs before submitting data
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  if (name == "") {
    alert("Name is required");
    return false;
  }
  if (age == "") {
    alert("Age is required");
    return false;
  }
  if (age < 1) {
    alert("Age must not be zero or less than zero");
    return false;
  }
  if (email == "") {
    alert("Email is required");
    return false;
  }
  if (address == "") {
    alert("Address is required");
    return false;
  } else if (!email.includes("@")) {
    alert("Invalid email address");
    return false;
  }
  return true;
}
// function to show data
function showData() {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  var html = "";
  peopleList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.email + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger">Delete</button><button onclick= "updateData(' +
      index +
      ')" class="btn btn-warning m-2">Edit</button></td>';
    html += "</tr>";
  });
  document.querySelector("#crudTable tbody").innerHTML = html;
}
// laods all data when document or page reloaded
document.onload = showData();
// fucntion tio add data
function AddData() {
  if (validateForm() == true) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.push({
      name: name,
      email: email,
      age: age,
      address: address,
    });
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
  }
}
// function to delete data from local storage

function deleteData(index) {
  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}

// function to update or edit the data in local storage
function updateData(index) {
  // submit button will hide and update button will show for updating of data in local storage
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  var peopleList;
  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("email").value = peopleList[index].email;
  document.getElementById("age").value = peopleList[index].age;
  document.getElementById("address").value = peopleList[index].address;
  document.querySelector("#Update").onclick = function () {
    if (validateForm() == true) {
      peopleList[index].name = document.getElementById("name").value;
      peopleList[index].email = document.getElementById("email").value;
      peopleList[index].age = document.getElementById("age").value;
      peopleList[index].address = document.getElementById("address").value;
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("age").value = "";
      document.getElementById("address").value = "";
      // Update button will hide and submit button will show for updating of data in local storage
      document.getElementById("Submit").style.display = "block";
      document.getElementById("Update").style.display = "none";
    }
  };
}
