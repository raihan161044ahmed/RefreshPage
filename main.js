// Array of image paths
const imagePaths = ["image/img1.jpg", "image/img2.jpg", "image/img3.jpg", "image/img4.jpg"];

const names = ["Emily Brown","Ema Watson","John Doe","Michael Johnson" ];
const ages = [25, 30, 35, 28];

let index = 0;

// Function to change the images and content
function changeContent() {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");

  const card1Img = card1.querySelector(".card-img-top");
  const card1Name = card1.querySelector(".card-name");
  const card1Age = card1.querySelector(".card-age");

  const card2Img = card2.querySelector(".card-img-top");
  const card2Name = card2.querySelector(".card-name");
  const card2Age = card2.querySelector(".card-age");

  // Update the image sources
  card1Img.src = imagePaths[index];
  card2Img.src = imagePaths[(index + 1) % imagePaths.length];

  // Update the content
  card1Name.textContent = names[index];
  card1Age.textContent = `Age: ${ages[index]}`;

  card2Name.textContent = names[(index + 1) % names.length];
  card2Age.textContent = `Age: ${ages[(index + 1) % ages.length]}`;

  // Update the index
  index = (index + 2) % imagePaths.length;
}

// Initial content change
changeContent();

// Set interval to change content every 3 seconds
setInterval(changeContent, 3000);
