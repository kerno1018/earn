define(['jquery','knockout','datatables'],function($,ko,dt){
    function any(){
        var self = this;
        self.rate=ko.observable(0.0);
        self.update = function(){
            if(self.rate()<1){
                updateRate();
            }
            $("#example").dataTable().fnDraw(false);
        };
        function updateRate(){
            $.ajax({
                url:'/rate',
                success:function(v,s){
                    self.rate(v);
                }
            });
        }
        updateRate();
        self.after = function(){
            $('#example').DataTable( {
                "ajax": "/otcpri",
                "processing": true,
                "serverSide":true,
                "createdRow": function ( row, data, index ) {
                    if (data.last-(data.index*self.rate())< 0) {
                        $('td', row).eq(3).css('color', '#00E400');
                        $('td', row).eq(4).css('color', '#00E400');
                        // $('td', row).eq(0).css('color', '#fff')
                    } else if (data.last-(data.index*self.rate()) > 0) {
                        $('td', row).eq(3).css('color', '#ff0e0b');
                        $('td', row).eq(4).css('color', '#ff0e0b');
                    }
                },
                // "serverSide": true,
                "columns": [
                    { "data": "contract_id" },
                    { "data": "last" },
                    {"render":function(data,type,row){
                        return (row.index*self.rate()).toFixed(3);
                    }},
                    { "render":function(data,type,row,meta){
                        return (row.last -  (row.index*self.rate())).toFixed(3);
                    }},
                    {
                        "render":function(data,type,row){
                            var mix = (row.last -  (row.index*self.rate())).toFixed(3);
                            return (mix/(row.index*self.rate())*100).toFixed(3)+"%";
                        }
                    },
                    {"render":function(){
                        return self.rate();
                    }}
                ]
            });
        }
    }

    return new any();
});

