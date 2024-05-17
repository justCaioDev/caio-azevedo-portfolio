const projects = [
    {
        nome: "Curso Marketing Digital",
        tecnologias: [
            'HTML',
            'CSS',
            'SCSS'
        ],
        url: 'https://justcaiodev.github.io/landing-page-curso-marketing-digital/',
        img: '../assets/banner-marketing-digital.png'
    },
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
        nome: "Ease Farming",
        tecnologias: [
            'JavaScript',
            'HTML',
            'CSS'
        ],
        url: 'justcaiodev.github.io/ease-farming/',
        img: '../assets/banner-ease-farming.png'
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
        img.classList.add('row-img')
        img.setAttribute('src', projects[i].img)
        row.appendChild(img)
    }
}

function projectsMenu() {
    const projects_Container = document.querySelector('.projects')
    
    for (let i = 0; i < projects.length; i++) {
        const a = document.createElement('a')
        const div_Project = document.createElement('div')
        const project_Name = document.createElement('span')
        const project_Img = document.createElement('img')

        div_Project.classList.add('project')
        project_Name.classList.add('project-name')
        project_Img.classList.add('project-img')

        
        a.setAttribute('href', projects[i].url)
        a.setAttribute('target', '_blank')
        project_Name.textContent = projects[i].nome
        project_Img.setAttribute('src', projects[i].img)
        
        div_Project.appendChild(project_Name)
        div_Project.appendChild(project_Img)
        for (let t = 0; t < projects[i].tecnologias.length; t++) {
            const project_Tecs = document.createElement('span')

            project_Tecs.classList.add('project-tec')

            project_Tecs.textContent = projects[i].tecnologias[t]

            div_Project.appendChild(project_Tecs)
        }
        a.appendChild(div_Project)
        projects_Container.appendChild(a)

    }
}

projectsMenu()

rowProjects()