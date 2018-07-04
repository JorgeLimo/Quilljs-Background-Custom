
var quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
    	toolbar: {
        container:
        [
    		  ['bold', 'italic', 'underline', 'strike'],
    		  ['blockquote', 'code-block'],
    		  [{ 'header': 1 }, { 'header': 2 }],           
    		  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    		  [{ 'script': 'sub'}, { 'script': 'super' }],     
    		  [{ 'indent': '-1'}, { 'indent': '+1' }],         
    		  [{ 'direction': 'rtl' }],                         
    		  [{ 'size': ['small', false, 'large', 'huge'] }],
    		  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    		  [{ 'color': [] }, { 'background': [] }],       
    		  [{ 'font': [] }],
    		  [{ 'align': [] }],
    		  ['clean'],                                   
          [{ 'fondos': ['Imagen', 'Colores'] }]
        ],
        handlers: {
            "fondos": function (value) { 
                if (value == "Imagen") {
                	loadBackgroundImage();
                }else{
                	loadBackgroundColores();
                }
            }
        }
      }
    }
  });
  
  // We need to manually supply the HTML content of our custom dropdown list
  const fondosPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-fondos .ql-picker-item'));
  fondosPickerItems.forEach(item => item.textContent = item.dataset.value);
  document.querySelector('.ql-fondos .ql-picker-label').innerHTML = 'Fondos&nbsp;&nbsp;&nbsp;&nbsp;' + document.querySelector('.ql-fondos .ql-picker-label').innerHTML;

  function loadBackgroundImage(){
    window.location.href="#loadBackgroundImageContent";
  }

  function loadBackgroundColores(){
    window.location.href="#loadBackgroundColoresContent";
  }

  function imgSelectedPopUpGo(){
    document.querySelector("#editor .ql-editor").style.backgroundColor  = "";
    var file = document.querySelector('#imgSelectedPopUp').files[0];
    var imageBase64data = loadBackgrodunBase64(file);
    console.log(imageBase64data);
    window.location.href="#";
  }

  function colorSelectedPopUpGo(){

    var element = document.querySelector("#editor .ql-editor");
    element.classList.remove("our-background-image");
    element.style.backgroundImage = "";
    var colorSelected = document.querySelector('#colorSelectedPopUp').value; 
    document.querySelector("#editor .ql-editor").style.backgroundColor  = colorSelected;
    window.location.href="#";
  }

  function LoadDataCreatedContent(){
      document.querySelector('#datageneratenow').innerHTML = document.querySelector("#editor").innerHTML;
      window.location.href="#LoadDataCreated";
  }

  function loadBackgrodunBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     //console.log(reader.result);
     var element = document.querySelector("#editor .ql-editor");
     element.classList.add("our-background-image");
     element.style.backgroundImage = "url('"+reader.result+"')";
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}