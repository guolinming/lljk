var html = "";
$.each(top10user[period_i].data, function (idx, item) {
    var ll;
    var sjb;
    $.each(top10user[period_i].data, function (idx, item2) {
        ll += item2[1];
        sjb += item2[2];
    });
    html +='<tr>';
    html +='   <td>'+item[0]+'</td>';
    html +='   <td>'+ll+'</td>';
    html +='   <td>'+sjb+'</td>';
    html +='</tr>';
});

$('#detail-user tbody').html(html);


