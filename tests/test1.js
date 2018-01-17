let mvt = {
    x: 3,
    y: 2,
    est: () => {
        $("#div1").css("margin-left", "+=10");
        mobile.x += 1;
    },
    ouest: () => {
        $("#div1").css("margin-left", "-=10");
        mobile.x -= 1;
    },
    nord: () => {
        $("#div1").css("margin-top", "-=10");
        mobile.y -= 1;
    },
    sud: () => {
        $("#div1").css("margin-top", "+=10");
        mobile.y += 1;
    },
};


let mobile = {
    x: 0,
    y: 0,

    intervalID: 0,
    action: [],

    enchainer: () => {
        if (mobile.action.length === 0) {
            clearInterval(mobile.intervalID);
            mobile.verifier();
            return;
        }
        mobile.action.shift()();
    },

    est: () => {
        mobile.action.push(mvt.est);
    },
    ouest: () => {
        mobile.action.push(mvt.ouest);
    },
    nord: () => {
        mobile.action.push(mvt.nord);
    },
    sud: () => {
        mobile.action.push(mvt.sud);
    },

    verifier: () => {
        let msg = "gagné";
        if (mobile.x !== mvt.x  || mobile.y !== mvt.y)
        {
            msg= "perdu position = (" + mobile.x + "," + mobile.y + ")" + " -- objectif = (" + mvt.x + "," + mvt.y + ")";
        }
        $("#div2").html(msg);
    }
};


$(document).ready(function () {

    $("#b1").on("click", function () {
        let str = $("#t1").val();
        eval(str);
        mobile.intervalID = setInterval(mobile.enchainer, 500);
    });
});


/*
for(let i = 0; i<2;i++){
   mobile.est();
   mobile.nord();
   mobile.ouest();
   mobile.sud();

}
*/