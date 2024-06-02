const resume = require("./resume.json");
//console.log(resume);

//Iterating over the resume array

//Using for loop

for (let i = 0; i < resume.length; i++) {
  let profile = resume[i].profile;
  let education = resume[i].education;
  let skills = resume[i].skills;
  let links = resume[i].links;
  console.log(`Name: ${profile.name},
    Job: ${profile.job},
    Email: ${profile.email},
    Location: ${profile.place.join(", ")},
    Contact: ${profile.contact},
    Date of Birth: ${profile.dob},
    Bachelor's Degree: ${education.bachelors},
    Master's Degree: ${education.masters},
    Programming Languages: ${skills["programming languages"]},
    Experience: ${skills.experience},
    GitHub: ${links.github}`);
}

//Using for in

for (let key in resume) {
  let profile = resume[key].profile;
  let education = resume[key].education;
  let skills = resume[key].skills;
  let links = resume[key].links;

  console.log(`Name: ${profile.name},
Job: ${profile.job},
Email: ${profile.email},
Location: ${profile.place.join(", ")},
Contact: ${profile.contact},
Date of Birth: ${profile.dob},
Bachelor's Degree: ${education.bachelors},
Master's Degree: ${education.masters},
Programming Languages: ${skills["programming languages"]},
Experience: ${skills.experience},
GitHub: ${links.github}`);
}

//Using for of

for (const resumes of resume) {
  const { profile, education, skills, links } = resumes;
  console.log(`Name: ${profile.name},
Job: ${profile.job},
Email: ${profile.email},
Location: ${profile.place.join(", ")},
Contact: ${profile.contact},
Date of Birth: ${profile.dob},
Bachelor's Degree: ${education.bachelors},
Master's Degree: ${education.masters},
Programming Languages: ${skills["programming languages"]},
Experience: ${skills.experience},
GitHub: ${links.github}`);
}

//Using for Each

resume.forEach((getResume) => {
  const { profile, education, skills, links } = getResume;
  console.log(`Name: ${profile.name},
Job: ${profile.job},
Email: ${profile.email},
Location: ${profile.place.join(", ")},
Contact: ${profile.contact},
Date of Birth: ${profile.dob},
Bachelor's Degree: ${education.bachelors},
Master's Degree: ${education.masters},
Programming Languages: ${skills["programming languages"]},
Experience: ${skills.experience},
GitHub: ${links.github}`);
});
