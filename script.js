// Часть 1. Создание функций

// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === 'none' ? 'block' : 'none';
    } else {
        console.warn(`Элемент с селектором '${selector}' не найден.`);
    }
}

// Функция для изменения текста H1 на основе utm_term из URL
function updateH1WithUTMTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const h1Element = document.querySelector('h1');
    if (h1Element) {
        h1Element.textContent = utmTerm || h1Element.textContent;
    } else {
        console.warn('Элемент H1 не найден.');
    }
}

// Часть 4. Дополнительные функции

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    console.log(`Текущее время: ${timeString}`);
}

// Функция для сброса цвета фона к исходному
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Подключение обработчика события DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Часть 3. Порядок вызова функций

    // Вывод сообщения
    showMessage("Скрипт загружен!");

    // Вывод текущего времени
    logCurrentTime();

    // Сброс цвета фона
    resetBackgroundColor();

    // Изменение цвета фона
    changeBackgroundColor("lightblue");

    // Переключение видимости элемента с классом .content
  //  toggleVisibility('table');

    // Изменение текста H1 на основе utm_term
    updateH1WithUTMTerm();
});
// Дождаться полной загрузки DOM
window.addEventListener("DOMContentLoaded", () => {
    // 1. Обработчик события click на заголовок H1
    const mainHeading = document.querySelector("h1");
    mainHeading.addEventListener("click", () => {
        alert("Вы кликнули на заголовок - так держать!");
    });

    // 2. Обработчики событий для фотографии студента
    const studentPhoto = document.querySelector(".profile-pic");

    // Увеличение размера при наведении
    studentPhoto.addEventListener("mouseover", () => {
        studentPhoto.style.transition = "transform 0.3s ease";
        studentPhoto.style.transform = "scale(1.1)"; // Увеличение на 10%
    });

    // Возвращение к исходному размеру при удалении курсора
    studentPhoto.addEventListener("mouseout", () => {
        studentPhoto.style.transform = "scale(1)"; // Возврат к исходному размеру
    });

    // Замена изображения на изображение преподавателя при клике
    studentPhoto.addEventListener("click", () => {
        studentPhoto.src = "https://i.pinimg.com/736x/54/6e/1a/546e1a7402a317d3f2fa41881fe54b9b.jpg"; // Изображение преподавателя
        studentPhoto.alt = "Фотография любимого преподавателя";
    });

    // Alert при двойном клике
    studentPhoto.addEventListener("dblclick", () => {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
});
