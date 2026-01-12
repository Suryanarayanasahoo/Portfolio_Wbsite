const works = [

   {
    title: "🌦️ Weather App",
    img: "/Project/Whether App.png",
    link: "https://suryanarayanasahoo.github.io/Weather-App/",
    repo: "https://github.com/Suryanarayanasahoo/Weather-App",
    techStack: [
      "/images/html-icon.png",
      "/images/css-icon.png",
      "/images/js-icon.png",
      "/images/bootstrap-icon.png"
    ],
    description:
      "Built a Weather App that fetches real-time weather data from an external API, allowing users to search for current weather conditions by city with an intuitive interface.",
    },

    {
    title: "📄 Resume Builder",
    img: "/Project/react.png",
    link: "https://github.com/AuroSampad2003/User-Management-System",
    repo: "https://github.com/AuroSampad2003/User-Management-System",
    techStack: [
      "/images/html-icon.png",
      "/images/css-icon.png",
      "/images/js-icon.png",
      "/images/bootstrap-icon.png",
      "/images/react-icon.png"
    ],
    description:
    "Build professional resumes quickly using an intuitive and user-friendly interface. Create, customize, and download resumes that highlight your skills, education, and experience effectively."

  },
   {
    title: "📚 E-Notes Application",
    img: "/Project/Enote.png",
    link: "https://github.com/Suryanarayanasahoo/Enotes",
    repo: "https://github.com/Suryanarayanasahoo/Enotes",
    techStack: [
      "/images/java-icon.png",
      "/images/mysql-icon.png",
      "/images/bootstrap-icon.png"
    ],
    description:
      "Developed an E-Notes Application enabling users to create, edit, and manage notes with a user-friendly interface and robust backend support.",
  },

  {
    title: "🎬 Movie Browsing Website",
    img: "/Project/MOvie.png",
    link: "https://suryanarayanasahoo.github.io/Movie-Browsing-Website/",
    repo: "https://github.com/Suryanarayanasahoo/Movie-Browsing-Website",
    techStack: [
     "/images/html-icon.png",
      "/images/css-icon.png",
      "/images/js-icon.png",
      "/images/bootstrap-icon.png",
    ],
    description:
     "Developed a responsive movie browsing platform with real-time API data, genre filtering, and detailed movie views."
  },
 
  {
    title: " ✅To-Do List",
    img: "/Project/Todo.png",
    link: "https://github.com/Suryanarayanasahoo/To-do-List",
    repo: "https://suryanarayanasahoo.github.io/To-do-List/",
    techStack: [
      "/images/html-icon.png",
      "/images/css-icon.png",
      "/images/js-icon.png",
      "/images/bootstrap-icon.png"

    ],
    description:
      "Created a dynamic To-Do List application with features for adding, editing, deleting, and marking tasks as completed, enhancing productivity and task management.",
  },
  
 
  {
    title: "👥 User Management System",
    img: "/Project/USER.png",
    link: "https://github.com/Suryanarayanasahoo/USER_MANAGEMENT_SYSTEM",
    repo: "https://github.com/Suryanarayanasahoo/USER_MANAGEMENT_SYSTEM",
    techStack: [
      "/images/java-icon.png",
      "/images/hibernate-icon.png",
      "/images/mysql-icon.png",
      "/images/bootstrap-icon.png"
    ],
    description:
      "Developed a User Management System for 1,000+ users with secure login, profile management, and role-based authentication, ensuring efficiency and security in a seamless user experience.",
  },

  
  
];

const worksToShowInitially = 3;

function displayWorks() {
  const workList = document.querySelector(".work-list");
  workList.innerHTML = "";

  works.forEach((work, index) => {
    const workItem = document.createElement("div");
    workItem.classList.add("work-item");
    workItem.innerHTML = `
            <img src="${work.img}" alt="${work.title}">
            <div class="work-info">
              <h3>${work.title}</h3>
              <p>${work.description}</p>

              <!-- New horizontal container -->
              <div class="bottom-row">
                  <!-- Left side: Link buttons -->
                  <div class="link-buttons">
                      <a href="${work.link}" target="_blank">
                          <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                      <a href="${work.repo}" target="_blank">
                          <i class="fa-solid fa-code"></i>
                      </a>
                  </div>

                  <!-- Right side: Tech stack -->
                  <div class="tech-stack">
                    ${Array.isArray(work.techStack) && work.techStack.length > 0
                          ? work.techStack.map(icon => `
                            <img src="${icon}" alt="Tech icon" class="tech-icon" />
                          `).join('')
                          : '' // show nothing if no tech stack
                        }
                  </div>
              </div>
            </div>
        `;

    if (index >= worksToShowInitially) {
      workItem.classList.add("hidden-work");
    }

    workList.appendChild(workItem);
  });

  const seeMoreBtn = document.getElementById("seeMoreWorksBtn");
  if (works.length > worksToShowInitially) {
    seeMoreBtn.style.display = "block";
  } else {
    seeMoreBtn.style.display = "none";
  }
}

function toggleWorks() {
  const workItems = document.querySelectorAll(".work-item");
  const seeMoreBtn = document.getElementById("seeMoreWorksBtn");

  if (seeMoreBtn.innerText === "See More") {
    workItems.forEach((item) => item.classList.remove("hidden-work"));
    seeMoreBtn.innerText = "See Less";
  } else {
    workItems.forEach((item, index) => {
      if (index >= worksToShowInitially) {
        item.classList.add("hidden-work");
      }
    });
    seeMoreBtn.innerText = "See More";
  }
}

window.onload = displayWorks;
