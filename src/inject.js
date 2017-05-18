var images = $("._jjzlb img");
images.each(function(i,a){
    console.log($(a).attr("src"))
    var str = "<a href='"+ $(a).attr("src") +"' target='_blank'>Download</button>";
    $(a).parent().parent().parent().append(str);
});