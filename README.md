启动配置Apache服务器
启动
打开“终端(terminal)”，输入 sudo apachectl -v，（可能需要输入机器秘密）。如下显示Apache的版本
￼
接着输入 sudo apachectl start，这样Apache就启动了。打开Safari浏览器地址栏输入 “http://localhost”，可以看到内容为“It works!”的页面。其位于“/Library（资源库）/WebServer/Documents/”下，这就是Apache的默认根目录。
Apache的安装目录在：/etc/apache2/，etc默认是隐藏的。有三种方式查看：
1. dock下右键Finder，选择"前往文件夹"，输入"/etc"
2. 在finder下－－－－》前往－－－》前往文件夹，然后输入/etc
3. 可以在terminal 输入 "open /etc"
配置
1. 在终端运行“sudo vi /etc/apache2/httpd.conf”，打开Apche的配置文件
2. 在httpd.conf中找到“#Include /private/etc/apache2/extra/httpd-vhosts.conf”，去掉前面的“＃”，保存并退出。
3. 运行“sudo apachectl restart”，重启Apache后就开启了虚拟主机配置功能。
4. 运行“sudo vi /etc/apache2/extra/httpd-vhosts.conf”，就打开了配置虚拟主机文件httpd-vhost.conf，配置虚拟主机了。需要注意的是该文件默认开启了两个作为例子的虚拟主机

出现Forbidden异常：

Forbidden
You don't have permission to access / on this server.

解决方法如下

Mac系统自带apache服务器
* 查看apache版本sudo apachectl -v 
* 启动apachesudo apachectl start 
* 重启apachesudo apachectl restart 
* 配置apache apache的主配置文件在路径/etc/apache2/下
    * 修改httpd.conf 文件
        * 备份原来的文件sudo cp /etc/apache2/httpd.conf /etc/apache2/httpd.conf.backup 
        * 修改主配置文件$vi /etc/apache2/httpd.conf 
        * 主要修改内容 //181行
        * User _www
        * Group _www
        * //改为(rootname为本机用户名)
        * User xue_yh
        * Group wheel
        * 
        * //219行
        * <Directory />
        *   AllowOverride none
        *   Require all denied
        * </Directory>
        * //改为（修改apache配置:设置访问代理资源被默认不受限制）
        * <Directory />
        *   Require all granted
        *   AllowOverride all
        * </Directory>
        * 
        * //498行
        * # Virtual hosts
        * #Include /private/etc/apache2/extra/httpd-vhosts.conf
        * //改为(去掉前面的#，这样就开启了httpd-vhosts虚拟主机文件)
        * # Virtual hosts 
        * Include /private/etc/apache2/extra/httpd-vhosts.conf 
* 设置虚拟主机 apache的默认的根目录在/Library/WebServer/下，配置虚拟主机后可以不用理会默认的网站根目录，根据自己的需要在合适的地方建立不同的网站目录
    * 修改httpd-vhosts.conf文件，文件位置在/etc/apache2/extra/
        * 修改主配置文件$sudo vi /etc/apache2/extra/httpd-vhosts.conf
        * <VirtualHost *:80>
        * DocumentRoot "/Users/xue_yh/myGitHub"
        * ServerName www.mysite.com
        * ErrorLog "/private/var/log/apache2/mysites-error_log"
        * CustomLog "/private/var/log/apache2/mysites-access_log" common
        * <Directory "/Users/xue_yh/myGitHub”>
        *   Options FollowSymLinks Multiviews Indexes
        *   MultiviewsMatch Any
        *   AllowOverride None
        *   Require all granted
        *   Allow from all
        * </Directory>
        * // 配置请求转发服务器 和 环境路径(反向代理)
        * ProxyPass /web http://example.com/web
        * ProxyPassReverse /web http://example.com/web
        * </VirtualHost> 
* 设置hosts 打开/etc/hosts文件，加入  127.0.0.1       www.mysite.com  #你的网站地址 
* 重启Apache服务器sudo apachectl restart 
* 打开浏览器输入http://你的网站地址
补充:
* PHP mac 内置php, 默认是关闭的. 开启: 打开/etc/apache2/httpd.conf文件// 169行
* #LoadModule php5_module libexec/apache2/libphp5.so
* //修改后(即去掉#注释)
* LoadModule php5_module libexec/apache2/libphp5.so 


