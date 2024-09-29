const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

// addingStudent

const getStudent = (req, res) => {
  try {
    const students = JSON.parse(
      readFileSync(join(__dirname, "..", "json", "students.json"), "utf-8")
    );
    res.status(200).json({ success: true, students });
  } catch (error) {
    console.log(`Error while fetching the data: ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const addStudent = (req, res) => {
  try {
    const studentData = req.body;
    const { id, f_name, mobile, password } = studentData;
    if (id && f_name && mobile && password) {
      const students = JSON.parse(
        readFileSync(join(__dirname, "..", "json", "students.json"), "utf-8")
      );
      let isStudent = students.find(
        (ele) => ele.id == id || ele.mobile == mobile
      );
      if (isStudent) {
        return res.status(400).json({ error: "Student already registered" });
      } else {
        writeFileSync(
          join(__dirname, "..", "json", "students.json"),
          JSON.stringify([...students, studentData])
        );
        return res
          .status(201)
          .json({ message: "Student registration successfully" });
      }
    } else {
      return res.status(400).json({ error: "Provide all the required Field" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "something went wrong", errorMessage: error.message });
  }
};

// studentLogin
const studentLogin = (req, res) => {
  try {
    const studentData = req.body;
    const { email, password } = studentData;
    if (email && password) {
      const students = JSON.parse(
        readFileSync(join(__dirname, "..", "json", "students.json"), "utf-8")
      );
      let isStudent = students.find(
        (ele) => ele.email == email && ele.password == password
      );
      if (isStudent) {
        return res
          .status(200)
          .json({ message: "Student logged in successfully" });
      } else {
        return res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      return res.status(400).json({ error: "Provide all the required fields" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "something went wrong", errorMessage: error.message });
  }
};

const updateStudent = (req, res) => {
  try {
    let data = req.body;
    const { id } = req.query;
    if (id) {
      const students = JSON.parse(
        readFileSync(join(__dirname, "..", "json", "students.json"), "utf-8")
      );
      let isStudent = students.find((ele) => ele.id == id);

      if (isStudent) {
        let updatedStudents = students.map((ele) => {
          if (ele.id == id) {
            return { ...ele, ...data };
          }
          return ele;
        });
        writeFileSync(
          join(__dirname, "..", "json", "students.json"),
          JSON.stringify(updatedStudents)
        );
        return res.status(200).send({ message: "student data updated" });
      } else {
        return res.status(404).send({ error: "Student not found" });
      }
    } else {
      return res.status(404).send({ error: "Id is needed" });
    }
  } catch {
    return res
      .status(500)
      .json({ error: "Something went wrong", errorMessage: error.message });
  }
};

const deleteStudent = (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const students = JSON.parse(
        readFileSync(join(__dirname, "..", "json", "students.json"), "utf-8")
      );
      const isStudent = students.find((ele) => ele.id == id);
      if (isStudent) {
        let updatedStudents = students.filter((ele) => ele.id !== id);
        writeFileSync(
          join(__dirname, "..", "json", "students.json"),
          JSON.stringify(updatedStudents)
        );
        return res
          .status(200)
          .json({ message: "Student deleted successfully" });
      } else {
        return res.status(404).json({ error: "Student not found" });
      }
    } else {
      return res.status(400).json({ error: "Provide the required id" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Something went wrong", errorMessage: error.message });
  }
};

module.exports = {
  addStudent,
  getStudent,
  studentLogin,
  updateStudent,
  deleteStudent,
};
