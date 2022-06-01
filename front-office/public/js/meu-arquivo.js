


var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
  $('section.awSlider > img').attr('src',bscn);
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

// JavaScript code
function BarraPesquisa() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('animals');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

function guardarFunc() {
  let pedido = new Object();
  let a = [];
  

    pedido.Nome = document.getElementById("name").value;
    pedido.Email = document.getElementById("email").value;
    pedido.Empresa = document.getElementById("empresa").value;
    pedido.Telemóvel = document.getElementById("phone").value;
    pedido.TipoDeCobertura = document.getElementById("cobertura").value;
    

    a = JSON.parse(localStorage.getItem("pedidos")) || [];
    a.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(a));

    alert("Adicionado com sucesso!")
    document.getElementById("pedidoOrçamento").reset();
    
  
  
} 

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

