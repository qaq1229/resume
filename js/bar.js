/*pie chart=================== */
'use strict';
var $window = $(window);

function run()
{
    var fName = arguments[0],
        aArgs = Array.prototype.slice.call(arguments, 1);
    try {
        fName.apply(window, aArgs);
    } catch(err) {
        
    }
};

/* chart*/
function _chart ()
{
    $('.b-skills').appear(function() {
        setTimeout(function() {
            $('.chart').easyPieChart({
                easing: 'easeOutElastic',
                delay: 3000,
                barColor: '#369670',
                trackColor: '#E4EDF6',
                scaleColor: false,
                lineWidth: 30,
                trackWidth: 30,
                size: 250,
                lineCap: 'round',
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }
            });
        }, 200);
    });
};
$(document).ready(function() {
    run(_chart);
});


/*skill bar================= */
const skillsSection = document.getElementById('skill-section');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress(){
    progressBars.forEach(p=> {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll',() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});
