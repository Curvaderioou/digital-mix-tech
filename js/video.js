const btnMapa = document.getElementById('btnMapa');
const btnCrm = document.getElementById('btnCrm');

const btnEffect = document.getElementById('btnEffect');

const mapaVideo = document.getElementById('mapaVideo');
const crmVideo= document.getElementById('crmVideo');

document.addEventListener('click', (e) => {
    if (e.target === btnMapa) {
        if (!btnMapa.classList.contains('btnativo')) {
            btnMapa.classList.add('btnativo');
            btnCrm.classList.remove('btnativo');
            btnEffect.classList.remove('crmAtivo');
            crmVideo.classList.remove('videoativo');
            mapaVideo.classList.add('videoativo');
        }
    }
    if (e.target === btnCrm) {
        if (!btnCrm.classList.contains('btnativo')) {
            btnCrm.classList.add('btnativo');
            btnMapa.classList.remove('btnativo');
            btnEffect.classList.add('crmAtivo');
            crmVideo.classList.add('videoativo');
            mapaVideo.classList.remove('videoativo');
        }
    }
});