$(window).ready(function() {
  var $form = $('form#test-form'),
      url = 'https://script.google.com/macros/u/2/s/AKfycbwUeVGEHvlEYiB7WlHz241bBtm6l5Uy_Y67D8d8EBxjzJJeNWmT/exec'

  $form.on('submit', function(e) {
    e.preventDefault();

    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize()
    }).success(
      $('.js-submit').text('Success!').addClass('success')
      // function() {
      //       $('.js-submit').text('Success!').addClass('success');

      //       var totalCheckboxes = $('input[type="checkbox"]').length,
      //         checkedCheckboxes = $("input:checkbox:checked").length

      //         console.log('You completed' + ' ' + checkedCheckboxes + ' ' + 'steps out of' + totalCheckboxes)
      //     }
    );
  })
});