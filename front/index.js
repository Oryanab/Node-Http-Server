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
      console.log(studentName);
      break;
    case "age":
      studentAge = elementValue;
      console.log(studentAge);
      break;
    case "ability":
      studentAbility = elementValue;
      console.log(studentAbility);
      break;
  }
  //   return {
  //     name: studentName,
  //     age: studentAge,
  //     ability: studentAbility,
  //   };
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
    console.log(data, "hello " + studentName);
  } catch (e) {
    console.log(e + "failed");
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
