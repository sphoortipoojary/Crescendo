//Sounds for all the labels
function playTestSound() {
    var audio = new Audio('kicknew.wav');
    audio.play();
}

function playSnareSound() {
    var audio1 = new Audio('snare.wav');
    audio1.play();
}

function playHiHatOSound() {
    var hihato = new Audio('openhihat.wav');
    hihato.play();
}

function playHiHatCSound() {
    var hihatc = new Audio('closedhihat.wav');
    hihatc.play();
}

function playfloortom() {
    var floortom = new Audio('floortom.wav');
    floortom.play();
}

function playtom1Sound() {
    var tom1 = new Audio('tom1.wav');
    tom1.play();
}

function playtom2Sound() {
    var tom2 = new Audio('tom2.wav');
    tom2.play();
}

function playrideSound() {
    var ride = new Audio('ride.wav');
    ride.play();
}

function playcrashSound() {
    var crash = new Audio('crash.wav');
    crash.play();
}

function refresh(){
    location.reload();
}

/*
var x = document.getElementsByTagudio");
*/


var stop = false;

function playMusicOnGrid() {
    stop = false;

    var soundFiles = ['kicknew.wav', 'snare.wav', 'openhihat.wav', 'closedhihat.wav', 'floortom.wav', 'tom1.wav', 'tom2.wav', 'ride.wav', 'crash.wav'];
    var sounds = new Array(9);
    var soundObjects = new Array(9);

    for (var i = 0; i < 9; i++) {
        sounds[i] = document.createElement("source");
        
        sounds[i].type = "audio/wav"
        sounds[i].src = soundFiles[i];
    }

    for (var i = 0; i < 9; i++) {
        soundObjects[i] = new Audio();

        soundObjects[i].appendChild(sounds[i]);
    }
    var ipos=0;
    (function outerLoop(i) {
        if (stop == false) {

            setTimeout(function () {
                for (var r = 0; r < 9; r++) {
                    if (gridData[r][i].click % 2 == 1) {
                        soundObjects[r].play();
                    }
                }
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                xrect = (gridData[0][i].x) + 75;
                yrect = gridData[0][i].y;
                context.rect(xrect, yrect, width, height);
                context.fillStyle = 'white';
                context.globalAlpha = 0.5;
                context.fill();
                context.closePath();

                ipos++;
                if (++i < 16) {
                    outerLoop(i);
                }
            }, 700);
        }
        })(0);
    }
    


function gridData() {
    var data = new Array();
    var xposition = 40; 
    var yposition = 40;
    var width = 20;
    var height = 20;
    var click = 0;

    // iterate  rows 
    for (var row = 0; row < 11; row++) {
        data.push(new Array());

        // iterate  columns
        for (var column = 0; column < 16; column++) {
            data[row].push({
                x: xposition,
                y: yposition,
                width: width,
                height: height,
                click: click
            })

            xposition += width + 40;
        }

        xposition = 40;

        yposition += height + 28;
    }
    return data;
}


var context;

var gridData = gridData();

var grid = d3.select("#grid")
    .append("svg")
    .attr("width", screen.width)
    .attr("height", screen.height);

var row = grid.selectAll(".row")
    .data(gridData)
    .enter().append("g")
    .attr("class", "row");

var column = row.selectAll(".square")
    .data(function (d) { return d; })
    .enter().append("rect")
    .attr("class", "square")
    .attr("x", function (d) { return d.x; })
    .attr("y", function (d) { return d.y; })
    .attr("width", function (d) { return d.width; })
    .attr("height", function (d) { return d.height; })
    .style("fill-opacity", 0)
    .style("fill", "#ffffff")
    .style("stroke", "#fff")
    .on('click', function (d) {
        d.click++;
        if ((d.click) % 2 == 0) { d3.select(this).style("fill", "#fff").style("fill-opacity", 0); }
        if ((d.click) % 2 == 1) { d3.select(this).style("fill", "#ffffff").style("fill-opacity", 1); }
    });

console.log(column);


//For highlighting columns

var xrect;
var yrect;
var width = 28;
var height = 520;

var canvas = document.createElement('canvas'); 

canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.position = 'absolute';

canvas.style.left = 0;
canvas.style.top = 0;
canvas.style.zIndex = 1000;
canvas.style.pointerEvents = 'none';

document.body.appendChild(canvas); 
var context = canvas.getContext('2d');

function stopSong() {

    //  for (i = 0; i < 16; i++) {
    //   for (var r = 0; r < 9; r++) {
    //       if (gridData[r][i].click % 2 == 1) {
    //  if (soundObjects[r].play == true) {
    //      soundObjects[r].currentTime = 0;
    //     soundObjects[r].pause();
    //  }
    //}
    //   }
    //}
  //  for (var r = 0; r < 9; r++) {
    //    sounds[i].src = " ";
    //}
    stop=true;
}
var Volume = {};
Volume.controlVolume=function(element) {
   // var vol = element.value;
    //var s=document.getElementById("source");
    //s.volume = vol;

}