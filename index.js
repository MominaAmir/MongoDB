const mongoose = require("mongoose");
const { create, READ, Delete, Update } = require("./models/StudentData");

mongoose
  .connect("mongodb://localhost:27017/UniversityData")
  .then(async () => {
    console.log("connection created");

    let std_Display = await create(
      "John",
      "Abey",
      "SoftwareEngineering",
      ["English", "DBMS", "FM"],
      3.14
    );
    console.log(std_Display);
    let std_Display1 = await create(
      "Mary",
      "Ben",
      "InformationTechnaology",
      ["Java", "ICT", "WEB"],
      3.7
    );
    console.log(std_Display1);
    let std_Display2 = await create(
      "Alexa",
      "Den",
      "ComputerScience",
      ["Physics", "ICT", "PakistanStudies"],
      3.0
    );
    console.log(std_Display2);
    let std_Display3 = await create(
      "Den",
      "Aly",
      "ComputerScience",
      ["Physics", "PF", "Islamiyat"],
      2.13
    );
    console.log(std_Display3);
    let std_Display4 = await create(
      "Den",
      "Aly",
      "ComputerScience",
      ["English", "DBMS", "FM"],
      3.14
    );
    console.log(std_Display4);

    let read_Info = await READ();
    console.log(read_Info);

    let deleteById = await Delete("656cb0a60df7e4f3b70d85c3");
    console.log(deleteById);

    let updateData = await Update(
      "656cb0a60df7e4f3b70d85c3",
      "Mary",
      "Ben",
      "ElectrialEngineering",
      ["English", "DBMS", "FM"],
      2.9
    );

    console.log(updateData);
  })
  .catch((err) => {
    console.log("error connectiong");
    console.log(err);
  });
