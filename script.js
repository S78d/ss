const colors = ["#ff9a9e", "#fad0c4", "#fbc2eb", "#a6c1ee", "#84fab0"]; // कलर लिस्ट
const flowerImages = [
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt5f18c2119ce26485/6668df65db90945e0caf9be6/beautiful-flowers-lotus.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt7211f8e1a56f013e/6668df67a4c2f6572a16d576/beautiful-flowers-tulip.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6cae99a21cd09910/6668df6711fac20abdf51dd7/beautiful-flowers-passion-flower.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt628c4ca0754c7ceb/6668df69eca9a676ee3250a8/beautiful-flowers-lily.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt628c4ca0754c7ceb/6668df69eca9a676ee3250a8/beautiful-flowers-lily.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blte4a34ee5c8893f33/6668df69ee20f5fc0e6dcb06/beautiful-flowers-ranunculus.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6df19d82b7c65f4c/6668df6a7364491e7fde36fd/beautiful-flowers-peony.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt49c5922ea8d21ec1/6668df66a9d1ce42ea669931/beautiful-flowers-bleeding-heart.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltb0fc8c3edd349106/6668df63a62e8d63e6e051b2/beautiful-flowers-dahlia.jpg?q=70&width=750&auto=webp',
    'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt134818d279038650/6668df6434f6fb5cd48aac34/beautiful-flowers-rose.jpeg?q=70&width=750&auto=webp',
];

document.getElementById('game-area').addEventListener('click', function(event) {
    const numFlowers = 30; // एक क्लिक पर कितने फूल दिखाने हैं
    for (let i = 0; i < numFlowers; i++) {
        createFlower(event.clientX, event.clientY);
    }

    // बैकग्राउंड कलर बदलें
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // h1 का कलर बदलें
    const h1 = document.querySelector('h1');
    h1.style.color = colors[Math.floor(Math.random() * colors.length)];
});

function createFlower(x, y) {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // रैंडम फूल की इमेज चुनें
    const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];
    flower.style.backgroundImage = `url('${randomImage}')`;

    const offsetX = (Math.random() - 0.5) * 200;
    const offsetY = (Math.random() - 0.5) * 200;
    flower.style.left = `${x + offsetX - 25}px`;
    flower.style.top = `${y + offsetY - 25}px`;
    const size = Math.random() * 50 + 30;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    const rotation = Math.random() * 360;
    flower.style.transform = `rotate(${rotation}deg)`;
    document.getElementById('game-area').appendChild(flower);
    setTimeout(() => {
        flower.remove();
    }, 60000);
}