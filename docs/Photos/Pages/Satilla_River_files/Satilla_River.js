// Created by iWeb 2.0.4 local-build-20100815

function createMediaStream_id4()
{return IWCreatePhotocast("http://www.georgiariversurvey.org/georgiariversurvey.org/Photos/Pages/Satilla_River_files/rss.xml",true,true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://www.georgiariversurvey.org/georgiariversurvey.org/Photos/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://www.georgiariversurvey.org/georgiariversurvey.org/Photos/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(3,new IWSize(180,180),new IWSize(180,0),new IWSize(216,195),27,27,0,new IWSize(6,6)),new IWPhotoFrame([IWCreateImage('Satilla_River_files/comic-1_01.png'),IWCreateImage('Satilla_River_files/comic-1_02.png'),IWCreateImage('Satilla_River_files/comic-1_03.png'),IWCreateImage('Satilla_River_files/comic-1_06.png'),IWCreateImage('Satilla_River_files/comic-1_09.png'),IWCreateImage('Satilla_River_files/comic-1_08.png'),IWCreateImage('Satilla_River_files/comic-1_07.png'),IWCreateImage('Satilla_River_files/comic-1_04.png')],null,0,1.000000,4.000000,4.000000,1.000000,1.000000,5.000000,5.000000,6.000000,6.000000,71.000000,115.000000,71.000000,115.000000,null,null,null,0.500000),imageStream,range,null,null,1.000000,{backgroundColor:'#000000',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Satilla_River_files/Satilla_RiverMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
