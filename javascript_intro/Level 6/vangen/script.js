function gooiButton() {
    bal.gooi();
}

function vangButton() {
    bal.vang();
}


function resetButton() {
    bal.reset();
}


var bal = {
    canvasBal: constructBal(),
    balPositie: "links",

    gooi: function () {
        try {
            if (this.balPositie !== "links") {
                throw Error("bal in verkeerde positie")
            }
            this.draw(300, 50);
            this.balPositie = "midden";
        } catch {
            var bericht = "fout, bal al in de lucht of al gevangen";
            document.getElementById("melding").innerHTML = bericht;
        }
    },

    vang: function () {
        try {
            if (this.balPositie !== "midden") {
                throw Error("bal in verkeerde positie")
            }
            this.draw(500, 250);
            this.balPositie = "rechts";
        } catch {
            var bericht = "fout, de bal is niet in de lucht";
            document.getElementById("melding").innerHTML = bericht;
        }

    },

    reset: function () {
        this.draw(100, 250);
        this.balPositie = "links";
        var bericht = "";
        document.getElementById("melding").innerHTML = bericht;
    },

    draw: function (x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    }
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}
