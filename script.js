let input = document.getElementById("text").value;

// ------Decrypt-------------------------
        function decrypt(input){
        this.input = document.getElementById("text").value;
        var element = document.getElementById("message");
        var placeholder = document.getElementById("inputPlaceholder");
        if(this.input == ""){
          placeholder.innerHTML = "There is no text to convert";
        } else{
          var newText = this.input.replace(/ober/g, "o").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ufat/g, "u");

          // outputText Header
          placeholder.innerHTML = "Decripted";
          placeholder.style.fontWeight = "bold";
          placeholder.style.fontSize = "21px";
          placeholder.style.color = "#0A3871";

          element.innerHTML = newText;
          element.innerHTML.readonly = false;
          element.style.display='block'
          element.style.color = "#0A3871";
          var img = document.getElementById("search-img")
          img.style.display='none';

        }

      }
// ------Encrypt----------------------
      function encrypt(input){
        this.input = document.getElementById("text").value;
        var element = document.getElementById("message");
        var placeholder = document.getElementById("inputPlaceholder");
        if(this.input == ""){
          placeholder.innerHTML = "There is no text to convert";
        } else{
        var newText = this.input.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/u/g, "ufat").replace(/o/g, "ober");


        // outputText Header
        placeholder.innerHTML = "Encripted";
        placeholder.style.fontWeight = "bold";
        placeholder.style.fontSize = "21px";
        placeholder.style.color = "#0A3871";

        element.innerHTML = newText;
        element.innerHTML.readonly = false;
        element.style.display='block'
        var img = document.getElementById("search-img")
        img.style.display='none';
      }
      }
