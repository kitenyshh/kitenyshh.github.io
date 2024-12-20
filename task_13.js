document.querySelector('h2').addEventListener('click', () => {
    alert('Так держать!')
});


document.querySelector('#check-second-term-btn').addEventListener('click', () => {
    let tableRows = document.querySelectorAll('#practics-table > tbody > tr');

    let secondTermData = [
        'Базовое бэкенд-приложение',
        'HTTP-запросы',
        'JSON и работа с ним',
        'HTTP-ответы',
        'Проектирование API',
        'Роутинг и его настройка',
        'NoSQL базы данных',
        'Обеспечение авторизации и доступа пользователей',
        'Работа сторонних сервисов уведомления и авторизации',
        'Основы ReactJS',
        'Работа с компонентами динамической DOM',
        'Использование хуков в React',
        "Основы микросервисной архитектуры",
        'Разработка классических модулей веб-приложений',
        'Разработка классических модулей веб-приложений',
        'Разработка классических модулей веб-приложений',
    ]

    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].children[1].textContent = secondTermData[i];
    }
});

document.querySelector("#image-test").addEventListener('mouseover', () => {
    document.querySelector("#image-test").style.width = "60%";
    document.querySelector("#image-test").style.height = "60%";
})

document.querySelector("#image-test").addEventListener('click', (e) => {
    e.target.src = "https://yandex-images.clstorage.net/954RNSZ08/a64a5973G5H/kP0TJ28VYJNQ-C-CE0sAUkE_XLCu8-dFvzYXQ8IQ2GIQUtr7b0hUBpbRymhSVObsXjuj3usT1gw5BFoAO1q7V8QsRzW4hKCSFertERXIBFcSOAx2KmXkSDHpCwvYzsL-TM7QaHqfwMcEAs6tnJq2NgYk-gE6E0rTO48QiKuD7U6W-ZBvJcxrG94pYYAQToCYl__RNj46-gK94AvOUUFA_oVEUG74HIiFxJzO61ObI_tB4rQE8ZLDXv4I1EJhy2UKWboQYeAMJxeRIaIGEYuN0JvwXvO8ffSG_qjJjxyAAjlOxFGisl6NCg8cxGUQl6b5D--wgjoTCR45BVtHasRihxMzE-MhDKYWUKHoi9KEBRiS8dZ_9bh0B7esAg8VhAS5BgFTb_xYQ82K0gKt1hlnecOuPQSyWssTdkFVRiCGokZS8xuv54onVhGtLA6ShErfmD5fdP23MgPwqgsJ3QkF9QGCHe33kgECDJmJrlqcqDPCpHcOuxNIEjNMEMmmiy3Ok_JdaKLCJZ8Ua2PHFohD2Ns13Pbze7lCfm2IwhmEg3IBiRXnPtiDSAEUBqae3mb6hqL-BrvVA5m-CRSHIssnCVR5n-mgxaFY1OMkj9QCTZwS8VY4t3u7Bf7sSMHeA4NxxIhSJTbdTYXDk4iqEpZr8UCrPEozmAtQcckXB2xGJk6Se1_lqQtjWNDjKYaeyIJQm__YePT6MAY2qwjCV8wEdECGGKt3VAJGCJiIYFsY573HLr7FMxPO2D0JlUqlSaxB2fDXpmoHa57f5mtE3MLJUlFx0f91c_UCd6oFQ9eNzDbIxFlrf9jBi0fRhGgel-byT--8hLpVgRX5QRFAYgNsiV15HinoTKLTWG6rAZZKjVYfPlz-tL_-hLRnAI8SwAQxRgaXK3JQjANP205hEN9sPQ4tckL03s3SNk5cwShNKA_U-ZCoIErlkpZvI0qYA0rX2XeccTu8s4Uwp8VHlI";
})

document.querySelector("#image-test").addEventListener('dblclick', () => {
    alert("Не налегай, у меня не так много любимых преподавателей");
})

// ---------------- 14
document.querySelector('#paragraph-animate').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'blue' ? '' : 'blue';
});

document.querySelector('#show-lectures-btn').addEventListener('click', function() {
    const table = document.getElementById('lectures-table');
    table.style.display = (table.style.display === 'none' || table.style.display === '' ? 'table' : 'none');
    setTimeout(() => table.style.opacity = (table.style.opacity === '0' || table.style.opacity === '' ? '1' : '0'), 0);
});

document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('test-form-msg');
    message.textContent = 'Форма отправлена!';
    message.style.color = 'blue';
    setTimeout(() => {
        message.style.color = 'green';
    }, 300);
});
