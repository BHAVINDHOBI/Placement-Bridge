const roadmapsData = {
  "Frontend Developer": {
    title: "Frontend Developer Roadmap",
    image: "/images/frontend-roadmap.png",
    sections: [
      {
        title: "HTML & CSS",
        subsections: [
          { title: "HTML Basics", description: "Learn the basics of HTML." },
          { title: "CSS Basics", description: "Learn the basics of CSS." },
          // Add more subsections here
        ],
      },
      {
        title: "JavaScript",
        subsections: [
          {
            title: "JavaScript Basics",
            description: "Understand the basics of JavaScript.",
          },
          {
            title: "ES6 and Beyond",
            description: "Learn modern JavaScript features.",
          },
          // Add more subsections here
        ],
      },
      // Add more sections here
    ],
  },
  "Backend Developer": {
    title: "Backend Developer Roadmap",
    image: "/images/backend-roadmap.png",
    sections: [
      {
        title: "Node.js",
        subsections: [
          {
            title: "Node.js Basics",
            description: "Learn the basics of Node.js.",
          },
          {
            title: "Express.js",
            description: "Learn how to use Express.js for building web apps.",
          },
          // Add more subsections here
        ],
      },
      {
        title: "Databases",
        subsections: [
          { title: "SQL", description: "Learn SQL for relational databases." },
          {
            title: "NoSQL",
            description: "Understand NoSQL databases like MongoDB.",
          },
          // Add more subsections here
        ],
      },
      // Add more sections here
    ],
  },
  // Add more roadmaps here
};

export default roadmapsData;
