(function() {
    "use strict";

    var isNeighbor = function(i, j) {
        var x1 = (i % 4);
        var y1 = (i - x1) / 4;
        var x2 = (j % 4);
        var y2 = (j - x2) / 4;
        var d1 = Math.abs(x1 - x2), d2 = Math.abs(y1 - y2);
        if ((d1 == 1) || (d2 == 1)) {
            return (d1 + d2) == 1; 
        }
        return false;
    };

    var swapPosition = function(div1, div2) {
        var d1_left = div1.style.left, d1_top = div1.style.top;
        var d2_left = div2.style.left, d2_top = div2.style.top;
        var d1_index = div1.index, d2_index =  div2.index;
        div1.style.left = d2_left;
        div1.style.top = d2_top;
        div2.style.left = d1_left;
        div2.style.top = d1_top;
        div1.index = d2_index;
        div2.index = d1_index;
    };

    var init = function() {
        var puzzleArea = document.getElementById('puzzlearea');
        var divs = puzzleArea.getElementsByTagName("div");
    
        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];
            
            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;
    
            // set basic style and background
            div.className = "puzzlepiece";
            if (div.id == "blank") div.className = "blank";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("images/' + (i+1) + '.jpg")';
            // store x and y for later
            div.x = x;
            div.y = y;
            div.index = i;
            div.origin = i;
            // add event handler
            div.onclick = function() {
                var blank = document.getElementById('blank');

                if (isNeighbor(blank.index, this.index) == true) {
                    console.log("neighbor - onclick" + this.index);
                    swapPosition(blank, this);
                }
            };
            div.onmouseover = function() {
                var blank = document.getElementById('blank').index;
                if (isNeighbor(blank, this.index) == true) {
                    this.style.borderColor = "red";
                    this.style.color = "red";
                }
            };
            div.onmouseout = function() {
                this.style.borderColor = "black";
                this.style.color = "black";
            };
        }

        document.getElementById('shufflebutton').onclick = function(){
            makeShuffle();
        }
    };

    var makeShuffle = function() {
        var puzzleArea = document.getElementById('puzzlearea');
        var divs = puzzleArea.getElementsByTagName("div");
        var arr = Array.from(Array(16).keys());
        shuffle(arr);
        for (var i=0; i< divs.length; i++) {
            var div1 = divs[i], div2 = divs[arr[i]];
            swapPosition(div1, div2);
        }
    };

    var shuffle = function (array) {
        array.sort(() => Math.random() - 0.5);
    };

    window.onload = init;
})();
