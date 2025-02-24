
// import { useState, useEffect } from "react";
// import { FaUser, FaListAlt, FaChalkboardTeacher, FaTasks, FaStar } from "react-icons/fa";
// import SkillDisplay from "./skillprogress";
// //////////////////////////////

// const fetchUserData = async () => {
//   return {
//     profile: {
//       name: "John Doe",
//       role: "Student",
//       avatarUrl: "https://www.w3schools.com/w3images/avatar2.png",
//     },
//     skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "Dart", "Flutter", "Python", "Nextjs", "Express"],
//     workshops: [
//       { title: "React for Beginners", status: "Upcoming", date: "Jan 10, 2025" },
//       { title: "Advanced JavaScript", status: "Completed", date: "Dec 20, 2024" },
//     ],
//     tasks: [
//       { name: "Complete React Fundamentals", deadline: "Jan 5th" },
//       { name: "Submit JavaScript Quiz 3", deadline: "Dec 31st" },
//     ],
//     progress: 80,
//     achievements: ["JavaScript Master", "React Beginner"],
//   };
// };

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("profile");
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const getUserData = async () => {
//       const data = await fetchUserData();
//       setUserData(data);
//     };
//     getUserData();
//   }, []);

//   if (!userData) {
//     return <div className="text-gray-400">Loading...</div>;
//   }

//   return (
//     <div className="bg-gradient-to-br from-[#000000] to-[#220A3BFF] h-screen flex flex-col items-center justify-center relative w-full">
//       {/* Sidebar */}
//       <div className="w-64 bg-transparent shadow-lg shadow-[#660F57] p-6 fixed top-0 left-0 h-full z-50 sm:w-1/3 md:w-1/4 lg:w-64">
//         <div className="text-center mb-8">
//           <img
//             src={userData.profile.avatarUrl}
//             alt="Profile"
//             className="w-24 h-24 rounded-full mx-auto border-4 border-[#812a6e]"
//           />
//           <h2 className="text-2xl mt-4 font-semibold text-white">{userData.profile.name}</h2>
//           <p className="text-sm text-gray-400">{userData.profile.role}</p>
//         </div>

//         <nav className="space-y-6">
//           {[ 
//             { name: "Profile", icon: <FaUser size={20} /> },
//             { name: "Skills", icon: <FaListAlt size={20} /> },
//             { name: "Workshops", icon: <FaChalkboardTeacher size={20} /> },
//             { name: "Tasks", icon: <FaTasks size={20} /> },
//             { name: "Achievements", icon: <FaStar size={20} /> },
//           ].map((tab) => (
//             <button
//               key={tab.name}
//               className={`w-full text-left p-4 text-lg font-medium rounded-lg flex items-center space-x-3 transition-all ${
//                 activeTab === tab.name.toLowerCase()
//                   ? "bg-gradient-to-r from-[#660F57] to-[#220A3BFF] text-white"
//                   : "bg-transparent text-[#E3D9D1] hover:bg-[#694062] hover:text-white"
//               }`}
//               onClick={() => setActiveTab(tab.name.toLowerCase())}
//             >
//               {tab.icon}
//               <span>{tab.name}</span>
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-64 p-8 bg-transparent text-white sm:ml-0 sm:p-4">
//         <header className="mb-6 flex items-center justify-between"></header>

//         {activeTab === "profile" && (
//           <div className="space-y-8">
//             <div className="bg-transparent ml-48 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
//               <h3 className="text-4xl font-semibold mb-4">Course Progress</h3>
//               <SkillDisplay />
//             </div>

//             {/* Blog Section */}
//             <section className="max-w-7xl mx-auto ml-48 px-4 sm:px-6 lg:px-4 mb-12">
//               <h2 className="text-2xl font-extrabold text-white">BLOG</h2>
//               <section className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
//                 {[ 
//                   {
//                     title: "Top 10 highest paid programming languages of 2021",
//                     image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                   },
//                   {
//                     title: "Python Frameworks",
//                     image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//                   },
//                   {
//                     title: "The best plugins for Visual Studio Code",
//                     image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
//                   },
//                 ].map((blog, index) => (
//                   <article
//                     key={index}
//                     className="relative w-full h-40 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
//                     style={{ backgroundImage: `url(${blog.image})` }}
//                   >
//                     <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
//                     <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
//                       <h3 className="text-center">
//                         <a className="text-white text-xl font-bold text-center" href="#">
//                           <span className="absolute inset-0"></span>
//                           {blog.title}
//                         </a>
//                       </h3>
//                     </div>
//                   </article>
//                 ))}
//               </section>
//             </section>
//           </div>
//         )}

//         {activeTab === "skills" && (
//           <div className="space-y-8">
//             <h3 className="text-5xl font-semibold justify-start">Skills</h3>
//             <div className="space-y-2">
//               {userData.skills.reduce((rows, skill, index) => {
//                 if (index % 6 === 0) rows.push([]);
//                 rows[rows.length - 1].push(skill);
//                 return rows;
//               }, []).map((row, rowIndex) => (
//                 <div key={rowIndex} className="flex flex-wrap space-x-4">
//                   {row.map((skill, index) => {
//                     const colors = [
//                       "bg-gray-600 text-gray-100",
//                       "bg-indigo-600 text-indigo-100",
//                       "bg-pink-600 text-pink-100",
//                       "bg-purple-600 text-purple-100",
//                       "bg-green-600 text-green-100",
//                       "bg-blue-600 text-blue-100",
//                       "bg-orange-600 text-orange-100",
//                       "bg-yellow-600 text-yellow-100",
//                       "bg-red-600 text-red-100",
//                       "bg-teal-600 text-teal-100",
//                     ];
//                     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//                     const sizes = ["4rem", "6rem", "8rem", "10rem"];
//                     const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

//                     return (
//                       <div
//                         key={index}
//                         className={`rounded-full p-2 m-1 ${randomColor} flex items-center justify-center`}
//                         style={{ width: randomSize, height: randomSize }}
//                       >
//                         <span className="text-xl font-bold">{skill}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "workshops" && (
//           <div className="space-y-8">
//             <h3 className="text-xl font-semibold">Upcoming Workshops</h3>
//             <div className="space-y-4">
//               {userData.workshops.map((workshop, index) => (
//                 <div
//                   key={index}
//                   className="bg-transparent p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
//                 >
//                   <h4 className="text-lg font-semibold">{workshop.title}</h4>
//                   <p className="text-sm text-[#E3D9D1]">{workshop.date}</p>
//                   <p className={`text-sm font-medium ${workshop.status === "Upcoming" ? "text-[#660F57]" : "text-[#E3D9D1]"}`}>
//                     {workshop.status}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "tasks" && (
//           <div className="space-y-8">
//             <h3 className="text-xl font-semibold">Upcoming Tasks</h3>
//             <div className="space-y-4">
//               {userData.tasks.map((task, index) => (
//                 <div
//                   key={index}
//                   className="bg-transparent p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
//                 >
//                   <h4 className="text-lg font-semibold">{task.name}</h4>
//                   <p className="text-sm text-[#E3D9D1]">Due by: {task.deadline}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "achievements" && (
//           <div className="space-y-8">
//             <h3 className="text-xl font-semibold">Achievements</h3>
//             <div className="flex space-x-4">
//               {userData.achievements.map((achievement, index) => (
//                 <span
//                   key={index}
//                   className="bg-gradient-to-r from-[#660F57] to-[#220A3BFF] text-white px-4 py-2 rounded-full text-sm cursor-pointer transform hover:scale-105 transition-all"
//                 >
//                   {achievement}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import { useState, useEffect } from "react";
import { FaUser, FaListAlt, FaChalkboardTeacher, FaTasks, FaStar } from "react-icons/fa";
import SkillDisplay from "./skillprogress";

const fetchUserData = async () => {
  return {
    profile: {
      name: "John Doe",
      role: "Student",
      avatarUrl: "https://www.w3schools.com/w3images/avatar2.png",
    },
    skills: ["JavaScript", "React", "Node.js", "CSS", "HTML", "Dart", "Flutter", "Python", "Nextjs", "Express"],
    workshops: [
      { title: "React for Beginners", status: "Upcoming", date: "Jan 10, 2025" },
      { title: "Advanced JavaScript", status: "Completed", date: "Dec 20, 2024" },
    ],
    tasks: [
      { name: "Complete React Fundamentals", deadline: "Jan 5th" },
      { name: "Submit JavaScript Quiz 3", deadline: "Dec 31st" },
    ],
    progress: 80,
    achievements: ["JavaScript Master", "React Beginner"],
  };
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };
    getUserData();
  }, []);

  if (!userData) {
    return <div className="text-gray-400">Loading...</div>;
  }

  return (
    <div
      className="relative w-full"
      style={{
        background: "linear-gradient(to bottom right, #000000, #06061A, #1A072D, #220A3B)",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <div
        className="w-64 bg-transparent shadow-lg shadow-[#660F57] p-6 fixed top-0 left-0 h-full z-50 sm:w-1/3 md:w-1/4 lg:w-60"
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <div className="text-center mb-8">
          <img
            src={userData.profile.avatarUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto border-4 border-[#812a6e]"
          />
          <h2 className="text-2xl mt-4 font-semibold text-white">{userData.profile.name}</h2>
          <p className="text-sm text-gray-400">{userData.profile.role}</p>
        </div>

        <nav className="space-y-6">
          {[
            { name: "Profile", icon: <FaUser size={20} /> },
            { name: "Skills", icon: <FaListAlt size={20} /> },
            { name: "Workshops", icon: <FaChalkboardTeacher size={20} /> },
            { name: "Tasks", icon: <FaTasks size={20} /> },
            { name: "Achievements", icon: <FaStar size={20} /> },
          ].map((tab) => (
            <button
              key={tab.name}
              className={`w-full text-left p-4 text-lg font-medium rounded-lg flex items-center space-x-3 transition-all ${
                activeTab === tab.name.toLowerCase()
                  ? "bg-gradient-to-r from-[#660F57] to-[#220A3BFF] text-white"
                  : "bg-transparent text-[#E3D9D1] hover:bg-[#694062] hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.name.toLowerCase())}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div
        className="flex-1 ml-72 p-8 bg-transparent text-white sm:ml-0 sm:p-4"
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <header className="mb-6 flex items-center justify-between"></header>

        {activeTab === "profile" && (
          <div className="space-y-8">
            <div className="bg-transparent ml-56 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold mb-4">Course Progress</h3>
              <SkillDisplay />
            </div>

            {/* Blog Section */}
            <section className="max-w-7xl mx-auto ml-56 px-4 sm:px-6 lg:px-4 mb-12">
              <h2 className="text-2xl font-extrabold text-white">BLOG</h2>
              <section className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {[
                  {
                    title: "Top 10 highest paid programming languages of 2021",
                    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
                  },
                  {
                    title: "Python Frameworks",
                    image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                  },
                  {
                    title: "The best plugins for Visual Studio Code",
                    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                  },
                ].map((blog, index) => (
                  <article
                    key={index}
                    className="relative w-full h-40 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                    style={{ backgroundImage: `url(${blog.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-96 h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                      <h3 className="text-center">
                        <a className="text-white text-xl font-bold text-center" href="#">
                          <span className="absolute inset-0"></span>
                          {blog.title}
                        </a>
                      </h3>
                    </div>
                  </article>
                ))}
              </section>
            </section>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="space-y-8 ml-96">
            <h3 className="text-5xl font-semibold ml-96 justify-start">Skills</h3>
            <div className="space-y-2">
              {userData.skills.reduce((rows, skill, index) => {
                if (index % 6 === 0) rows.push([]);
                rows[rows.length - 1].push(skill);
                return rows;
              }, []).map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap space-x-4">
                  {row.map((skill, index) => {
                    const colors = [
                      "bg-gray-600 text-gray-100",
                      "bg-indigo-600 text-indigo-100",
                      "bg-pink-600 text-pink-100",
                      "bg-purple-600 text-purple-100",
                      "bg-green-600 text-green-100",
                      "bg-blue-600 text-blue-100",
                      "bg-orange-600 text-orange-100",
                      "bg-yellow-600 text-yellow-100",
                      "bg-red-600 text-red-100",
                      "bg-teal-600 text-teal-100",
                    ];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    const sizes = ["4rem", "6rem", "8rem", "10rem"];
                    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

                    return (
                      <div
                        key={index}
                        className={`rounded-full p-2 m-1 ${randomColor} flex items-center justify-center`}
                        style={{ width: randomSize, height: randomSize }}
                      >
                        <span className="text-xl font-bold">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "workshops" && (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Upcoming Workshops</h3>
            <div className="space-y-4">
              {userData.workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-transparent p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold">{workshop.title}</h4>
                  <p className="text-sm text-[#E3D9D1]">{workshop.date}</p>
                  <p className={`text-sm font-medium ${workshop.status === "Upcoming" ? "text-[#660F57]" : "text-[#E3D9D1]"}`}>
                    {workshop.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tasks" && (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Upcoming Tasks</h3>
            <div className="space-y-4">
              {userData.tasks.map((task, index) => (
                <div
                  key={index}
                  className="bg-transparent p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold">{task.name}</h4>
                  <p className="text-sm text-[#E3D9D1]">{task.deadline}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Achievements</h3>
            <div className="space-y-4">
              {userData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-transparent p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold">{achievement}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
