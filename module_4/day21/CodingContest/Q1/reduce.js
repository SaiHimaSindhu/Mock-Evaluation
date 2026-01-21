const totalMarks = students.reduce((sum, student) => {
  return sum + student.marks;
}, 0);

console.log(totalMarks);


const resultCount = students.reduce((result, student) => {
  if (student.passed) {
    result.passed += 1;
  } else {
    result.failed += 1;
  }
  return result;
}, { passed: 0, failed: 0 });

console.log(resultCount);
