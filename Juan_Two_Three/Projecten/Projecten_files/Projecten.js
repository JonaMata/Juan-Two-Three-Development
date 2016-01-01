// Created by iWeb 3.0.4 local-build-20160101

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.800000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://developer.juantwothree.me/Juan_Two_Three/Projecten/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Projecten_files/ProjectenMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();IMpreload('Projecten_files','shapeimage_3','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
