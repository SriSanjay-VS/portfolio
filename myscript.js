function showCourse(){
  fetch("http://localhost:8080/EnrolledStudents").then((response)=>response.json()).then((EnrolledStudents)=>{

    const dataTable=document.getElementById("enrolledtable")

    EnrolledStudents.forEach(course=>{

      var row= `<tr>
      <td>${course.id}</td>
      <td>${course.name}</td>
      <td>${course.emailId}</td>
      <td>${course.courseName}</td>
      </tr>`

      dataTable.innerHTML+=row;

    });




  });
}