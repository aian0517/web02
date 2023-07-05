const robot_box = document.querySelector('.robot_box1')
const robot_body = document.querySelector('.robot_body')
const ANS = {
    '詐騙': '您好歡迎您詢問關於詐騙的問題，如有其他相關問題起洽0900-000-222',
    '詐騙方法': '詐騙的方法有很多您可參閱本網站常見詐騙術',
    '詐騙預防方法': '詐騙預防的方法有很多您可參閱本網站查詢',
    '詐騙課程': '本網站有提供詐騙防範術課程，讓大眾了解於防範詐騙',
    '您好': '您好我是您的反詐騙機器人小將，您可詢問我問題',
}
function robot() {
    robot_box.classList.toggle('robot_box1_click')
}
function robot_xx() {
    robot_box.classList.remove('robot_box1_click')
}
function fs_keydown(e) {
    e.keyCode == 13 && robot_submit()
}
const robot_input = document.querySelector('.robot_input')
function robot_submit() {
    if (robot_input.value == '') {
        return
    }
    robot_body.innerHTML += `
    <span class="robot_box">
        <p class="robot_text1" style="background-color:#059b55">${robot_input.value}</p>
    </span>
    `
    let ans = '您尚未連接網路'
    x = Object.keys(ANS).filter(k => robot_input.value.includes(k)).at(-1);
    if (x.length) {
        ans = ANS[x]
    }
    console.log(ans);
    setTimeout(() => {
        robot_body.innerHTML += `
    <span style="display: flex">
        <p class="robot_text1">${ans}</p>
    </span>
    `
        document.querySelector('.robot_body').scrollTop = 10000000000000000
    }, 500);
    robot_input.value = ''
}

const sun = document.querySelector('.sun')
const sunimg = document.querySelector('.sun>img')
const background = {
    sun: {
        '--bg--color': '#fff',
        '--text--color': '#fff',
        '--robot--color': '#1a70ea',
        '--card--bg': '#299a07',
        '--cardbm--bg': '#e57206',
        '--nav-bg': '#0156b7',
    },
    moon: {
        '--bg--color': '#ccc',
        '--text--color': '#000',
        '--robot--color': '#549505',
        '--card--bg': '#971ce3',
        '--cardbm--bg': '#ff18cd',
        '--nav-bg': '#058a24',
    }
}

let sun1 = 'sun'
sun.addEventListener('click', () => {
    if (sun1 == 'sun') {
        sunimg.src = "./image/moon.png"
        sun1 = 'moon'
    } else {
        sunimg.src = "./image/sun.png"
        sun1 = 'sun'
    }
    sunformoon(background[sun1])
})
function sunformoon(color) {
    for (let key in color) {
        document.documentElement.style.setProperty(key, color[key])
    }
}


// navbar
const nav = $("#navbar")
addEventListener('scroll', (e) => {
    console.log(nav);
})