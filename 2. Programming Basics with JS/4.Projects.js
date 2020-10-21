function projectsHours(name, projects) {
    let projectsN = Number(projects);
    let hours = projectsN * 3;
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)
}

projectsHours("George", "4")