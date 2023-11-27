// Array of image URLs
const imageUrls = [
    'image1.png',
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png',
    'image6.png',
    'image7.png',
    'image8.png',
    'image9.png',
    'image10.png',
    'image11.png',
    'image12.png'
  ];
  
  // Function to shuffle the array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to get a random subset of the shuffled array
  function getRandomSubset(array, size) {
    const shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, size);
  }
  
  // Function to load random images
  function loadRandomImages() {
    const container = document.getElementById('imageContainer');
    const uniqueImages = getRandomSubset(imageUrls, 6);
  
    container.innerHTML = '';
  
    uniqueImages.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      container.appendChild(img);
    });
  }
  
  // Call the function to load random images on page load
  window.onload = loadRandomImages;
  