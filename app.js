// "use strict";
// const background = document.querySelector('.background');
// const numberOfSpans = 300;
// for (let i = 0; i < numberOfSpans; i++) {
//     const span = document.createElement('span');
//     const x = Math.random() * 100;
//     const delay = Math.random() * 1;
//     const duration = Math.random() * 5 + 5;
//     span.style.left = `${x}vw`;
//     span.style.animationDelay = `${delay}s`;
//     span.style.animationDuration = `${duration}s`;
//     background.appendChild(span);
// }
// function goTo() {
//     window.location.href = "main.html";
// }
// function goBack() {
//     window.location.href = "index.html";
// }
// function toggleSkills() {
//     const skillsContent = document.getElementById('skills-content');
//     const toggleButton = document.querySelector('.toggle-button');
//     if (skillsContent.style.display === 'none') {
//         skillsContent.style.display = 'block';
//         toggleButton.textContent = 'Hide Skills';
//     }
//     else {
//         skillsContent.style.display = 'none';
//         toggleButton.textContent = 'Show Skills';
//     }
// }
// function generateResume() {
//     var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//     const name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim();
//     const email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim();
//     const number = (_c = document.getElementById('number')) === null || _c === void 0 ? void 0 : _c.value.trim();
//     const city = ((_d = document.querySelector('input[name="city"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || '';
//     const Skills = (_e = document.getElementById('Skills')) === null || _e === void 0 ? void 0 : _e.value.trim();
//     const degree = (_f = document.getElementById('degree')) === null || _f === void 0 ? void 0 : _f.value.trim();
//     const university = (_g = document.getElementById('university')) === null || _g === void 0 ? void 0 : _g.value.trim();
//     const graduationDate = (_h = document.getElementById('graduation-date')) === null || _h === void 0 ? void 0 : _h.value;
//     const jobTitle = (_j = document.getElementById('job-title')) === null || _j === void 0 ? void 0 : _j.value.trim();
//     const companyName = (_k = document.getElementById('company-name')) === null || _k === void 0 ? void 0 : _k.value.trim();
//     const startDate = (_l = document.getElementById('start-date')) === null || _l === void 0 ? void 0 : _l.value;
//     const endDate = (_m = document.getElementById('end-date')) === null || _m === void 0 ? void 0 : _m.value;
//     if (!name || !email || !number || !city || !degree || !university || !graduationDate || !jobTitle || !companyName || !startDate || !endDate) {
//         alert('Please fill in all required fields!');
//         return;
//     }
//     const imageUpload = document.getElementById('imageUplaod');
//     let imageUrl = '';
//     if ((_o = imageUpload === null || imageUpload === void 0 ? void 0 : imageUpload.files) === null || _o === void 0 ? void 0 : _o.length) {
//         const file = imageUpload.files[0];
//         imageUrl = URL.createObjectURL(file);
//     }
//     const resumeContent = `  

//     <h1 style="text-align: center; font-size: 2.5em; color: #333; margin-bottom: 20px; border-bottom: 2px solid #4a90e2; padding-bottom: 10px;">Resume</h1>        
//     ${imageUrl ? `<img src="${imageUrl}" alt="User Image" style="float:right; width:100px; height:100px; border-radius:50%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); margin: 0 0 20px 20px;"/>` : ''}
//     <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Personal Information</h2>
//     <p><strong style="color: #333;">Full Name:</strong> ${name}</p>
//     <p><strong style="color: #333;">Email Address:</strong> ${email}</p>
//     <p><strong style="color: #333;">Contact Number:</strong> ${number}</p>
//     <p><strong style="color: #333;">City:</strong> ${city}</p>

//     <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Skills</h2>
//     <p><strong style="color: #333;">Skills:</strong> ${Skills}</p>

//     <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Education</h2>
//     <p><strong style="color: #333;">Degree:</strong> ${degree}</p>
//     <p><strong style="color: #333;">University:</strong> ${university}</p>
//     <p><strong style="color: #333;">Graduation Date:</strong> ${graduationDate}</p>

//     <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Work Experience</h2>
//     <p><strong style="color: #333;">Job Title:</strong> ${jobTitle}</p>
//     <p><strong style="color: #333;">Company Name:</strong> ${companyName}</p>
//     <p><strong style="color: #333;">Start Date:</strong> ${startDate}</p>
//     <p><strong style="color: #333;">End Date:</strong> ${endDate}</p>
    
//     `;
//     const resumeContainer = document.getElementById('resume-content');
//     if (resumeContainer) {
//         resumeContainer.innerHTML = resumeContent;
//     }
//     alert("Resume Generated! Your Resume Has Been Generated.");
//     console.log(resumeContent);
//     const formContainer = document.getElementById('form-container');
//     const editButton = document.getElementById('edit-resume-btn');
//     if (formContainer && editButton) {
//         formContainer.style.display = 'none';
//         editButton.style.display = 'inline-block';
//     }
// }
// function editResume() {
//     const formContainer = document.getElementById('form-container');
//     const editButton = document.getElementById('edit-resume-btn');
//     if (formContainer && editButton) {
//         formContainer.style.display = 'block';
//         editButton.style.display = 'none';
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     }
// }




