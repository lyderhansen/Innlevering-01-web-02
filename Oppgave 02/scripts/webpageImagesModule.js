//Modul som inneholder alle bilder av nettsteder
var WEBPAGEIMAGESMODULE = (function(){
    
    //JSON-objekt-liste
    var webpageListJSON = {"webpageList":[
        {"title": "Foehn", "bildeSrc": "foehn.jpg"},
        {"title": "Leihu", "bildeSrc": "leihu.jpg"},
        {"title": "Hugs for monsters", "bildeSrc": "hugs-for-monsters.jpg"},
        {"title": "Ectomachine", "bildeSrc": "ectomachine.jpg"},
        {"title": "Diego Latorre", "bildeSrc": "diego-latorre.jpg"}        
    ]};
    
    var getImageSrc = function(imageIndex){
        return webpageListJSON.webpageList[imageIndex].bildeSrc;   
    };
    
    var getNumberOfImages = function(){
        return webpageListJSON.webpageList.length;
    }
    
    return {
        getImageSrc: getImageSrc,
        getNumberOfImages: getNumberOfImages
    };    
    
}());//--end WEBPAGEIMAGESMODULE