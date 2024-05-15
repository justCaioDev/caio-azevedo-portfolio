const projects = [
    {
        nome: "Lorem GYM",
        tecnologias: [
            'HTML',
            'CSS'
        ],
        url: 'https://justcaiodev.github.io/lorem-gym/',
        img: '../assets/banner-lorem-gym.png'
    },
    {
        nome: "Lorem Social",
        tecnologias: [
            'JavaScript',
            'HTML',
            'CSS'
        ],
        url: 'https://justcaiodev.github.io/Lorem-Social/',
        img: '../assets/banner-lorem-social.png'
    },
    {
        nome: "Studio Ghibli Filmes",
        tecnologias: [
            'JavaScript',
            'HTML',
            'CSS'
        ],
        url: 'https://justcaiodev.github.io/ghibli-films/',
        img: '../assets/banner-studio-ghibli.png'
    },
    {
        nome: "Quiz Harry Potter",
        tecnologias: [
            'JavaScript',
            'HTML',
            'CSS'
        ],
        url: 'https://justcaiodev.github.io/quiz-nlw-rocketseat/',
        img: '../assets/banner-quizz-harry-potter.png'
    },
    {
        nome: "IniciDev",
        tecnologias: [
            'JavaScript',
            'HTML',
            'CSS'
        ],
        url: 'https://justcaiodev.github.io/inicidev/',
        img: '../assets/banner-inicidev.png'
    }
]

function rowProjects() {
    const row = document.querySelector('.row')

    for (let i = 0; i < projects.length; i++) {
        const img = document.createElement('img')
        img.setAttribute('src', projects[i].img)
        row.appendChild(img)
    }
}

rowProjects()