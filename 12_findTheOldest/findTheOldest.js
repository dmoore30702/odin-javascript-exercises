function ageOf(person){
    let age = 0;
    if (person.yearOfDeath){
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        let currentYear = new Date().getFullYear();
        age = currentYear - person.yearOfBirth;
    }

    console.log(person);
    console.log(age);

    return age;
}

const findTheOldest = function(people) {
    const ageSorted = people.sort((a,b) => ageOf(b) - ageOf(a));

    return ageSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
