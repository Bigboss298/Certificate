var draggableImage = document.getElementById("drag-source");
var parentDiv = document.getElementById("drop-target");



draggableImage.addEventListener("dragstart", function(event) {
     event.dataTransfer.setData("text/plain", event.target.id);
});

parentDiv.addEventListener("dragover", function(event) {
     event.preventDefault(); // Allow dropping
   });

   parentDiv.addEventListener("drop", function(event) {
     event.preventDefault(); 
   
     // Get the ID of the dragged image from the dataTransfer object
     var draggedImageId = event.dataTransfer.getData("text/plain");

     var draggedImage = document.getElementById(draggedImageId);

     // Calculate the new position based on the mouse pointer's position relative to the parent div
     var newX = event.clientX - parentDiv.offsetLeft;
     var newY = event.clientY - parentDiv.offsetTop;
   
     // Set the new position of the dragged image
     draggedImage.style.left = newX + "px";
     draggedImage.style.top = newY + "px";
   

     parentDiv.appendChild(draggedImage);
   });
   

