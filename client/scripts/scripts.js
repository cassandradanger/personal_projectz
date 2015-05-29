var $data;
$(document).ready(function(){
    $data = $('.js-data');
    getData();
});

function getData(){
    $.ajax({
        url: '/vendors',
        method: 'get',
        data: {},
        dataType: 'json',
        success: function(response, textStatus, jqXHR){
            clearData();
            processData(response);
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(textStatus,errorThrown);
        },
        complete: function(jqXHR, textStatus){
            console.log("getData() Ajax Get Complete:", textStatus);
        }
    })
}

function clearData(){
    $data.empty();
}

function processData(data){

    for(var i = 0; i< data.length; i++){
        var vendor = data[i];

        var vendor = vendor._id;
        var firstName = vendor.firstName || '';
        var lastName = vendor.lastName || '';

        var section = $('<section/>')
            .attr('data-id', id);

        var ul = $('<ul/>')
            .appendTo(section);

        var liFirstName = $('<li/>')
            .text('Name: ' + firstName)
            .appendTo(ul);

        var liLastName = $('<li/>')
            .text('Name: ' + lastName)
            .appendTo(ul);

        //var liDate = $('<li/>')
        //    .text('Note: '+ note)
        //    .appendTo(ul);

        $data.append(section);
    }
}
