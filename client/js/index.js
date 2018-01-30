$(document).ready(function () {
  var $form = $('form');
  var $input = $('input[type="text"]');
  var $tbody = $('tbody');

  const renderRow = (a, b) => {
    console.log('A', a, 'B', b);
    const $tr = $('<tr />');
    const $td1 = $('<td>' + a + '</td>');
    const $td2 = $('<td>' + b + '</td>');
    
    $tr.append($td1, $td2);
    $tbody.append($tr);
  };

  $form.on('submit', function (e) {
    let val = $input.val();
    console.log('TYPEOF input', typeof $input.val(), 'val is', val);
    if (!val) {
      val = '';
    }
    
    let data = {
      string: val
    };

    $.ajax('reverseString', {
      data: JSON.stringify(data), 
      method: 'POST',
      contentType: 'application/json',
      success: function (result) {
        console.log('SUCCESS', result);
        renderRow(val, result);
      },
      error: function (err) {
        console.error('FAILED', err);
      }
    });

    e.preventDefault();
  });

});