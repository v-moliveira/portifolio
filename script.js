/* Header */
let h3_head = document.getElementsByClassName("cabecalho_cont")[0].children[1]
let h5_head = document.getElementsByClassName("cabecalho_cont")[0].children[2]

/* Nav */

let li_1_nav = document.getElementsByTagName("li")[0].children[0]
let li_2_nav = document.getElementsByTagName("li")[1].children[0]
let li_3_nav = document.getElementsByTagName("li")[2].children[0]
/* let li_4_nav = document.getElementsByTagName("li")[3].children[0]
 */

/* Sobre mim */
let sobreMim = document.getElementsByClassName("sobreMim")[0]
let h4_SM = sobreMim.children[0]
let p1_SM = sobreMim.children[2]
let p2_SM = sobreMim.children[3]
let p3_SM = sobreMim.children[4]
let p4_SM = sobreMim.children[5]

function ChangePt() {
    location.reload()
}


function changeEn() {

    h3_head.innerHTML = "Mechanical Engineering Undergraduate"
    h5_head.innerHTML = "3M Brasil Intern - LATAM Logistics Excelence"

    li_1_nav.innerHTML = "About Me"
    li_2_nav.innerHTML = "Experience"
    li_3_nav.innerHTML = "Projects"
    /* li_4_nav.innerHTML = "About Me" */

    h4_SM.innerHTML = "About Me"
    p1_SM.innerHTML = "I am a Mechanical Engineering undergraduate at the State University of Campinas (UNICAMP). However, I have been following a different path from my graduation. The programming area has always been something that caught my attention, but it was when I joined 3M as an intern in the Logistics Excelence area that I started to apply programming concepts that I had learned, as well as focus on studying even more."
    p2_SM.innerHTML = "In my day to day as a intern, I work mainly with the development of Power BIs and Power Apps, to generate indicators and improve performance in Logistics at the LATAM level."
    p3_SM.innerHTML = "The desire to learn how to develop WEB applications led me to create this portfolio to publish the applications I have developed, outside of the work environment."
    p4_SM.innerHTML = "Welcome to my portfolio!"
}

function changeEs() {

    h3_head.innerHTML = "Estudiante de Ingeniería Mecánica"
    h5_head.innerHTML = "Trainee 3M Brasil - LATAM Logistics Excelence"

    li_1_nav.innerHTML = "Sobre Mí"
    li_2_nav.innerHTML = "Experiencia"
    li_3_nav.innerHTML = "Proyectos"
    /* li_4_nav.innerHTML = "About Me" */

    h4_SM.innerHTML = "Sobre mí"
    p1_SM.innerHTML = "Soy estudiante de ingeniería mecánica en la Universidad Estatal de Campinas (UNICAMP). Sin embargo, he seguido un camino diferente de mi graduación. El área de programación siempre ha sido algo que me ha llamado la atención, pero fue con la entrada como aprendiz en el área de Logistics Excelence en 3M, que empecé a aplicar conceptos de programación que había aprendido, así como centrarse en estudiar aún más."
    p2_SM.innerHTML = "En mi día a día como trainee, trabajo principalmente con el desarrollo de Power BIs y Power Apps, para generar indicadores y mejorar el rendimiento en Logística a nivel de LATAM."
    p3_SM.innerHTML = "El deseo de aprender a desarrollar aplicaciones WEB me llevó a crear este portafolio para publicar las aplicaciones desarrolladas por mí, fuera del ámbito de trabajo."
    p4_SM.innerHTML = "Bienvenido a mi portafolio!"
}