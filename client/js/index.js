$(document).ready(function () {
  var $form = $('form');
  var $input = $('input[type="text"]');
  var $tbody = $('tbody');

  const renderRow = (a, b) => {
    console.log('A', a, 'B', b);
    const $tr = $('<td />');
    const $td1 = $('<td>' + a + '</td>');
    const $td2 = $('<td>' + b + '</td>');
    
    $tr.append($td1, $td2);
    $tbody.append($tr);
  };

  $form.on('submit', function (e) {
    let val = $input.val();
    let data = {
      string: val
    };

    console.log('Submitting:', val);

    $.ajax('reverseString', {
      data: JSON.stringify(data), // if it's stringified JSON, it'll get into request body for some reason!
      method: 'POST',
      contentType: 'application/json',
      success: function (result) {
        console.log('SUCCESS', result);
        // render on page
        renderRow(val, result);
      },
      error: function (err) {
        console.error('FAILED', err);
      }
    });

    e.preventDefault();
  });

});