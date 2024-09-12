function updateImage() {
    const image = document.getElementById("image").value;
    const shape = document.getElementById("shape").value;
    const borderColor = document.getElementById("borderColor").value;

    const outputDiv = document.getElementById("output");
    const selectedImage = document.getElementById("selectedImage");

    if (shape === 'segitiga') {
        outputDiv.className = 'segitiga';
        outputDiv.style.borderBottomColor = borderColor;
        outputDiv.style.backgroundColor = 'transparent'; // Add this line
        selectedImage.style.display = 'none';
    } else {
        outputDiv.className = shape;
        outputDiv.style.border = `5px solid ${borderColor}`;
        outputDiv.style.backgroundColor = 'white'; // Add this line
        selectedImage.style.display = 'block';
        selectedImage.src = image;
    }
}