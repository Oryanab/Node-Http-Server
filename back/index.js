const http = require("http");
const { validStudent } = require("./db");

const port = 8080;

const server = http.createServer((req, res) => {
  let body = "";
  // headers
  res.writeHead(200, "ok", {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
  });
  // get main route
  if (req.method === "GET" && req.url === "/") {
    res.write(body);
    res.end();
    return;
  }
  // check in db:
  function checkName(name) {
    for (let invalid of validStudent.nameNotEqual) {
      if (invalid !== name && !parseInt(name)) {
        return true;
      } else {
        return false;
      }
    }
  }
  function checkAge(age) {
    if (age >= validStudent.minAge && age <= validStudent.maxAge) {
      return true;
    } else {
      return false;
    }
  }
  function checkAbility(ability) {
    let allGoodAbilities;
    validStudent.ability.forEach((needed) => {
      allGoodAbilities += needed + " ";
    });
    if (allGoodAbilities.includes(ability)) {
      return true;
    } else {
      return false;
    }
  }
  // Post requests
  req.on("data", (data) => {
    const jsonData = JSON.parse(data);
    if (
      checkName(jsonData.studentName) &&
      checkAge(jsonData.studentAge) &&
      checkAbility(jsonData.studentAbility)
    ) {
      body += "Welcome to Cyber4s";
    } else {
      body += "We Are Sorry You cant sign In";
    }
  });

  // rend of request
  req.on("end", () => {
    res.write(body);
    res.end();
  });
});

server.listen(port, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("server listening on" + port);
  }
});

// studentAbility: "ddd"
// studentAge: "ddd"
// studentName: "ddd"
