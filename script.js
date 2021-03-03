let array = [];

function ajouter(parfum) {

    if (parfum.checked) {
        array.push(parfum.value);
    } else {
        array.splice(array.indexOf(parfum),1);
    }
   
    countParfum = document.querySelectorAll('input[type="checkbox"]:checked').length;
    document.getElementById('nbParfum').innerHTML = `Vous avez selectionné ${countParfum} parfums`;
}

function commander() {
    document.getElementById('resultat').innerHTML = "Vous avez commandé une glace " + array.join(', ');
    console.log(array);
}


