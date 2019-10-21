/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// This is the code used to create the global variables 

const page = document.querySelector(".page");
const itemsEachPage = 10;
const ul = document.querySelector('.student-list');
const studentList = ul.querySelectorAll('li.student-item');

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/


// Code to log the students list into the console

console.log(studentList)


// This code will create the 'show page' function. This will hide all of the listed items except for the selected ten
const showPage = (list, page) => {
   const startIndex =(page * itemsEachPage ) - itemsEachPage;
   const endIndex = page * itemsEachPage;
// The for loop in this code will guide the user through each set of ten students- this is done as the user clicks through each page 
for (let i = 0; i < list.length; i++) {
   if (i >= startIndex && i <= endIndex) {
   list[i].style.display = "block";
   }else {
   list[i].style.display = "none";
   }
 }
};

// The appendPageLinks function is used to create links for the student pages
const appendPageLinks = (list) => {

   //  Used code from Math.ceil to keep the number to 10 students per page

let pages = Math.ceil(list.length / 10)
    let div = document.createElement('div');
    div.className = 'pagination';
    document.querySelector(".page").appendChild(div);

    // This code will add function to the buttons and append the 'A' elements to the "li" elements and then append the "li" elements to the "ul".

    const ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 1; i <= pages; i += 1) {
	const li = document.createElement('LI');
	const a = document.createElement('A');
	a.textContent = i;
	a.href = '#';
	ul.appendChild(li);
	li.appendChild(a);

// This code adds in an addEventListener- this allows the users actions to be displayed properly.
document.addEventListener('click', (e) => {
   if (e.target.tagName === 'A') {
   let link = event.target;
   let number = event.target.textContent;
// This code calls the showpage function- and it passes in the studentList variable
showPage(studentList, number);
let a = document.querySelectorAll('a');
for (let i = 0; i < a.length; i += 1) {
   a[i].className = 'none'
};
link.className = 'active'
        }
   });
}
}

// Lastly, this code calls the appendPageLinks function- this is done after creating and appending the pagination link elements.
showPage(studentList, 1);
appendPageLinks(studentList);

