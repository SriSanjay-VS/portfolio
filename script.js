function showCourse(){
  fetch("http://localhost:8080/CourseDetails").then((response)=>response.json()).then((CourseDetails)=>{

    const dataTable=document.getElementById("coursetable")

    CourseDetails.forEach(course=>{

      var row= `<tr>
      <td>${course.courseId}</td>
      <td>${course.coursename}</td>
      <td>${course.trainer}</td>
      <td>${course.durationInweeks}</td>
      </tr>`

      dataTable.innerHTML+=row;

    });




  });
}