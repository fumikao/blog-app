$(function(){
  $('.edit_blog').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var textBox = $('.card-text').next();
      var text = data.content.replace(/\n|\r\n|\r/g, '<br>');
      var image = data.image ? `${data.image}` : ""
      $(textBox).html(text);
      $(textBox).next().attr('src', image);
      $('.edit_blog').val(text);

    })
    .fail(function(){
      alert('送信に失敗しました')
    })
    .always(function(){
      $('input[type=submit]').removeAttr("disabled");
    })
  });
});