function listCourses() {
  /**
 * @OnlyCurrentDoc
 */
  const optionalArgs = {
    pageSize: 10
  };
  try {
    // call courses.list() method to list the courses in classroom
    const response = Classroom.Courses.list(optionalArgs);
    const range = SpreadsheetApp.getActiveSpreadsheet().appendRow(["Classroom Name","Teacher Name"]);
    range.setColumnWidth(1,400);
    range.setColumnWidth(2,400);
    const courses = response.courses;
    let rowDetails = [];
    if (!courses || courses.length === 0) {
      Logger.log('No courses found.');
      return;
    }
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      try{
        const apiResponse = Classroom.Courses.Teachers.list(course.id);
        teachers = apiResponse.teachers;
        for(let j=0;j<teachers.length;j++){
          teacher = teachers[j].profile;
          if(true){
            let details = [];
            details.push(courses[i].name);
            details.push(teacher.name.fullName);
            SpreadsheetApp.getActiveSpreadsheet().appendRow(details);
          }
        }
      } catch(error){
        Logger.log(error);
      }
    }
    return rowDetails;
  } catch (err) {
    Logger.log('Failed with error %s', err.message);
  }
}

function listAssignments() {
  /**  here pass pageSize Query parameter as argument to get maximum number of result
  * @see https://developers.google.com/classroom/reference/rest/v1/courses/list
  */
  /**
 * @OnlyCurrentDoc
 */
  const optionalArgs = {
    pageSize: 10
  };
  try {
    // call courses.list() method to list the courses in classroom
    const response = Classroom.Courses.list(optionalArgs);
    const range = SpreadsheetApp.getActiveSpreadsheet().appendRow(["Classroom Name","Assignment Title", "Due Date"]);
    range.setColumnWidth(1, 400);
    range.setColumnWidth(2, 400);
    range.setColumnWidth(3, 400);
    const courses = response.courses;
    let rowDetails = [];
    if (!courses || courses.length === 0) {
      Logger.log('No courses found.');
      return;
    }
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      try{
        const apiResponse = Classroom.Courses.CourseWork.list(course.id);
        courseWorks = apiResponse.courseWork;
        for(let j=0;j<courseWorks.length;j++){
          courseWork = courseWorks[j];
          if(courseWork.workType=="ASSIGNMENT"){
            let assignment = [];
            assignment.push(courses[i].name);
            assignment.push(courseWork.title);
            assignment.push(courseWork.dueDate.day + "/" + courseWork.dueDate.month + "/" + courseWork.dueDate.year);
            SpreadsheetApp.getActiveSpreadsheet().appendRow(assignment);
          }
        }
      } catch(error){
        Logger.log(error);
      }
    }
    return rowDetails;
  } catch (err) {
    Logger.log('Failed with error %s', err.message);
  }
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Get Classroom Assignments')
      .addItem('Get Classroom Details', 'menuItem2')
      .addSeparator()
      .addItem('Insert Assignment', 'menuItem1')
      .addToUi();
}

function menuItem1() {
  listAssignments();
}

function menuItem2() {
  listCourses();
}
