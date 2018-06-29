
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


  function colorSelectedPopUpGo(){
    var colorSelected = document.querySelector('#colorSelectedPopUp').value; 
    document.querySelector("#editor .ql-editor").style.backgroundColor  = colorSelected;
    window.location.href="#";
  }


  function LoadDataCreatedContent(){
      document.querySelector('#datageneratenow').innerHTML = document.querySelector("#editor .ql-editor").innerHTML;
      window.location.href="#LoadDataCreated";
  }