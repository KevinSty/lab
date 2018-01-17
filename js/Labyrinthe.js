import labyrinthe1 from './niveau/lvl1';
import labyrinthe2 from './niveau/lvl2';
import labyrinthe3 from './niveau/lvl3';
import labyrinthe4 from './niveau/lvl4';
import labyrinthe5 from './niveau/lvl5';
import labyrinthe6 from './niveau/lvl6';
import labyrinthe7 from './niveau/lvl7';

//recupére le contenu du niveau pour adapter le labyrinthe
function niv() {
    switch (jeu.niveau) {
        case 1:
            let lvl1 = labyrinthe1();
            jeu.lab = lvl1[0];
            jeu.taille = lvl1[1];
            break;
        case 2:
            let lvl2 = labyrinthe2();
            jeu.lab = lvl2[0];
            jeu.taille = lvl2[1];
            break;
        case 3:
            let lvl3 = labyrinthe3();
            jeu.lab = lvl3[0];
            jeu.taille = lvl3[1];
            break;
        case 4:
            let lvl4 = labyrinthe4();
            jeu.lab = lvl4[0];
            jeu.taille = lvl4[1];
            break;
        case 5:
            let lvl5 = labyrinthe5();
            jeu.lab = lvl5[0];
            jeu.taille = lvl5[1];
            break;
        case 6:
            let lvl6 = labyrinthe6();
            jeu.lab = lvl6[0];
            jeu.taille = lvl6[1];
            break;
        case 7:
            let lvl7 = labyrinthe7();
            jeu.lab = lvl7[0];
            jeu.taille = lvl7[1];
            break;
    }
}

