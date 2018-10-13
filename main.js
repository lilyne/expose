let myInstance = new Vue({

    el:"#app",

    data: {
        afficher:false,
        montrer:false,
        rep1:"Morihei Ueshiba",
        nom:"",
        message:"",
        final:"",
    },

    methods:  {
        diapo () {
            this.afficher = true;
            this.montrer = false;
            

        },
        quiz () {
            this.afficher = false;
            this.montrer = true;
        },
        verif1 () {
            if (this.nom == this.rep1) {
               this.message = "bravo c'est vrai";
            } else  {
                this.message = "non c'est faux";
            }
        },
        verite () {
            this.message = "bravo tu as réussit"
        },
        non () {
            this.message = "oh non tu n'as pas réussit"
        },
        finalite () {
            if (this.final == "oui") {
                this.message = "merci";
            }else {
                this.message = "domage,je ferais mieux la prochaine fois.";
            }
        }

    },

});