function showInfo(
  userName = "UnKnown",
  userAge = "UnKnown",
  hourRate = 0,
  showSkills = "Yes",
  ...userSkills
) {
  document.write(`<div>`);
  document.write(`<h3>Welcome ${userName}</h3>`);
  document.write(`<p>Age: ${userAge}</p>`);
  document.write(`<p>Hour Rate: $${hourRate}</p>`);
  if (showSkills === "yes") {
    if (userSkills.length > 0) {
      document.write(`Skills: ${userSkills.join(" | ")}`);
    } else {
      document.write(`Skills: No Skills Yet`);
    }
  } else {
    document.write(`Skills Is Hidden`);
  }
  document.write(`</div>`);
}

showInfo("Hossam", 15, 10, "yes", "Html", "CSS", "C++");
