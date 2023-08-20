const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide scroll

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

const alternateStyle = document.querySelectorAll(".alternate-style")
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        } else {
            style.setAttribute("disabled", "true")
        }
    })
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    } else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})

const boxes = document.querySelector('.boxes'),
    wrapper = document.querySelector('.wrapper'),
    box = document.querySelectorAll('.box'),
    width = document.querySelector('.container').offsetWidth,
    parent = document.querySelector('.dots');

var offset = 1,
    defaultWidth = (width / 2) - (box[0].offsetWidth / 2),
    boxesWidth = box[0].offsetWidth + 30;

box.forEach(item => {
    const div = document.createElement('div')
    div.className = 'dot';
    parent.append(div);
})

const dot = document.querySelectorAll('.dot');

setInterval(() => {
    if (offset === box.length - 1) {
        offset = 0
    } else { offset++ } delDot()
    refresh()
}, 5000)

function refresh() {
    boxes.style.paddingLeft = defaultWidth + "px";
    boxes.style.transform = `translateX(-${boxesWidth * offset}px)`
    dot[offset].classList.add('active');
    box[offset].classList.add('active-box');
}

function delDot() {
    dot.forEach(d => d.classList.remove('active'));
    box.forEach(b => b.classList.remove('active-bx'));
}

refresh()

dot.forEach((item, ind) => {
    item.addEventListener('click', () => {
        delDot()
        offset = ind;
        console.log(offset);
        dot[offset].classList.add('active');
        box[offset].classList.add('active-bo');
        refresh()
    })
})


/*=============== ADS ===============*/

let ads = document.querySelector('.ads');
let pad__dm = document.querySelector('.pad__dm');
let rek = document.querySelector('.rek_2');

function closeAds(a) {
    if (a == 1) {
        ads.style.width = '0'
        ads.style.display = 'none'
        ads.style.display = 'none'
        pad__dm.style.marginBottom = '70px'
    } else {
        pad__dm.style.width = '0'
        pad__dm.style.display = 'none'
        pad__dm.style.display = 'none'
    }

}

let i = 0;
const interval = setInterval(() => {
    i++
    if (i === 5) {
        clearInterval(interval)
        ads.style.display = 'flex'

    }
}, 2500)

let c = 0;
const interval_1 = setInterval(() => {
    c++
    if (c === 5) {
        clearInterval(interval_1)
        rek.style.display = 'flex'
    }
}, 1000)

let b = 0;
const interval_2 = setInterval(() => {
    b++
    if (b === 2) {
        clearInterval(interval_2)
        pad__dm.style.display = 'flex'

    }
}, 9000)