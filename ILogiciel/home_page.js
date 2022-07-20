function tout() {

    Array.from(document.getElementsByClassName("Sport")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );

    Array.from(document.getElementsByClassName("Education")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );

    Array.from(document.getElementsByClassName("Politique")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );

    Array.from(document.getElementsByClassName("Sante")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );
}

function politique() {

    Array.from(document.getElementsByClassName("Sport")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Politique")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );

    Array.from(document.getElementsByClassName("Education")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Sante")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );
}

function sport() {
    Array.from(document.getElementsByClassName("Sport")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );

    Array.from(document.getElementsByClassName("Politique")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );
   
    Array.from(document.getElementsByClassName("Education")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Sante")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );
   
}

function education() {

    Array.from(document.getElementsByClassName("Sport")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Education")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );

    Array.from(document.getElementsByClassName("Politique")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Sante")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );
   
}

function sante() {

    Array.from(document.getElementsByClassName("Sport")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Education")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Politique")).forEach(
        function(element, index, array) {
            element.style.display = 'none';
        }
    );

    Array.from(document.getElementsByClassName("Sante")).forEach(
        function(element, index, array) {
            element.style.display = 'block';
        }
    );
   
}