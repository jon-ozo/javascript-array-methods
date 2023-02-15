const companies = [
    {
        name: "Category One", category: "Finance", start: 1981, end: 2003
    },
    {
        name: "Category Two", category: "Retail", start: 1992, end: 2008
    },
    {
        name: "Category Three", category: "Auto", start: 1999, end: 2007
    },
    {
        name: "Category Four", category: "Retail", start: 1989, end: 2010
    },
    {
        name: "Category Five", category: "Technology", start: 2009, end: 2014
    },
    {
        name: "Category Six", category: "Finance", start: 1987, end: 2010
    },
    {
        name: "Category Seven", category: "Auto", start: 1986, end: 1996
    },
    {
        name: "Category Eight", category: "Technology", start: 2011, end: 2016
    },
    {
        name: "Category Nine", category: "Retail", start: 1981, end: 1989
    }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// indexOf - the indexOf method returns the index position of an element in an array
// const age = ages.indexOf(44);
// console.log(age);

// forEach method - outputs all the elements in the array
// ages.forEach(age => console.log(age));
// companies.forEach(company => console.log(company.end));


// filter - returns a new array containing elements that meets a condition
// const age = ages.filter(age => age <= 12);
// console.log(age);

// const company = companies.filter(company => company.end === 1989);
// console.log(company);

// const eightysCoy = companies.filter(company => company.start >= 1980 && company.start < 1990);
// console.log(eightysCoy);


// const decadeCoys = companies.filter(company => (company.end - company.start) >= 10);

// const decadeCoys = companies.filter(company => {
//     result = company.end - company.start;
//     if(result >= 10) return result;
// });
// console.log(decadeCoys);


// map - returns a new array
// const companyName = companies.map(company => company.name);
// console.log(companyName);

// const agesSquare = ages.map(age => age * 2);
// console.log(agesSquare);

// const agesSquareRoot = ages.map(age => Math.sqrt(age));
// console.log(agesSquareRoot);


// sort - outputs array elements in ascending or descending order
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => console.log(`a = ${a} \n b = ${b} \n -------`));

// const sortAges = ages.sort((a, b) => (a > b ? 1 : -1));
// console.log(sortAges);

// const sortAges = ages.sort((a, b) => a - b);
// console.log(sortAges);


// reduce - gets the sum of the elements in an array
// const addCompanyYears = companies.reduce((total, company) => (company.end - company.start) + total, 0);
// console.log(addCompanyYears);

// const addAge = ages.reduce((total, age) => total + age, 0);
// console.log(addAge);


// find - much like the forEach method, find method returns the element in an array that meets a condition
// const findArr = ages.find(age => age > 1 && age <= 5);
// console.log(findArr);


// combining all methods - all methods can be combined to produce a final result. each method returns an object enabling another array to be called from the result. the process of calling methods from another method is called chaining
// const combinedMethods = companies
//     .filter(company => company.end > 2000)
//     .map(company => (company.end - company.start) * 2)
//     .sort((a, b) => a - b)
//     .reduce((total, company) => total + company, 0)

// console.log(combinedMethods); //final answer 200


