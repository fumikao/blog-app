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
      var text = $('.card-text').next();
      var image = data.image ? `${data.image}` : ""
      $(text).text(data.content);
      $(text).next().attr('src', image);
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