document.querySelector("body").style.fontFamily = "Arial, san-serif";

document.getElementById("nickname").innerText = "Kogulavanan";
document.getElementById("favorites").innerText = "Books";
document.getElementById("hometown").innerText = "Port Dickson";

let listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].className += "list-item";

}

const listClass = document.body.querySelectorAll(".list-item");
listClass.forEach(li => {
  li.style.color = "red";
})

let newImg = document.createElement("img");
newImg.setAttribute("src", "/asdasd/asd");
document.body.appendChild(newImg);



const books = [
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    alreadyRead: false
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    alreadyRead: true
  },
  {
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    alreadyRead: true
  },
  {
    title: "A Life on our Planet",
    author: "David Attenborough",
    alreadyRead: true
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    alreadyRead: false
  }
];

let ul = document.createElement("ul");
for (let j = 0; j < books.length; j++) {
  console.log(books[j])
  let myParagraph = document.createElement("p");
  let li = document.createElement("li");
  myParagraph.innerText = "Title : " + books[j].title + " By, " + books[j].author;

  li.appendChild(myParagraph);

  if (books[j].alreadyRead) {
    myParagraph.className = "read";
  } else {
    myParagraph.className = "not-read";
  }
  li.setAttribute("src", 'bookcover/url');
  ul.appendChild(li);

}
document.body.appendChild(ul);

const readBook = document.body.querySelectorAll(".read");
const notReadBook = document.body.querySelectorAll(".not-read");
readBook.forEach(rb => {
  rb.style.color = "green";
})

notReadBook.forEach(nrb => {
  nrb.style.color = "red";
})