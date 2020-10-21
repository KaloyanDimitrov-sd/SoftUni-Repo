let courses = [
    { id: 1, name: "JS Basics", months: 2, module: null },
    { id: 2, name: "JS Fundamentals", months: 4, module: null },
    { id: 3, name: "JS Advanced", months: 2, module: "JS Advanced" },
    { id: 4, name: "JS Applications", months: 2, module: "JS Advanced" },
    { id: 5, name: "JS Back-End", months: 2, module: "JS Web" },
    { id: 6, name: "ReactJS", months: 2, module: "JS Web" },
    { id: 7, name: "HTML & CSS", months: 1, module: "Front-End" },
    { id: 8, name: "Front-End Framework", months: 3, module: "Front-End" },
]

let searched = [{ id: 1, name: "JS Basics", months: 2, module: null }];

let id = courses.indexOf(searched[0]);
console.log(id);