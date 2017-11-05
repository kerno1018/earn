define(['jquery','knockout','datatables'],function($,ko,dt){
    function any(){
        var self = this;
        self.after = function(){
            $('#example').DataTable( {
                "ajax": "/orders",
                "processing": true,
                "serverSide":true,
                // "createdRow": function ( row, data, index ) {
                //     if (data.last-data.index< 0) {
                //         $('td', row).eq(3).css('color', '#00E400');
                //         $('td', row).eq(4).css('color', '#00E400');
                //         // $('td', row).eq(0).css('color', '#fff')
                //     } else if (data.last-data.index > 0) {
                //         $('td', row).eq(3).css('color', '#ff0e0b');
                //         $('td', row).eq(4).css('color', '#ff0e0b');
                //     }
                // },
                "columns": [
                    { "data": "id" },
                    { "data": "thisWeek" },
                    { "data": "nextWeek" },
                    { "data": "quarter" },
                    { "data": "theshold" },
                    { "data": "orderId" },
                    { "render":function(data,type,row,meta){
                        return !!row.complement ? "完成":"未完成";
                    }}
                ]
            });
        }
    }

    return new any();
});