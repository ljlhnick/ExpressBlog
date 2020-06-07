$(document).ready(function() {
    // var hiddenProperty = 'hidden' in document ? 'hidden' :    
    // 'webkitHidden' in document ? 'webkitHidden' :    
    // 'mozHidden' in document ? 'mozHidden' :    
    // null;
    // var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    // var onVisibilityChange = function(){
    //     if (!document[hiddenProperty]) {   
    //         console.log("111") ;
    //     }else{
    //         console.log("222") ;
    //     }
    // }
    $(".middle .content .article").click(function(e){
        // console.log(e);
        console.log("跳转路由！")
        $.ajax({
            url:"/detail",
        })
    })
})