function generateProfile() {
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let department = document.getElementById("department").value;

  let university = document.getElementById("university").value;

  let about = document.getElementById("about").value;

  document.getElementById("pName").innerHTML = name;

  document.getElementById("pEmail").innerHTML = email;

  document.getElementById("pDepartment").innerHTML = department;

  document.getElementById("pUniversity").innerHTML = university;

  document.getElementById("pAbout").innerHTML = about;

  document.getElementById("card").style.display = "block";
}
