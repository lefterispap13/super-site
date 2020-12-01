

/* js for the edit student form */
function studentData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="student1"){
  document.getElementById("first name").value ="Lefteris";
  document.getElementById("last name").value ="Papadogiannis";
  document.getElementById("dob").value ="1991-08-23";
  document.getElementById("tuition fees").value ="1500";
  }
  else if(chosen=="student2"){
    document.getElementById("first name").value ="Dimitris";
    document.getElementById("last name").value ="Dimitriou";
    document.getElementById("dob").value ="1991-06-25";
    document.getElementById("tuition fees").value ="1600";
      }
  else if(chosen=="student3"){
    document.getElementById("first name").value ="Giwrgos";
    document.getElementById("last name").value ="Gewrgiou";
    document.getElementById("dob").value ="1995-02-13";
    document.getElementById("tuition fees").value ="100";
      }
  else if(chosen=="student4"){
    document.getElementById("first name").value ="Paulos";
    document.getElementById("last name").value ="Melas";
    document.getElementById("dob").value ="1985-04-27";
    document.getElementById("tuition fees").value ="1800";
      }
  else{
    document.getElementById("first name").value ="--";
    document.getElementById("last name").value ="--";
    document.getElementById("dob").value ="--";
    document.getElementById("tuition fees").value ="--";
  }
}

/* js for the edit trainer form */
function trainerData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="Trainer1"){
  document.getElementById("first name").value ="Dimitris";
  document.getElementById("last name").value ="Nikolidakis";
  document.getElementById("subject").value="subject1"
  }
  else if(chosen=="Trainer2"){
    document.getElementById("first name").value ="Dimitris";
    document.getElementById("last name").value ="Dimitriou";
    document.getElementById("subject").value="subject2"
      }
  else if(chosen=="Trainer3"){
    document.getElementById("first name").value ="Giwrgos";
    document.getElementById("last name").value ="Gewrgiou";
    document.getElementById("subject").value="subject3"
      }
  else if(chosen=="Trainer4"){
    document.getElementById("first name").value ="Paulos";
    document.getElementById("last name").value ="Melas";
    document.getElementById("subject").value="subject4"
      }
  else{
    document.getElementById("first name").value ="--";
    document.getElementById("last name").value ="--";
    document.getElementById("subject").value="subject2"
  }
}

/* js for the edit course form */
function CourseData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="course1"){
  document.getElementById("title").value ="title1";
  document.getElementById("stream").value ="Stream1";
  document.getElementById("type").value="Type1"
  document.getElementById("startDate").value="2020-08-19"
  document.getElementById("endDate").value="2020-12-19"
  }
  else if(chosen=="course2"){
  document.getElementById("title").value ="title1";
  document.getElementById("stream").value ="Stream1";
  document.getElementById("type").value="Type2"
  document.getElementById("startDate").value="2020-08-19"
  document.getElementById("endDate").value="2021-03-24"
      }
  else if(chosen=="course3"){
  document.getElementById("title").value ="title2";
  document.getElementById("stream").value ="Stream4";
  document.getElementById("type").value="Type1"
  document.getElementById("startDate").value="2019-08-19"
  document.getElementById("endDate").value="2020-03-24"
      }
  else if(chosen=="course4"){
  document.getElementById("title").value ="title3";
  document.getElementById("stream").value ="Stream3";
  document.getElementById("type").value="Type1"
  document.getElementById("startDate").value="2021-08-19"
  document.getElementById("endDate").value="2021-12-24"
      }
  else{
  document.getElementById("title").value ="--";
  document.getElementById("stream").value ="--";
  document.getElementById("type").value="--"
  document.getElementById("startDate").value="--"
  document.getElementById("endDate").value="--"
  }
}

/* js for the edit assignment form */
function AssignmentData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="assignment1"){
  document.getElementById("title").value ="PROJECT1";
  document.getElementById("description").value ="Private School";
  document.getElementById("subDate").value="2020-12-03"
  }
  else if(chosen=="assignment2"){
    document.getElementById("title").value ="PROJECT2";
    document.getElementById("description").value ="TIC TAC TOE";
    document.getElementById("subDate").value="2020-12-25"
      }
  else if(chosen=="assignment3"){
    document.getElementById("title").value ="PROJECT3";
    document.getElementById("description").value ="CAR PARTS";
    document.getElementById("subDate").value="2021-03-05"
      }
  else if(chosen=="assignment4"){
    document.getElementById("title").value ="PROJECT$";
    document.getElementById("description").value ="CHESS GAME";
    document.getElementById("subDate").value="2021-04-07"
      }
  else{
    document.getElementById("title").value ="--";
    document.getElementById("description").value ="--";
    document.getElementById("subDate").value="--"
  }
}

