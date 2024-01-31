export default function getRandomColor() {
    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    return randomColor;
}