"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background");
  const numberOfSpans = 300;

  // Create animated background
  for (let i = 0; i < numberOfSpans; i++) {
    const span = document.createElement("span");
    const x = Math.random() * 100;
    const delay = Math.random() * 1;
    const duration = Math.random() * 5 + 5;
    span.style.left = `${x}vw`;
    span.style.animationDelay = `${delay}s`;
    span.style.animationDuration = `${duration}s`;
    background.appendChild(span);
  }

  // Navigation functions
  document.getElementById("go-to-btn").addEventListener("click", () => {
    window.location.href = "main.html";
  });

  document.getElementById("go-back-btn").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  // Toggle skills section
  document.querySelector(".toggle-button").addEventListener("click", () => {
    const skillsContent = document.getElementById("skills-content");
    const toggleButton = document.querySelector(".toggle-button");

    if (skillsContent.style.display === "none") {
      skillsContent.style.display = "block";
      toggleButton.textContent = "Hide Skills";
    } else {
      skillsContent.style.display = "none";
      toggleButton.textContent = "Show Skills";
    }
  });

  // Add dynamic skills
  document.getElementById("add-skill-btn").addEventListener("click", () => {
    const skillInput = document.getElementById("skill-input");
    const skillsList = document.getElementById("skills-list");

    if (skillInput.value.trim() !== "") {
      const skillItem = document.createElement("li");
      skillItem.textContent = skillInput.value.trim();
      skillsList.appendChild(skillItem);
      skillInput.value = "";
    }
  });

  // Add dynamic education
  document.getElementById("add-education-btn").addEventListener("click", () => {
    const educationContainer = document.getElementById("education-container");
    const educationTemplate = document.getElementById("education-template").content.cloneNode(true);
    educationContainer.appendChild(educationTemplate);
  });

  // Add dynamic job experience
  document.getElementById("add-job-btn").addEventListener("click", () => {
    const experienceContainer = document.getElementById("experience-container");
    const experienceTemplate = document.getElementById("experience-template").content.cloneNode(true);
    experienceContainer.appendChild(experienceTemplate);
  });

  // Generate Resume
  document.getElementById("generate-resume-btn").addEventListener("click", () => {
    const formElements = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      number: document.getElementById("number").value.trim(),
      city: document.querySelector("input[name='city']:checked")?.value || "",
    };

    if (Object.values(formElements).some((value) => value === "")) {
      alert("Please fill in all required fields!");
      return;
    }

    const imageUpload = document.getElementById("imageUpload");
    let imageUrl = "";
    if (imageUpload?.files?.length) {
      const file = imageUpload.files[0];
      imageUrl = URL.createObjectURL(file);
    }

    const skillsList = Array.from(document.getElementById("skills-list").children)
      .map((skill) => `<li>${skill.textContent}</li>`)
      .join("");

    const educationEntries = Array.from(document.querySelectorAll(".education-entry"))
      .map((entry) => {
        const degree = entry.querySelector(".degree").value.trim();
        const institution = entry.querySelector(".institution").value.trim();
        const graduationDate = entry.querySelector(".graduation-date").value;
        return `<p><strong>${degree}</strong> from ${institution} (${graduationDate})</p>`;
      })
      .join("");

    const jobEntries = Array.from(document.querySelectorAll(".job-entry"))
      .map((entry) => {
        const jobTitle = entry.querySelector(".job-title").value.trim();
        const companyName = entry.querySelector(".company-name").value.trim();
        const startDate = entry.querySelector(".start-date").value;
        const endDate = entry.querySelector(".end-date").value;
        return `<p><strong>${jobTitle}</strong> at ${companyName} (${startDate} - ${endDate})</p>`;
      })
      .join("");

    const resumeContent = `
      <div class="resume-container">
        ${imageUrl ? `<img src="${imageUrl}" alt="User Image" class="resume-image" />` : ""}
        <h1>${formElements.name}</h1>
        <p><strong>Email:</strong> ${formElements.email}</p>
        <p><strong>Phone:</strong> ${formElements.number}</p>
        <p><strong>City:</strong> ${formElements.city}</p>

        <h2>Skills</h2>
        <ul>${skillsList}</ul>

        <h2>Education</h2>
        ${educationEntries}

        <h2>Work Experience</h2>
        ${jobEntries}
      </div>
    `;

    const resumeContainer = document.getElementById("resume-content");
    resumeContainer.innerHTML = resumeContent;

    alert("Resume Generated! You can download it as a PDF.");
  });

  // Download Resume as PDF
  document.getElementById("download-pdf-btn").addEventListener("click", () => {
    const resumeContent = document.getElementById("resume-content");
    const opt = {
      margin: 1,
      filename: "Resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(resumeContent).set(opt).save();
  });
});
