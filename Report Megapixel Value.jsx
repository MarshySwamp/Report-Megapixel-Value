// https://forums.adobe.com/message/10151708#10151708
// Based on the folllowing script:
// https://graphicdesign.stackexchange.com/questions/37262/photoshop-scripting-get-image-dimensions-to-clipboard
#target photoshop
var savedRuler = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
var w = app.activeDocument.width.toString().replace(' px', '');  
var h = app.activeDocument.height.toString().replace(' px', '');  
var mp = ('Megapixel value: ' + w * h / 1000000 + ' MP' + '\n' + 'Width:  ' + w + ' px' + '\n' + 'Height: ' + h + ' px');  
app.preferences.rulerUnits = savedRuler;
alert(mp); 
