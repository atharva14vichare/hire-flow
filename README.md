HireFlow: Candidate Hiring & Selection Tool
Project Description
HireFlow is a full-stack web application designed to assist a single-person startup founder (you!) in quickly identifying and selecting a diverse initial team of 5 hires from a pool of applicants. Faced with a large volume of submissions and the need to scale rapidly after a successful seed round, this application provides a streamlined interface to manage candidates, apply basic filters and sorting, and facilitate the final hiring decision with a clear justification process.

The application allows you to:

View a list of all applicants.
Filter applicants by their preferred role.
Sort applicants by years of experience or a "diversity score".
Select candidates for your team.
Track the number of selected candidates (up to 5).
Finalize your team and provide a written justification for your choices.
Features
Candidate Listing: Display all available candidates with their key details (name, experience, skills, education, diversity score, soft skills, role preference).
Dynamic Filtering: Filter candidates by their rolePreference.
Dynamic Sorting: Sort candidates by experienceYears (descending) or diversityScore (descending).
Candidate Selection: Add/remove candidates from a "Selected Team" list with clear visual feedback.
Team Limit: Enforce a maximum of 5 selected candidates for the final team.
Hiring Justification: A dedicated section to explain the strategic rationale behind the selected team's composition.
Technologies Used
Frontend
React.js: A JavaScript library for building user interfaces.
HTML/CSS: Standard web technologies for structure and styling.
React Icons: For easy integration of Material Design Icons (e.g., add/remove person icons).
Backend
Node.js: A JavaScript runtime for server-side logic.
Express.js: A fast, unopinionated, minimalist web framework for Node.js.
cors middleware: For enabling Cross-Origin Resource Sharing between the frontend and backend.
body-parser middleware: For parsing incoming request bodies in a middleware before your handlers.
File System (fs module): Used as a simple "database" to read from and write to a JSON file (data.json).
Data Storage
data.json: A local JSON file serving as a mock database for candidate information.
Setup and Running Locally
Follow these steps to get HireFlow running on your local machine.

Prerequisites
Node.js (LTS version recommended)
npm (comes with Node.js) or Yarn
Git



1. Clone the Repository
First, clone this repository to your local machine:

git clone https://github.com/atharva14vichare/hire-flow.git
cd hire-flow



2. Backend Setup
Navigate into the backend directory, install dependencies, and start the server.
cd backend
npm install


Configure data.json:
Ensure you have a data.json file in your backend directory. If you don't, create one and paste your candidate data into it. An example data.json structure (as used during development) is as follows:

[
  {
    "id": "c1",
    "name": "Alice Wonderland",
    "experienceYears": 7,
    "skills": ["React", "Node.js", "GraphQL", "AWS"],
    "education": "MS Computer Science, Stanford",
    "diversityScore": 4,
    "softSkills": ["Leadership", "Mentorship"],
    "rolePreference": "Fullstack Developer",
    "status": "pending"
  },
  {
    "id": "c2",
    "name": "Bob Thebuilder",
    "experienceYears": 5,
    "skills": ["Python", "Django", "SQL", "Azure"],
    "education": "BS Software Engineering, MIT",
    "diversityScore": 3,
    "softSkills": ["Problem Solving", "Teamwork"],
    "rolePreference": "Backend Engineer",
    "status": "pending"
  }
  // ... more candidates
]


Start the Backend Server:
node server.js

The backend server will run on http://localhost:5001. You should see Server running on http://0.0.0.0:5001 and CORS configured to allow requests from http://localhost:3000 in your terminal. Keep this terminal window open.




3. Frontend Setup
cd ../frontend # Go back to the root then into frontend
npm install
npm start

The frontend application will typically open in your browser at http://localhost:3000. If port 3000 is in use, Create React App will automatically pick the next available port (e.g., 3001, 3002, 3003, etc.). If your frontend runs on a port other than 3000, you MUST update the origin in backend/server.js (e.g., origin: 'http://localhost:3003') and restart your backend.




4. Troubleshooting Ports:
If you encounter EADDRINUSE errors (port already in use) for either 3000 or 5001:

For Frontend (port 3000/300X): If it picks a new port, update your backend's CORS origin accordingly.
For Backend (port 5001): You may need to kill the process occupying it. In your terminal, run kill -9 $(lsof -ti:5001) (replace 5001 with the problematic port).








5. Usage / Demo Guide
Once both the backend and frontend are running:

View Candidates: The main page will display all available candidates.
Filter & Sort: Use the "Filter by Role" and "Sort By" dropdowns to narrow down and organize the candidate list. These filters apply to both available and already selected candidates.
Select Your Team:
Click "Select for Team" on candidate cards to add them to your "Selected Team" list on the right.
You can select up to 5 candidates.
Click "Unselect" or "Remove" to deselect a candidate.
Finalize Hiring: Once you have exactly 5 candidates selected, a "Finalize Hiring Team" button will appear. Click it.
Justify Your Choices: A section will appear prompting you to explain your hiring rationale. This is where you demonstrate your strategic thinking:
Diversity: How did you ensure a diverse team (considering experience, skills, and the diversityScore)?
Skill Set Balance: Did you pick a mix of Frontend, Backend, DevOps, Data, etc., to cover startup needs?
Experience Levels: A blend of senior leadership and promising junior talent?
Soft Skills: How do their soft skills contribute to team cohesion and company culture?
Problem Statement Alignment: How do these 5 specific individuals position the startup to "win the market and make your investors happy"?











6. Example Justification (for inspiration):

"My selected team of 5 individuals is strategically balanced for our startup's rapid growth phase. It comprises Alice Wonderland (Fullstack, 7 yrs, high diversity) for core product development and mentorship, Diana Prince (Backend, 10 yrs) to lead our scalable infrastructure, Grace Hopper (Mobile, 9 yrs, highest diversity) to drive our mobile-first strategy, Charlie Chaplin (Frontend, 3 yrs) for fresh UI/UX perspectives and growth, and Noah Wyle (Cloud, 7 yrs) to ensure our cloud architecture is robust and efficient. This blend provides a strong technical foundation, diverse viewpoints critical for innovation, and a mix of leadership with promising new talent, enabling us to build quickly and thoughtfully."