let interaction = {
	
	// verifie la direction et se deplace en fonction de celle-ci
    avancer: () => {
		let action = 1;
		
		//parcours tout le tableau pour trouver le joueur et regarde ce qu'il y a à sa droite
		if (jeu.direction == "droite") {
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							switch (jeu.lab[i][j+1]) {
								case 's':
									action = 0;
									jeu.niveau += 1;
									jeu.lab[i][j]= 0;
									jeu.lab[i][j+1]= 'd';
									jeu.saut = 3;
									niv();
									alert("Felicitation, vous avez réussi le niveau");
									break;
								case 'm':
									action = 0;
									alert("le joueur a rencontré un obstacle ou un mur");
									break;
								case 0:
									action = 0;
									jeu.lab[i][j]= 0;
									jeu.lab[i][j+1]= 'd';
									break;
							}
						}	
					}	
				}
			}
		//parcours tout le tableau pour trouver le joueur et regarde ce qu'il y a à sa gauche	
		} else if (jeu.direction == "gauche") {
			
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							switch (jeu.lab[i][j-1]) {
								case 0:
									action = 0;
									jeu.lab[i][j]= 0;
									jeu.lab[i][j-1]= 'd';
									break;
								case 's':
									action = 0;
									jeu.niveau += 1;
									jeu.lab[i][j]= 0;
									jeu.lab[i][j-1]= 'd';
									niv();
									alert("Felicitation, vous avez réussi le niveau");
									break;
								case 'm':
									action = 0;
									alert("le joueur a rencontré un obstacle ou un mur");
									break;
							}
						}
					}	
				}
			}
		//parcours tout le tableau pour trouver le joueur et regarde ce qu'il y a à vers le haut
		} else if (jeu.direction == "haut") {
			
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							switch (jeu.lab[i-1][j]) {
								case 0:
									action = 0;
									jeu.lab[i][j]= 0;
									jeu.lab[i-1][j]= 'd';
									break;
								case 's':
									action = 0;
									jeu.niveau += 1;
									jeu.lab[i][j]= 0;
									jeu.lab[i-1][j]= 'd';
									niv();
									alert("Felicitation, vous avez réussi le niveau");
									break;
								case 'm':
									action = 0;
									alert("le joueur a rencontré un obstacle ou un mur");
									break;
							}
						}
					}
				}
			}
		//parcours tout le tableau pour trouver le joueur et regarde ce qu'il y a à vers le bas
		} else if (jeu.direction == "bas") {
			
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							switch (jeu.lab[i+1][j]) {
								case 0:
									action = 0;
									jeu.lab[i][j]= 0;
									jeu.lab[i+1][j]= 'd';
									break;
								case 's':
									action = 0;
									jeu.niveau += 1;
									jeu.lab[i][j]= 0;
									jeu.lab[i+1][j]= 'd';
									niv();
									alert("Felicitation, vous avez réussi le niveau");
									break;
								case 'm':
									action = 0;
									alert("le joueur a rencontré un obstacle ou un mur");
									break;
							}
						}	
					}
				}
			}
		}
	
    },
	
	//permet de sauter au-dessus d'un trou pour les prochains labyrinthe, correctif de avancer() à appliquer
	sauter: () => {
		let action = 1;
		
		if (jeu.direction == "droite") {
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							if (jeu.lab[i][j+1]=='t') {
								jeu.saut -=1;
								jeu.lab[i][j]= 0;
								jeu.lab[i][j+2]= 'd';
								action = 0;
							} else {
								alert("il n'y a aucune raison de sauter");
								action = 0;
							}
						}	
					}
				}
			}
		} else if (jeu.direction == "gauche") {
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							if (jeu.lab[i][j-1]=='t') {
								jeu.saut -=1;
								jeu.lab[i][j]= 0;
								jeu.lab[i][j-2]= 'd';
								action = 0;
							} else {
								alert("il n'y a aucune raison de sauter");
								action = 0;
							}
						}	
					}
				}
			}
		} else if (jeu.direction == "haut") {
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							if (jeu.lab[i-1][j]=='t') {
								jeu.saut -=1;
								jeu.lab[i][j]= 0;
								jeu.lab[i-2][j]= 'd';
								action = 0;
							} else {
								alert("il n'y a aucune raison de sauter");
								action = 0;
							}
						}	
					}
				}
			}
		} else if (jeu.direction == "bas") {
			for (let i= 0; i < jeu.taille; i++) {
				for(let j= 0; j < jeu.taille;j++) {
					
					if (action == 1) {
						if(jeu.lab[i][j]=='d') {
							if (jeu.lab[i+1][j]=='t') {
								jeu.saut -=1;
								jeu.lab[i][j]= 0;
								jeu.lab[i+2][j]= 'd';
								action = 0;
							} else {
								alert("il n'y a aucune raison de sauter");
								action = 0;
							}
						}	
					}	
				}
			}
		}
    },
	
	//change la direction du joueur
	est: () => {
        jeu.direction = "droite";
    },
    ouest: () => {
        jeu.direction = "gauche";	
    },
    nord: () => {
        jeu.direction = "haut";	
    },
    sud: () => {
        jeu.direction = "bas";		
    },
	
	
	
	//permet la verification dans console
	debug: () => {
		console.table(jeu.lab);
		console.log("orientation : " + jeu.direction);
		console.log("niveau actuel : " + jeu.niveau);
		console.log("nombre de saut restant : " + jeu.saut);
    }
	
};

let jeu = {
	
	direction: "droite",
	niveau : 1,
	lab : [['m','m','m','m','m'],
			['m',0,0,0,'m'],
			['d',0,'m',0,'m'],
			['m','m','m',0,'s'],
			['m','m','m','m','m']],
	taille : 5,
	saut : 3,
	
	intervalID: 0,
	action: [],
	
	//verifie le contenue du tableu et execute les actions contenue
	enchainer: () => {
		//si ajout de limite d'actions if (jeu.action.length == 200)
        if (jeu.action.length === 0) {
            clearInterval(jeu.intervalID);
            return;
        }
		jeu.action.shift()();
    },
	
	//insert dans le tableau action les differentes actions du joueur (tourner, avancer,...)
	est: () => {
        jeu.action.push(interaction.est);
    },
    ouest: () => {
        jeu.action.push(interaction.ouest);
    },
    nord: () => {
        jeu.action.push(interaction.nord);
    },
    sud: () => {
        jeu.action.push(interaction.sud);
    },

	avancer: () => {
		jeu.action.push(interaction.avancer);
	},
	
	sauter: () => {
		jeu.action.push(interaction.avancer);
	},
	
	debug: () => {
		jeu.action.push(interaction.debug);
    }

};

$(document).ready(function () {
    $("#b1").on("click", function () {
        let str = $("#t1").val();
        eval(str);
        jeu.intervalID = setInterval(jeu.enchainer, 500);
    });
});