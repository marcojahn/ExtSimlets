Ext.onReady(function () {
    Ext.ux.ajax.SimManager.init();

    describe('Mocking AJAX using SimLet', function () {

        it('can mock simple requests', function () {
            Ext.ux.ajax.SimManager.register({
                '/dummy':{
                    status:'200',
                    responseText:Ext.encode({
                        dummy:true
                    })
                }
            });

            Ext.Ajax.request({
                url:'/dummy',
                method:'GET',
                params:{
                    testparam: 1
                },
                success:function (response, options) {
                    console.log('success')
                    console.log(response);
                    expect(true).toBeTruthy();
                },
                failure:function (response, options) {
                    console.log('failure')
                    console.log(response)
                    expect(true).toBeFalsy();
                }
            })

        });
    });
});