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
    res.write("hey");
    res.end();
    return;
  }
  // check in db:
  function checkName(name) {
    for (let invalid of validStudent.nameNotEqual) {
      if (invalid !== name) {
        return true;
      } else {
        return false;
      }
    }
  }
  function checkAge(age) {
    if (age > 20) {
      return true;
    } else {
      return false;
    }
  }
  function checkAbility(ability) {
    for (let neededAbility of validStudent.ability) {
      if (ability === neededAbility) {
        return true;
      } else {
        return false;
      }
    }
  }
  // Post requests
  req.on("data", (data) => {
    if (
      checkName(data.studentName) //&&
      //checkAge(data.studentAge) // &&
      //checkAbility(data.studentAbility)
    ) {
      body += data;
    } else {
      body += "No Match";
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
