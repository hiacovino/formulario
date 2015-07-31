$(document).ready(function(){
  $('#miFormularioDeRegistro').submit(function(event) {
    event.preventDefault();

    var formEl = $('#miFormularioDeRegistro');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
   
        submitButton.prop('disabled', 'disabled');
        alert('ANTES DE ENVIAR');
      }
    }).done(function(data) {


      alert('Datos Enviados');
      submitButton.prop('disabled', false);

        $.ajax({
      type: 'GET',
      url: 'https://formkeep.com/api/v1/forms/0334ccf00334/submissions.json?api_token=605daf0bb88b21e6d7502aa618298611',
      accept: {
        javascript: 'application/javascript'
      }
    }).done(function(data) {
      console.log(data);
    });



    });
  });
});