 
      document.addEventListener("DOMContentLoaded", function () {
        const data = {
          roadmap: [
            {
              title: "Year 2, Semester 4",
              subtitle: "Laying the Foundation",
              academic: [
                "CL 203: Thermodynamics I",
                "CL 204: Heat Transfer",
                "CL 202: Fluid Mechanics",
                "CL 205: Mass Transfer I",
              ],
              skills: [
                "Initiate Python Proficiency (Focus on NumPy, SciPy, Matplotlib)",
                "Join & Actively Participate in AIChE Student Chapter",
              ],
            },
            {
              title: "Summer Break (After Year 2)",
              subtitle: "Skill Acceleration Phase",
              academic: [
                "Primary Goal: Master Aspen HYSYS",
                "Secondary Goal: Minor project with Python (e.g., data analysis)",
              ],
              skills: [
                "Complete AspenTech Learning Path (Beginner/Expert)",
                "Model a simple system (e.g., heat exchanger problem)",
              ],
            },
            {
              title: "Year 3, Semester 5",
              subtitle: "Building a Core-Heavy Profile",
              academic: [
                "CL 301: Solid & Fluid-Solid Ops",
                "CL 303: Reaction Engineering I",
                "CL 306: Mass Transfer II",
                "CL 305: Numerical Methods",
              ],
              skills: [
                "Start significant academic project using Aspen HYSYS",
                "Seek a position of responsibility in AIChE",
              ],
            },
            {
              title: "Year 3, Semester 6",
              subtitle: "Peak Performance & Application",
              academic: [
                "CL 307: Transport Phenomena",
                "CL 308: Reaction Engineering II",
                "CL 309: Process Control",
              ],
              skills: [
                "Finalize resume and apply via CCD portal",
                "Intensive mock tests and interviews",
              ],
            },
          ],
          subjects: [
            {
              name: "Fluid Mechanics",
              code: "CL 202",
              topics:
                "Principles of pumps, compressors; Flow in pipes (pressure drop); Fluidization concepts (FCC units); Drag.",
            },
            {
              name: "Heat Transfer",
              code: "CL 204",
              topics:
                "Design of heat exchangers (shell & tube); Fouling; Principles of furnaces and boilers in refineries.",
            },
            {
              name: "Reaction Engineering",
              code: "CL 303/308",
              topics:
                "Reactor design (CSTR, PFR); Catalyst functionality & deactivation; Kinetics of cracking & reforming.",
            },
            {
              name: "Mass Transfer",
              code: "CL 306",
              topics:
                "Distillation column design (McCabe-Thiele); Absorption & stripping; Solvent extraction.",
            },
            {
              name: "Process Control",
              code: "CL 309",
              topics:
                "Feedback control loops (PID); Industrial instruments (sensors); DCS/PLC systems & plant automation.",
            },
            {
              name: "Thermodynamics",
              code: "CL 203/302",
              topics:
                "Energy balance, laws of thermodynamics, phase & chemical reaction equilibria, fluid properties.",
            },
          ],
          projects: [
            {
              title: "Dynamic Simulation of a CDU",
              skills: "Aspen HYSYS (Dynamic), Thermo, Mass Transfer, Control",
              relevance:
                "Directly models the primary separation unit at Jamnagar refinery. Shows understanding of crude processing and stability.",
              star: "Analyzed the dynamic response of a CDU to feed disturbances using Aspen HYSYS. Successfully designed a PID control scheme that reduced product variability by 25% during simulated upsets.",
            },
            {
              title: "Feasibility of Green Hydrogen",
              skills:
                "Process Design, Aspen Plus, Reaction Engineering, Economics",
              relevance:
                "Aligns with RIL's push into New Energy. Shows forward-thinking and interest in strategic growth areas.",
              star: "Assessed the technical and economic feasibility of a 10 MW green hydrogen plant. Simulated the process in Aspen Plus and performed cost estimation, determining a levelized cost of hydrogen of $X/kg.",
            },
            {
              title: "Python Analysis of Kinetic Data",
              skills:
                "Python (SciPy, Matplotlib), Reaction Kinetics, Numerical Methods",
              relevance:
                "Applicable to optimizing yields in RIL's reactor units. Demonstrates strong analytical and computational skills using open-source tools.",
              star: "Analyzed batch reactor data using Python's SciPy library to determine the reaction rate law. Developed a script to fit data to multiple models and visualize results with Matplotlib, identifying the best-fit model with an R-squared of 0.98.",
            },
          ],
          selectionProcess: [
            { id: "online-test", name: "Online Assessment" },
            { id: "tech-interview", name: "Technical Interview" },
            { id: "hr-interview", name: "HR Interview" },
          ],
          selectionDetails: {
            "online-test": {
              title: "The First Hurdle: Online Assessment",
              description:
                "This initial screening is a critical elimination round. It consists of two timed sections designed to test both your general aptitude and core technical knowledge. Strong performance here is mandatory to proceed.",
              chart: true,
              points: [
                "<strong>Aptitude Test:</strong> ~30 questions in 30 mins. Covers Quantitative, Logical Reasoning, and Verbal skills. This is a heavily weighted elimination round.",
                "<strong>Technical Test:</strong> ~50 MCQs in 30 mins. Covers the entire breadth of the chemical engineering curriculum.",
                "<strong>Preparation Strategy:</strong> Dedicate 3-4 hours/week to timed aptitude tests. Systematically revise all core engineering subjects for the technical section.",
              ],
            },
            "tech-interview": {
              title: "The Decisive Stage: Technical Interview",
              description:
                "Conducted by a panel of senior RIL engineers, this 15-25 minute interview is an intense examination of your technical depth and problem-solving abilities. This is where your preparation truly pays off.",
              chart: false,
              points: [
                "<strong>Resume Deep Dive:</strong> Be prepared to defend every line of your resume, especially your projects. Expect detailed questions on your methodology and results.",
                '<strong>"Favorite Subject" Trap:</strong> Choose 2-3 subjects you know deeply. The panel will grill you on them. Thermodynamics and Mass Transfer are good choices.',
                "<strong>Core Concept Application:</strong> Be ready to solve practical problems, like explaining the working of a distillation column or applying fluid dynamics principles.",
                "<strong>Company Awareness:</strong> Research RIL's recent projects and technologies (e.g., Petcoke Gasification, O2C business) to show genuine interest.",
              ],
            },
            "hr-interview": {
              title: "The Final Check: HR Interview",
              description:
                "This 10-15 minute conversation assesses your personality, motivation, and cultural fit. Your goal is to demonstrate that you possess the soft skills to succeed in a collaborative, high-stakes environment.",
              chart: false,
              points: [
                '<strong>"Why Reliance?":</strong> Connect your career goals with RIL\'s scale and strategic direction (e.g., New Energy). Go beyond generic praise.',
                "<strong>Strengths & Weaknesses:</strong> Choose relevant strengths (e.g., analytical skills) and a manageable weakness you are actively improving.",
                "<strong>Behavioral Questions:</strong> Use the STAR (Situation, Task, Action, Result) method to answer questions about teamwork, conflict, or leadership.",
                "<strong>Future Goals:</strong> Show ambition and a commitment to a technical career path within the company.",
              ],
            },
          },
          networking: [
            {
              target: "IITG Alumnus at RIL",
              connection:
                "Dear [Name], I'm a 2nd-year ChemE student at IIT Guwahati and came across your profile. I'm very interested in a career in the petrochemical industry and would be grateful to connect with a fellow IITian at Reliance. Thank you, [Your Name].",
              followup:
                "Dear [Name], Thank you for connecting. I'm currently exploring career paths in process engineering and would be immensely grateful for 15 minutes of your time to learn about your journey at Reliance. Would you be open to a brief chat sometime next week?",
            },
            {
              target: "Former RIL Intern",
              connection:
                "Hi [Name], I'm a ChemE student at IITG preparing for the upcoming internship season. I found your profile and saw you interned at Reliance. I would be very grateful to connect and learn from your experience. Thanks, [Your Name].",
              followup:
                "Hi [Name], Thanks for connecting! I'm hoping to secure an internship at Reliance next year. If you have a moment, I'd love to ask a couple of quick questions about your project and your advice for the selection process. Any insights you could share would be incredibly helpful.",
            },
            {
              target: "RIL Recruiter / HR",
              connection:
                "Dear [Name], I am a Chemical Engineering student at IIT Guwahati with a strong interest in Reliance's GET Summer Internship program. I am following Reliance's recruitment updates and would appreciate the opportunity to connect. Thank you, [Your Name].",
              followup:
                "(Engage with their content. Generally, do not ask recruiters for informational interviews unless they offer). A good follow-up could be a comment on a post: 'Thank you for sharing this, found it very insightful!'",
            },
          ],
        };

        const timelineContainer = document.getElementById("roadmap-timeline");
        data.roadmap.forEach((item, index) => {
          const isEven = index % 2 === 0;
          timelineContainer.innerHTML += `
                                <div class="timeline-item relative mb-8 pl-8 md:pl-12 pb-8">
                                    <div class="timeline-dot bg-[#c4a77d] rounded-full border-4 border-white"></div>
                                    <h4 class="text-lg font-semibold text-[#0d3b66]">${
                                      item.title
                                    }</h4>
                                    <p class="text-md font-medium text-slate-500 mb-4">${
                                      item.subtitle
                                    }</p>
                                    <div class="bg-white p-4 rounded-lg shadow-sm border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h5 class="font-semibold text-slate-700 mb-2">Academic Focus</h5>
                                            <ul class="list-disc list-inside text-sm text-slate-600 space-y-1">${item.academic
                                              .map((s) => `<li>${s}</li>`)
                                              .join("")}</ul>
                                        </div>
                                        <div>
                                            <h5 class="font-semibold text-slate-700 mb-2">Skill Development</h5>
                                            <ul class="list-disc list-inside text-sm text-slate-600 space-y-1">${item.skills
                                              .map((s) => `<li>${s}</li>`)
                                              .join("")}</ul>
                                        </div>
                                    </div>
                                </div>
                            `;
        });

        const subjectsGrid = document.getElementById("subjects-grid");
        data.subjects.forEach((subject) => {
          subjectsGrid.innerHTML += `
                                <div class="card-flip h-40">
                                    <div class="card-flip-inner">
                                        <div class="card-front bg-gradient-to-br from-slate-700 to-slate-900 p-4 text-white text-center">
                                            <h5 class="font-bold text-lg">${subject.name}</h5>
                                            <p class="text-sm opacity-80">${subject.code}</p>
                                        </div>
                                        <div class="card-back bg-white border-2 border-[#c4a77d] p-4 text-center">
                                            <h6 class="font-semibold text-sm text-[#0d3b66] mb-1">Key Interview Topics</h6>
                                            <p class="text-sm text-slate-600">${subject.topics}</p>
                                        </div>
                                    </div>
                                </div>
                            `;
        });

        const projectsGrid = document.getElementById("projects-grid");
        data.projects.forEach((project, index) => {
          projectsGrid.innerHTML += `
                                <div class="project-card bg-white p-5 rounded-lg shadow border border-slate-200 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:border-[#c4a77d] transition-all" data-index="${index}">
                                    <h5 class="font-bold text-lg text-[#0d3b66]">${project.title}</h5>
                                    <p class="text-sm text-slate-500 mt-2">${project.skills}</p>
                                    <button class="mt-4 text-sm font-semibold text-[#0d3b66] self-start">View Details &rarr;</button>
                                </div>
                            `;
        });

        const selectionProcessContainer =
          document.getElementById("selection-process");
        data.selectionProcess.forEach((step, index) => {
          const isLast = index === data.selectionProcess.length - 1;
          selectionProcessContainer.innerHTML += `
                                <button class="selection-step-btn border-2 border-slate-300 bg-white text-slate-600 font-medium py-2 px-4 rounded-lg transition-all" data-id="${
                                  step.id
                                }">
                                    ${step.name}
                                </button>
                                ${
                                  !isLast
                                    ? '<div class="h-1 w-12 bg-slate-300 md:h-px md:w-8"></div>'
                                    : ""
                                }
                            `;
        });

        let selectionChart = null;
        function updateSelectionDetails(stepId) {
          const details = data.selectionDetails[stepId];
          const container = document.getElementById(
            "selection-details-container"
          );

          if (selectionChart) {
            selectionChart.destroy();
            selectionChart = null;
          }

          container.innerHTML = `
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                    <div id="selection-text" class="md:order-1 ${
                                      details.chart ? "md:order-2" : ""
                                    }">
                                         <h5 class="font-bold text-xl text-[#0d3b66] mb-2">${
                                           details.title
                                         }</h5>
                                         <p class="text-slate-600 mb-4">${
                                           details.description
                                         }</p>
                                         <ul class="space-y-3 text-sm list-inside">
                                             ${details.points
                                               .map(
                                                 (p) =>
                                                   `<li class="flex items-start"><span class="text-lg text-[#0d3b66] mr-2">&#8227;</span><span>${p}</span></li>`
                                               )
                                               .join("")}
                                         </ul>
                                    </div>
                                    <div id="selection-chart-container" class="md:order-2 ${
                                      details.chart ? "md:order-1" : ""
                                    } chart-container relative w-full max-w-xs mx-auto h-64">
                                        ${
                                          details.chart
                                            ? '<canvas id="aptitude-chart"></canvas>'
                                            : '<div class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center"><p class="text-slate-500">No chart for this step.</p></div>'
                                        }
                                    </div>
                                </div>
                            `;

          if (details.chart) {
            const ctx = document
              .getElementById("aptitude-chart")
              .getContext("2d");
            selectionChart = new Chart(ctx, {
              type: "doughnut",
              data: {
                labels: ["Aptitude (Elimination)", "Technical Knowledge"],
                datasets: [
                  {
                    data: [60, 40],
                    backgroundColor: ["#c4a77d", "#0d3b66"],
                    borderColor: "#FDF8F0",
                    borderWidth: 4,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                  title: {
                    display: true,
                    text: "Online Test Weightage (Illustrative)",
                    padding: { top: 10, bottom: 10 },
                  },
                },
                cutout: "60%",
              },
            });
          }
        }

        document.querySelectorAll(".selection-step-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            document.querySelectorAll(".selection-step-btn").forEach((b) => {
              b.classList.remove(
                "bg-[#0d3b66]",
                "text-white",
                "border-[#0d3b66]"
              );
              b.classList.add("bg-white", "text-slate-600", "border-slate-300");
            });
            btn.classList.add("bg-[#0d3b66]", "text-white", "border-[#0d3b66]");
            btn.classList.remove(
              "bg-white",
              "text-slate-600",
              "border-slate-300"
            );
            updateSelectionDetails(btn.dataset.id);
          });
        });

        document.querySelector(".selection-step-btn").click();

        const networkingContainer = document.getElementById(
          "networking-container"
        );
        data.networking.forEach((item) => {
          const template = `
                                <div class="networking-item bg-slate-50 border border-slate-200 rounded-lg">
                                    <button class="w-full text-left p-4 flex justify-between items-center font-semibold text-slate-800">
                                        <span>${item.target}</span>
                                        <span class="transform transition-transform text-[#c4a77d]">&#9662;</span>
                                    </button>
                                    <div class="details hidden p-4 border-t border-slate-200 space-y-4">
                                        <div>
                                            <h6 class="font-semibold text-sm mb-1 text-slate-700">Connection Request Template</h6>
                                            <div class="relative">
                                                <p class="text-sm text-slate-600 bg-white p-3 rounded-md pr-10">${item.connection}</p>
                                                <button class="copy-btn absolute top-2 right-2 p-1 text-slate-500 hover:text-[#0d3b66] rounded" title="Copy text">&#128203;</button>
                                            </div>
                                        </div>
                                         <div>
                                            <h6 class="font-semibold text-sm mb-1 text-slate-700">Follow-up Message Template</h6>
                                            <div class="relative">
                                                <p class="text-sm text-slate-600 bg-white p-3 rounded-md pr-10">${item.followup}</p>
                                                <button class="copy-btn absolute top-2 right-2 p-1 text-slate-500 hover:text-[#0d3b66] rounded" title="Copy text">&#128203;</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
          networkingContainer.innerHTML += template;
        });

        document
          .querySelectorAll(".networking-item button:first-child")
          .forEach((button) => {
            button.addEventListener("click", () => {
              const details = button.nextElementSibling;
              const arrow = button.querySelector("span:last-child");
              details.classList.toggle("hidden");
              arrow.classList.toggle("rotate-180");
            });
          });

        document.querySelectorAll(".copy-btn").forEach((button) => {
          button.addEventListener("click", (e) => {
            const textToCopy = e.target
              .closest("div")
              .querySelector("p").innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
              const originalText = button.innerHTML;
              button.innerHTML = "&#10003;";
              setTimeout(() => {
                button.innerHTML = originalText;
              }, 2000);
            });
          });
        });

        const modal = document.getElementById("project-modal");
        const modalTitle = document.getElementById("modal-title");
        const modalBody = document.getElementById("modal-body");
        const modalCloseButton = document.getElementById("modal-close-button");

        document.querySelectorAll(".project-card").forEach((card) => {
          card.addEventListener("click", () => {
            const project = data.projects[card.dataset.index];
            modalTitle.innerText = project.title;
            modalBody.innerHTML = `
                                    <div>
                                        <h4 class="font-semibold text-slate-800">Key Skills Utilized</h4>
                                        <p>${project.skills}</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-slate-800">Relevance to Reliance</h4>
                                        <p>${project.relevance}</p>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-slate-800">Potential Resume Bullet Point (STAR Method)</h4>
                                        <p class="bg-slate-100 p-3 rounded-md italic">"${project.star}"</p>
                                    </div>
                                `;
            modal.classList.remove("opacity-0", "pointer-events-none");
            modal.querySelector("#modal-content").classList.remove("scale-95");
          });
        });

        function closeModal() {
          modal.querySelector("#modal-content").classList.add("scale-95");
          modal.classList.add("opacity-0", "pointer-events-none");
        }
        modalCloseButton.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            closeModal();
          }
        });

        const navLinks = document.querySelectorAll(".nav-link");
        const sections = document.querySelectorAll("main section[id]");

        function changeNav() {
          let index = sections.length;
          while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.nav-link[href="#${sections[index].id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
        changeNav();
        window.addEventListener("scroll", changeNav);

        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenuButton.addEventListener("click", () => {
          mobileMenu.classList.toggle("hidden");
        });
      });
    
