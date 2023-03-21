const levels = ['beginer', 'advanced', 'expert'];
const biodata = {
    name: "Gunadi Pratama Sulistiawan",
    age: 26,
    hoobies: ["Olraga", "Music"],
    isMarried: true,
    schoolList: [{
            name: "SMKN 1 KARAWANG",
            major: "Vocational High School",
            year_in: "2011",
            year_out: "2014"
        },
        {
            name: "STMIK KHARISMA KARAWANG",
            major: "Bachelor Degree",
            year_in: "2014",
            year_out: "2019"
        }
    ],
    skills: [{
            skill_name: "Laravel",
            level: levels[0]
        },
        {
            skill_name: "CI",
            level: levels[0]
        }
    ],
    interestInCoding: true

}

console.log(biodata);