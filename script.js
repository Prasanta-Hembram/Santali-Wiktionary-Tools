// https://stackoverflow.com/questions/64416109/how-to-have-contents-of-a-text-file-made-into-an-array-show-up-in-a-drop-down-li
// https://www.plus2net.com/javascript_tutorial/datalist.php


// Search function where whenever a user search a word it will open a new window in the below URL
//which is an incubator URL where user search word is added at the end of sat/  

function basicSearch() {
  var basicSubmit = document.basicForm;
  var basicWord = encodeURIComponent(basicSubmit.searchterms.value);
  window.open("https://incubator.wikimedia.org/wiki/Wt/sat/" + basicWord);
  return false;
}

// Comment: Method 1 takes input from the local text and displays the search results.
//https://www.plus2net.com/javascript_tutorial/datalist.php

{

  //your text input (use plain text without any extra maKUP)
  fetch('ᱥᱟᱱᱛᱟᱲᱤ.txt')
    .then(response => response.text())
    .then(text => {

      var str = ''; // variable to store the options
      // turn contents into array
      let textByLine = text.split("\n");

      // loop through contents
      for (var i = 0; i < textByLine.length; ++i) {
        str += '<option value="' + textByLine[i] + '" />'; // Storing options in variable
      }

      var my_list = document.getElementById("santaliwt");
      my_list.innerHTML = str;

    });


}




// Comment: Method 2 -  Alternartive way that takes input from the same local text and displays the search results.

// {

//   fetch('santali.txt')
//   .then(response => response.text())
//   .then(text => {

//     // turn contents into array
//     let textByLine = text.split("\n");

//     // loop through contents

//     let select = document.getElementById('santaliwt');

//     for (let i = 0; i < textByLine.length; i += 1) {
//         let option = document.createElement('option'),
//         text = document.createTextNode(textByLine[i]);
//         option.appendChild(text);
//         select.appendChild(option);
//     }
//     document.body.appendChild(select);
//   });



// }

      //show and hide dropdown list item on button click
      function show_hide() {
        var click = document.getElementById("list-items");
        if(click.style.display ==="none") {
           click.style.display ="block";
        } else {
           click.style.display ="none";
        } 
     }

