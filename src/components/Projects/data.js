const mainUrl="/videos"

const data = [
  {
    videoUrl: mainUrl + '/HenryFoodDemo.mp4', 
    title: "Henry Food",
    description: [
    `Individual Project developed for SoyHenry‘s Bootcamp.`,
    `In this project, the users can search for any recipe (from the backend),
    sort them by score and alphabetical order, and filter them by diet (vegan, pescatarian, etc), 
    as well as submitting a recipe of their own.`,
    `Additionally, all the recipes can be clicked to access the recipe‘s details page`,
    `Frontend developed with JavaScript, React and Redux as State Manager. CSS and Styled-Components were used for the styles.`,
    `Backend developed using PostreSQL, Express and Sequelize.It fetches data from both Spoonaculars API and its own database.`], 
    link: 'https://github.com/lucae4238/PI-Food-FT14a', 
    technologies: ["JavaScript","React", "Redux", "Styled-Components", "PostgreSQL", "Sequelize", "NodeJS & Express", "CSS"]

  }, 
  {
    videoUrl: mainUrl + '/GetNewsDemo.mp4',
    title: "Get News!",
    description: [
    `SPA developed with TypeScript, React, Redux and Material UI.`,
    `It fetches data from NewsAPI and displays it in a paginated table, which can be sorted by date. 
    The data can also be filtered in real time with the search bar. The user can visit each news article with the url button`,
    `It includes a dark mode toggle which is located in top left corner. `], 
    link: 'https://github.com/lucae4238/GetNews',
    technologies: ["React", "Redux", "Material UI", "TypeScript", "CSS"]

  }, 
  {
    imgUrl: mainUrl + "/Nala.png",
    title: "Nala Rocks", 
    description: [
    `Frontend Project developed for NALA ROCKS as a final project instance of SoyHenry‘s Bootcamp.`,
    `Development of HR planning module (management of employee‘s time off). Including a controlled form, calendar, gantt and table charts (downloadble as excel files), with responsive desgin and full translation to English, Spanish and Portuguese.`,
    `This project was developed with 4 other Henry students using agile methodologies (SCRUM), technologies like JavaScript, React, Redux, Jest (Unit Testing), Material UI, Sass, and Styled-Components, tranforming the company‘s Figma desgins to React Components.`],
    technologies: ["Git","JavaScript","React", "Redux", "Styled-Components", "Sass", "Jest", "Material UI" , "CSS"]
  }
]

export default data




