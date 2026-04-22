/*

Validate class posts.

*/

function validateMyClass(req, res, next) {
  const { className, instructor, semester, grade } = req.body;

  // Required: className
  if (!className || typeof className !== "string" || className.trim() === "") {
    return res.status(400).json({ error: "className is required" });
  }

  // Required: instructor
  if (!instructor || typeof instructor !== "string" || instructor.trim() === "") {
    return res.status(400).json({ error: "instructor is required" });
  }

  // Required: semester
  const validSemesters = ["Fall", "Winter", "Spring"];
  if (!semester || !validSemesters.includes(semester)) {
    return res.status(400).json({error: "semester must be Fall, Winter, or Spring"});
  }

  // Optional: grade (only validate if provided)
  const validGrades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];

  if (grade !== undefined && !validGrades.includes(grade)) {
    return res.status(400).json({error: "grade must be a valid letter grade"});
  }

  next();
}

module.exports = validateMyClass;