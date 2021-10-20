"use strict";

const handleGet = async () => {
  try {
    const data = await axios.get("http://localhost:8080/");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

let studentName = document.getElementById("name").innerHTML;
let studentAge = document.getElementById("age").innerHTML;
let studentAbility = document.getElementById("ability").innerHTML;

const handleChange = (e) => {
  const targetElement = e.target.id;
  const elementValue = e.target.value;

  switch (targetElement) {
    case "name":
      studentName = elementValue;
      break;
    case "age":
      studentAge = elementValue;
      break;
    case "ability":
      studentAbility = elementValue;
      break;
  }
};

clientForm.addEventListener("change", (e) => handleChange(e));

const headers = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
};

const handleSubmit = async (studentName, studentAge, studentAbility) => {
  try {
    const data = await axios.post(
      "http://localhost:8080/",
      {
        studentName,
        studentAge,
        studentAbility,
      },
      headers
    );
    try {
      if (data.data) {
        alert("Hello, " + studentName + " " + data.data);
      }
    } catch (e) {
      alert("Please Try Again");
    }
  } catch (e) {
    console.log(e + "process failed, Please Try Again");
  }
};

clientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit(studentName, studentAge, studentAbility);
});

// const submitGet = document.getElementById("submit");
// submitGet.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(studentName, studentAge, studentAbility);
//   handleGet();
// });
