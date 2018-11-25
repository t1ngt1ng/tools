# 工具
该项目下会放一些简易的工具，也是我用到的时候会网页搜索的。  
我尽量将功能写在一个html中，不依赖其他文件。

## 目录
- regTest.html   
描述：用于快速测试你的正则表达式是否正确   
功能：可以查找和替换。自行选择是否忽略大小写和是否全局应用。

- board.html   
因为mac找画板功能很麻烦，之前一直用截图功能。这样可以不联网也可以画  
描述：一个简易画板，点击绘制即可。  
注：如果线条不停止，尝试一下再次点击。mac触控板有时候会出现moseup事件没触发情况。

- convertRGB16.html  
颜色#和rgb互相转换。 

- getSpritePositon.html   
 获取sprite图中的宽高，把图片换成自己想获取位置的就行了
 
 - writeWord.html   
 米字格可写字，仿照慕课网学写一个字，不使用jquery，参考思路，代码不完全一致
 
 - imageScale.html  
 图片缩放，参考慕课思路  
 
 - picFilter.html  
 图片滤镜效果，参考慕课思路，添加缩略图效果
 此文件要起服务，live-server或者http-server都可以，因为canvas.toDataURL()离线状态会报错