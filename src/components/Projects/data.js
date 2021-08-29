const mainUrl="/videos"

const data = [
  {
    videoUrl: mainUrl + '/HenryFoodDemo.mp4', 
    title: "Henry Food",
    description: [`Individual Project developed for SoyHenry‘s Bootcamp.`,
    `Design and development of a SPA with the following characteristics: 
    CRUD of recipes (both from a database and an external API), sorting by name or score, 
    filtering by diet and a controlled and dynamic form to send your own recipe.`,
    `Frontend developed with JavaScript, React and Redux as State Manager. CSS and Styled-Components were used for the styles.`,
    `Backend Developed with NodeJS using Express and PostreSQL + Sequelize.`],
    link: 'https://github.com/lucae4238/PI-Food-FT14a', 
    technologies: ["JavaScript","React", "Redux", "Styled-Components", "PostgreSQL", "Sequelize", "NodeJS & Express"]

  }, 
  {
    videoUrl: mainUrl + '/GetNewsDemo.mp4',
    title: "Get News!",
    description: [`SPA developed for personal fullfilment.`,
    ` It includes: darkmode toggle, dynamic seach input and pagination of results`,
    `Developed with TypeScript, React and Redux as State Manager. Material UI was used for styling`], 
    link: 'https://github.com/lucae4238/GetNews',
    technologies: ["React", "Redux", "Material UI", "TypeScript"]

  }, 
  {
    imgUrl: mainUrl + "/Nala.png",
    title: "Nala Rocks", 
    description: [`Development of HR planning module. Including a controlled form, calendar, gantt and table charts, with responsive desgin.`,
    `Developed using agile methodologies(SCRUM), technologies like JavaScript, React, Redux, Jest Material UI, Sass, and Styled-Components, tranforming the company‘s Figma desgins to React Components.`],
    link: "https://nalarocks.com",
    technologies: ["Git","JavaScript","React", "Redux", "Styled-Components", "Sass", "Jest", "Material UI" ]
  }
]

export default data




