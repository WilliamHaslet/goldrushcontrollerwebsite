class ArrowButtons {

    constructor() {

        this.active = false;

        this.value = {
            x: 0,
            y: 0
        };

        this.upArrowHeld = false;
        this.downArrowHeld = false;
        this.rightArrowHeld = false;
        this.leftArrowDownHeld = false;

        let self = this;

        function keyDown(keyEvent) {

            var changeWasMade = false;

            if (keyEvent.key === "ArrowUp") {

                self.upArrowHeld = true;

                changeWasMade = true;

            }
            else if (keyEvent.key === "ArrowDown") {

                self.downArrowHeld = true;

                changeWasMade = true;

            }
            else if (keyEvent.key === "ArrowRight") {

                self.rightArrowHeld = true;

                changeWasMade = true;

            }
            else if (keyEvent.key === "ArrowLeft") {

                self.leftArrowHeld = true;

                changeWasMade = true;

            }

            if (changeWasMade) {

                evaluateArrows();

            }

        }

        function keyUp(keyEvent) {

            var changeWasMade = false;

            if (keyEvent.key === "ArrowUp") {

                self.upArrowHeld = false;

                changeWasMade = true;

            }
            else if (keyEvent.key === "ArrowDown") {

                self.downArrowHeld = false;

                changeWasMade = true;

            }
            else if (keyEvent.key === "ArrowRight") {

                self.rightArrowHeld = false;

                changeWasMade = true;

            }
            else if (keyEvent.key === "ArrowLeft") {

                self.leftArrowHeld = false;

                changeWasMade = true;

            }

            if (changeWasMade) {

                evaluateArrows();

            }

        }

        function evaluateArrows() {

            self.value = {
                x: 0,
                y: 0
            };

            if (self.upArrowHeld) {

                self.value.y++;

                document.getElementById("upArrowImage").src = "images/pressedArrow.png";

            }
            else {

                document.getElementById("upArrowImage").src = "images/idleArrow.png";

            }

            if (self.downArrowHeld) {

                self.value.y--;

                document.getElementById("downArrowImage").src = "images/pressedArrow.png";

            }
            else {

                document.getElementById("downArrowImage").src = "images/idleArrow.png";

            }

            if (self.rightArrowHeld) {

                self.value.x++;

                document.getElementById("rightArrowImage").src = "images/pressedArrow.png";

            }
            else {

                document.getElementById("rightArrowImage").src = "images/idleArrow.png";

            }

            if (self.leftArrowHeld) {

                self.value.x--;

                document.getElementById("leftArrowImage").src = "images/pressedArrow.png";

            }
            else {

                document.getElementById("leftArrowImage").src = "images/idleArrow.png";

            }

        }

        function upDown() {

            self.upArrowHeld = true;

            evaluateArrows();

        }

        function upUp() {

            self.upArrowHeld = false;

            evaluateArrows();

        }

        function rightDown() {

            self.rightArrowHeld = true;

            evaluateArrows();

        }

        function rightUp() {

            self.rightArrowHeld = false;

            evaluateArrows();

        }

        function downDown() {

            self.downArrowHeld = true;

            evaluateArrows();

        }

        function downUp() {

            self.downArrowHeld = false;

            evaluateArrows();

        }

        function leftDown() {

            self.leftArrowHeld = true;

            evaluateArrows();

        }

        function leftUp() {

            self.leftArrowHeld = false;

            evaluateArrows();

        }

        document.getElementById("upArrow").onmousedown = upDown;
        document.getElementById("upArrow").onmouseup = upUp;
        document.getElementById("upArrow").onmouseout = upUp;

        document.getElementById("upArrow").ontouchstart = upDown;
        document.getElementById("upArrow").ontouchend = upUp;

        document.getElementById("rightArrow").onmousedown = rightDown;
        document.getElementById("rightArrow").onmouseup = rightUp;
        document.getElementById("rightArrow").onmouseout = rightUp;

        document.getElementById("rightArrow").ontouchstart = rightDown;
        document.getElementById("rightArrow").ontouchend = rightUp;

        document.getElementById("downArrow").onmousedown = downDown;
        document.getElementById("downArrow").onmouseup = downUp;
        document.getElementById("downArrow").onmouseout = downUp;

        document.getElementById("downArrow").ontouchstart = downDown;
        document.getElementById("downArrow").ontouchend = downUp;

        document.getElementById("leftArrow").onmousedown = leftDown;
        document.getElementById("leftArrow").onmouseup = leftUp;
        document.getElementById("leftArrow").onmouseout = leftUp;

        document.getElementById("leftArrow").ontouchstart = leftDown;
        document.getElementById("leftArrow").ontouchend = leftUp;

        document.addEventListener("keydown", keyDown);
        document.addEventListener("keyup", keyUp);

    }

}
