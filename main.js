// Loading sahifasini ko'rsatish va keyin asosiy sahifaga o'tish
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-page').style.display = 'none';
        document.getElementById('main-page').style.display = 'block';
    }, 3000); // 3 soniya kutadi
});

// Yulduzda ismni yozish
document.getElementById('star-btn').addEventListener('click', function() {
    let name = document.getElementById('star-name').value;
    let result = document.getElementById('star-result');
    result.innerHTML = `Твое имя, ${name}, засветилось на небе звездами! ✨`;
});

// Tasodifiy romantik tabrik
const wishes = [
    "Ты моя единственная и неповторимая!",
    "Каждый миг с тобой — счастье.",
    "Я люблю тебя больше всего на свете!",
    "Ты делаешь меня лучше каждый день.",
    "С тобой я нашел своё счастье."
];

document.getElementById('wish-btn').addEventListener('click', function() {
    let randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById('wish-result').innerText = randomWish;
});

// Tasodifiy romantik sahifa
const surprises = [
    "Сюрприз! Ты выиграла билет на романтический ужин!",
    "Сюрприз! Ты получишь огромный букет цветов!",
    "Сюрприз! Нас ждет незабываемое приключение!",
    "Сюрприз! Я подарю тебе волшебный вечер!",
    "Сюрприз! Я приготовил для тебя особенный подарок!"
];

document.getElementById('random-surprise-btn').addEventListener('click', function() {
    let randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    document.getElementById('random-surprise-result').innerText = randomSurprise;
});

// Menga nima yoqadi
document.getElementById('reveal-likes-btn').addEventListener('click', function() {
    let likesResult = document.getElementById('likes-result');
    likesResult.innerHTML = "<ul><li>Твоя улыбка</li><li>Твои глаза</li><li>Твоя доброта</li><li>Твой смех</li><li>Твоя забота</li></ul>";
});

// Romantik gul
document.getElementById('flower-btn').addEventListener('click', function() {
    let flowerResult = document.getElementById('flower-result');
    flowerResult.innerHTML = "🌹 Вот твоя виртуальная роза!";
});

// Sevgan joyni kiritish
document.getElementById('place-btn').addEventListener('click', function() {
    let place = document.getElementById('special-place').value;
    let placeResult = document.getElementById('place-result');
    placeResult.innerHTML = `Когда я думаю о нас, я представляю, как мы проводим время в ${place}.`;
});