/* js for the edit trainers per course form */
function TrainerPerCourseData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="tpc1"){
  document.getElementById("first name").value ="Lena";
  document.getElementById("last name").value ="Kapetanaki";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream4"
  document.getElementById("type").value="Type1"
  }
  else if(chosen=="tpc2"){
  document.getElementById("first name").value ="Giwrgos";
  document.getElementById("last name").value ="Pasparakis";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream2"
  document.getElementById("type").value="Type1"
      }
  else if(chosen=="tpc3"){
  document.getElementById("first name").value ="Dimitris";
  document.getElementById("last name").value ="Nikolidakis";
  document.getElementById("title").value="title2"
  document.getElementById("stream").value="Stream2"
  document.getElementById("type").value="Type2"
      }
  else if(chosen=="tpc4"){
  document.getElementById("first name").value ="Vladimiros";
  document.getElementById("last name").value ="Fwtiadis";
  document.getElementById("title").value="title3"
  document.getElementById("stream").value="Stream1"
  document.getElementById("type").value="Type3"
      }
  else{
  document.getElementById("first name").value ="--";
  document.getElementById("last name").value ="--";
  document.getElementById("title").value="--"
  document.getElementById("stream").value="--"
  document.getElementById("type").value="--"
  }
}

/* js for the edit students per course form */
function StudentPerCourseData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="spc1"){
  document.getElementById("first name").value ="Lefteris";
  document.getElementById("last name").value ="Papadogiannis";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream4"
  document.getElementById("type").value="Type1"
  }
  else if(chosen=="spc2"){
  document.getElementById("first name").value ="Mixalis";
  document.getElementById("last name").value ="Karvelas";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream2"
  document.getElementById("type").value="Type1"
      }
  else if(chosen=="spc3"){
  document.getElementById("first name").value ="Dimitris";
  document.getElementById("last name").value ="Nikolidakis";
  document.getElementById("title").value="title2"
  document.getElementById("stream").value="Stream2"
  document.getElementById("type").value="Type2"
      }
  else if(chosen=="spc4"){
  document.getElementById("first name").value ="Anastasia";
  document.getElementById("last name").value ="Minaidou";
  document.getElementById("title").value="title3"
  document.getElementById("stream").value="Stream1"
  document.getElementById("type").value="Type3"
      }
  else{
  document.getElementById("first name").value ="--";
  document.getElementById("last name").value ="--";
  document.getElementById("title").value="--"
  document.getElementById("stream").value="--"
  document.getElementById("type").value="--"
  }
}

/* js for the edit assignments per course form */
function AssignmentsPerCourseData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="apc1"){
  document.getElementById("assignment title").value ="PROJECT1";
  document.getElementById("description").value ="PRIVATE SCHOOL";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream1"
  document.getElementById("type").value="Type1"
  }
  else if(chosen=="apc2"){
    document.getElementById("assignment title").value ="PROJECT2";
    document.getElementById("description").value ="PRIVATE SCHOOL";
    document.getElementById("title").value="title1"
    document.getElementById("stream").value="Stream2"
    document.getElementById("type").value="Type2"
      }
  else if(chosen=="apc3"){
    document.getElementById("assignment title").value ="PROJECT3";
    document.getElementById("description").value ="CAR";
    document.getElementById("title").value="title3"
    document.getElementById("stream").value="Stream3"
    document.getElementById("type").value="Type2"
      }
  else if(chosen=="apc4"){
    document.getElementById("assignment title").value ="PROJECT4";
    document.getElementById("description").value ="HOME BUILD";
    document.getElementById("title").value="title1"
    document.getElementById("stream").value="Stream4"
    document.getElementById("type").value="Type1"
      }
  else{
    document.getElementById("assignment title").value ="--";
    document.getElementById("description").value ="--";
    document.getElementById("title").value="--"
    document.getElementById("stream").value="--"
    document.getElementById("type").value="--"
  }
}

/* js for the edit assignments per student per course form */
function AssignmentsPerStudentPerCourseData(){
  
  console.log("am runnin...");  
  
  let chosen = document.getElementById("choose").value;
  console.log(chosen); 
  if (chosen=="apspc1"){
  document.getElementById("first name").value ="Lefteris";
  document.getElementById("last name").value ="Papadogiannis";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream1"
  document.getElementById("type").value="Type1"
  document.getElementById("assignment").value="assignment1"
  document.getElementById("subDate").value="2020-12-02"
  }
  else if(chosen=="apspc2"){
  document.getElementById("first name").value ="Mixalis";
  document.getElementById("last name").value ="Karvelas";
  document.getElementById("title").value="title2"
  document.getElementById("stream").value="Stream1"
  document.getElementById("type").value="Type3"
  document.getElementById("assignment").value="assignment2"
  document.getElementById("subDate").value="2021-02-23"
      }
  else if(chosen=="apspc3"){
  document.getElementById("first name").value ="Dimitris";
  document.getElementById("last name").value ="Nikolidakis";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream2"
  document.getElementById("type").value="Type1"
  document.getElementById("assignment").value="assignment3"
  document.getElementById("subDate").value="2021-04-13"
      }
  else if(chosen=="apspc4"){
  document.getElementById("first name").value ="PROJECT1";
  document.getElementById("last name").value ="PRIVATE SCHOOL";
  document.getElementById("title").value="title1"
  document.getElementById("stream").value="Stream3"
  document.getElementById("type").value="Type2"
  document.getElementById("assignment").value="assignment4"
  document.getElementById("subDate").value="2021-05-14"
      }
  else{
  document.getElementById("first name").value ="--";
  document.getElementById("last name").value ="--";
  document.getElementById("title").value="--"
  document.getElementById("stream").value="--"
  document.getElementById("type").value="--"
  document.getElementById("assignment ").value="--"
  document.getElementById("subDate").value="--"
  }
}
