let acervo = [];
var i = 0;

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".dropdown-trigger");
  //var instances = M.Dropdown.init(elems, options);
});

function cadastrarlivros() {
  let titulo = document.getElementById("titulo").value;
  let descricao = document.getElementById("descricao").value;
  let genero = document.getElementById("genero").value;
  let autor = document.getElementById("autor").value;

  acervo.push({
    id: i,
    titulo,
    descricao,
    genero,
    autor,
  });
  i++;
  catalog();
}

function catalog() {
  acervo.forEach((value, index, array) => {
    let valormudado = false;

    array.forEach((val, idx, arr) => {
      if (value.id != val.id) {
        valormudado = false;
      } else {
        valormudado = true;
      }
    });
    if (valormudado) {
      let catalog = document.getElementById("acervo");
      let linha = document.createElement("TR");
      let titul = document.createTextNode(value.titulo);
      let gen = document.createTextNode(value.genero);
      let desc = document.createTextNode(value.descricao);
      let aut = document.createTextNode(value.autor);
      let lix = document.createElement("button");
      let liximg = document.createElement("img");
      liximg.setAttribute("class", "imagemlix");

      let tituldiv = document.createElement("TD");
      let gendiv = document.createElement("TD");
      let descdiv = document.createElement("TD");
      let autdiv = document.createElement("TD");
      let lixdiv = document.createElement("TD");
      liximg.src = "./src/lixo.png";

      tituldiv.appendChild(titul);
      gendiv.appendChild(gen);
      descdiv.appendChild(desc);
      autdiv.appendChild(aut);
      lix.appendChild(liximg);
      lixdiv.appendChild(lix);
      lix.setAttribute("class", "buttonlix");

      catalog.appendChild(linha);
      linha.appendChild(tituldiv);
      linha.appendChild(gendiv);
      linha.appendChild(descdiv);
      linha.appendChild(autdiv);
      linha.appendChild(lixdiv);
      linha.setAttribute("id", i);

      //delete

      lix.setAttribute("onlick", "");
      lix.onclick = deleter;
    }
  });
}

function deleter() {
  acervo.forEach((val, ind) => {
    if (this.parentElement.parentElement.id == val.id + 1) {
      acervo.splice(ind, 1);
      this.parentElement.parentElement.replaceWith("");
    }
  });
}

function salvarBD() {
  let pacote = document.querySelector("#result");
  pacote.value = JSON.stringify(acervo);
  // alert(pacote.value);
}
