/* ALL THE CODE IN THIS FILE IS WRITTEN WITHOUT ANY HELP */

/********** Eraser Tool **********/

class EraserTool {
    constructor() {
        this.icon = "assets/eraser.png";
        this.name = "eraser";

        var previousMouseX = -1;
        var previousMouseY = -1;
        var eraserSize = 20;

        this.draw = function() {
            if (mouseIsPressed) {
                if (previousMouseX == -1) {
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                } else {
                    push();
                    stroke(255);
                    fill(255);
                    strokeWeight(eraserSize);
                    strokeCap(SQUARE);
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                    noStroke();
                    rectMode(CENTER);
                    rect(mouseX, mouseY, eraserSize, eraserSize);
                    pop();
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                }
            } else {
                previousMouseX = -1;
                previousMouseY = -1;
            }
        };

        this.populateOptions = function() {
            select(".options").html(`
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <div><b>Eraser Tool</b></div>
                    <label>Eraser Size:
                        <input id="eraserSize" type="range" min="5" max="80" value="20" />
                        <span id="eraserSizeLabel">20px</span>
                    </label>
                    <div style="font-size:12px; opacity:0.85;">Click and drag to erase.</div>
                </div>
            `);

            select("#eraserSize").input(function() {
                eraserSize = Number(this.elt.value);
                select("#eraserSizeLabel").html(eraserSize + "px");
            });
        };

        this.unselectTool = function() {
            select(".options").html("");
        };
    }
}
