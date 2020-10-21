const http = require("http");
const { inflateRaw } = require("zlib");

let index = 8;
let matchData;
let patternID = /\/api\/courses\/(?<num>\d+)/;
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

const server = http.createServer((req, res) => {
    if (req.url === "/api/courses") {
        if (req.method === "GET") {
            res.write(JSON.stringify(courses))
        } else if (req.method === "POST") {

            let data = []
            req.on('data', chunk => {
                data.push(chunk)
            })
            req.on('end', () => {
                let decodedData = decodeURIComponent(data[0].toString());
                let patternNewCourse = /name=(?<name>[\w\s]+)&months=(?<months>[\w\s]+)&module=(?<module>[\w\s]+)/;
                let course = decodedData.match(patternNewCourse);
                index++;
                courses.push({ id: index, name: course.groups.name, months: course.groups.months, module: course.groups.module });
            })
        } else {
            res.statusCode = 400;
            res.end();

            return;
        }
    } else if ((matchData = req.url.match(patternID)) !== null) {
        let searchedCourse = courses.filter(x => x.id === Number(matchData.groups.num));
        if (req.method === "GET") {
            if (searchedCourse.length > 0) {
                res.write(JSON.stringify(searchedCourse[0]));
            } else {
                res.statusCode = 404;
                res.end();

                return;
            }
        } else if (req.method === "PUT") {
            if (searchedCourse.length > 0) {

                let data = []
                req.on('data', chunk => {
                    data.push(chunk)
                })
                req.on('end', () => {
                    let decodedData = decodeURIComponent(data[0].toString());
                    let patternName = /name=(?<name>[\w\s]+)/;
                    let name = decodedData.match(patternName);
                    let patternMonths = /months=(?<months>[\w\s]+)/;
                    let months = decodedData.match(patternMonths);
                    let patternModule = /module=(?<module>[\w\s]+)/;
                    let module = decodedData.match(patternModule);
                    let id;

                    for (let i = 0; i < courses.length; i++) {
                        if (courses[i].id === searchedCourse[0].id) {
                            id = i;
                            break;
                        }
                    }

                    if (name !== null) {
                        courses[id].name = name.groups.name;
                    }
                    if (months !== null) {
                        courses[id].months = months.groups.months;
                    }
                    if (module !== null) {
                        courses[id].module = module.groups.module;
                    }
                })

            } else {
                res.statusCode = 404;
                res.end();

                return;
            }
        } else if (req.method === "DELETE") {
            if (searchedCourse.length > 0) {

                courses = courses.filter(x => x.id !== Number(matchData.groups.num))

            } else {
                res.statusCode = 404;
                res.end();

                return;
            }
        } else {
            res.statusCode = 400;
            res.end();

            return;
        }
    } else {
        res.statusCode = 404;
    }

    res.end();
});

server.listen(3000);
console.log("Listening on port 3000......");



