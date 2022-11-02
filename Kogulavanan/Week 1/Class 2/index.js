//console.log("Class 2");

// let alp = ["A","B","C"];
// console.log(alp[0]);
// console.log(alp[1]);
// console.log(alp[2]);


// const ordinals = [
//     "Zeroeth",
//     "First",
//     "Second",
//     "Third"
//     ];
//     for (let index = 0; index <= ordinals.length-1; index += 1) {
//     let currentElement = ordinals[index];
//     console.log(currentElement);
//     }


    // const instruments = [
    //     "The Great Stalacpipe Organ",
    //     "Stylophone",
    //     "Ondes Martenot",
    //     "Sharpischord",
    //     "Hydraulophone",
    //     "Pyrophone"
    //     ];

    // for (let index = 0; index < instruments.length; index += 1) {
    //         let currentElement = instruments[index];
    //         console.log(currentElement);
    // }


let myNumber = [3,4];
myNumber.push(5);
myNumber.unshift(2);
myNumber.pop();
myNumber.shift();
console.log(myNumber);


//Excercise
// const rainbowColors = [];
// rainbowColors.push("orange");
// rainbowColors.unshift("red");
// rainbowColors.push("yellow");
// rainbowColors.push("green","blue","indigo","violet");
// // console.log(rainbowColors.length);
// // console.log(rainbowColors[1]);
// // console.log(rainbowColors[rainbowColors.length-1]);
// // console.log(rainbowColors.indexOf("blue"));

// const bookSeries = {
//     name: "In Search of Lost Time",
//     author: "Marcel Proust",
//     rating: 5,
//     books: [
//     "Swann's Way",
//     "In the Shadow of Young Girls in Flower",
//     "The Guermantes Way",
//     "Sodom and Gomorrah",
//     "The Prisoner",
//     "The Fugitive",
//     "Time Regained"
//     ]
//    };

// bookSeries.name = "Avi";
// //bookSeries.teachingAss = "Kogu";
// bookSeries["teaching Ass"] = "Aiman";
// delete bookSeries.rating;
// console.log(bookSeries);   


// const explorer = {
//     firstName: "Jack",
//     lastName: "Delta",
//     birth: {
//     day: 11,
//     month: 6,
//     year: 1910
//     }
// };

// console.log(explorer.firstName);
// console.log(explorer.lastName);
// console.log(explorer.birth.year);
// console.log(explorer.birth.day);


// const marxFamily = [
//     { name: "Groucho", birthYear: 1890 },
//     { name: "Harpo", birthYear: 1888 },
//     { name: "Chico", birthYear: 1887 },
//     { name: "Zeppo", birthYear: 1901 },
//     { name: "Gummo", birthYear: 1893 }
// ];

//     //console.log(marxFamily[1].name);    

// for(let i = 0; i < marxFamily.length; i++){
//     console.log(marxFamily[i].name);
//     console.log(marxFamily[i].birthYear);
// }
// marxFamily.forEach(e => console.log(e.name))


//Excercise
// const books = [
//     {
//         title : "Book1",
//         author : "Auth1",
//         alreadyRead : true
//     },
//     {
//         title : "Book2",
//         author : "Auth2",
//         alreadyRead : true
//     },
//     {
//         title : "Book3",
//         author : "Auth3",
//         alreadyRead : true
//     },
//     {
//         title : "Book4",
//         author : "Auth4",
//         alreadyRead : false
//     },
    
// ]

// console.log(books);
// loopBook(books);

//  function loopBook (books){
//     for (let i of books) {
//         if (i.alreadyRead) {
//             console.log("You have already read " + i.books + ", by "+ i.author);
//         }else{
//             console.log("You still need to read " + i.books + ", by "+ i.author);
//         }
//       }
//  }   


// let recipe = {
//     title: "Ginger, Apple and Banana Smoothie",
//     numberOfServes: 2,
//     ingredients: [
//         "- 500ml Milk",
//         "- 2/3 cups of vanilla protein powder",
//         "- 2 tbs rolled oats",
//         "- Pinch of cinnamon",
//         "- 2 cups of baby spinach leaves",
//         "- 2 frozen bananas",
//         "- 2 roughly chopped apples",
//         "- 1/2 avocado",
//         "- 2 tsp fresh ginger",
//         "- 6 ice cubes"
//     ]
// }


// console.log(`${recipe.title}\n\nServes: ${recipe.numberOfServes}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`);


 const movie = [
    {
        title:"Movie1",
        duration:120,
        director: "Dir1",
        stars:["star1","star2","star3","star4"]
    },
    {
        title:"Movie2",
        duration:120,
        director: "Dir2",
        stars:["star11","star22","star33","star44"]
    },
    {
        title:"Movie3",
        duration:120,
        director: "Dir3",
        stars:["star111","star222","star333","star444"]
    }
    
 ];

 movie.forEach(element => {
    let casts = element.stars.slice(0, -1).join(', ') + ', and ' + element.stars.slice(-1);
    console.log(element.title + " lasts for " + element.duration + " minutes, and was directed by " + casts);
 });