# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 15:54:33
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "daybuy"
#

CREATE TABLE `daybuy` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "daybuy"
#

INSERT INTO `daybuy` VALUES ('01','【名庄】苏迪洛酒庄甜白葡萄酒2010',NULL,868,NULL,'【名庄】苏迪洛酒庄甜白葡萄酒2010','img/buy1.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('02','【名庄】苏迪洛酒庄甜白葡萄酒2010','',231,0,'【名庄】苏迪洛酒庄甜白葡萄酒2010','img/buy2.jpg','','','','','','','','','','','','',''),('03','【名庄】苏迪洛酒庄甜白葡萄酒2010','',232,42,'【名庄】苏迪洛酒庄甜白葡萄酒2010','img/buy3.jpg','','','','','','','','','','','','',''),('04','【名庄】苏迪洛酒庄甜白葡萄酒2010','',643,1243,'【名庄】苏迪洛酒庄甜白葡萄酒2010','img/buy4.jpg','','','','','','','','','','','','',''),('05','【名庄】苏迪洛酒庄甜白葡萄酒2010','',211,0,'【名庄】苏迪洛酒庄甜白葡萄酒2010','img/buy5.jpg','','','','','','','','','','','','','');

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('01','','',109,10,'53度蓝瓷汾酒 清香型白酒475毫升/瓶','img/lis01.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','',''),('02','汾酒','酒',21,19,'53度汾酒老白汾10年陈酿 清香型白','img/lis02.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','',''),('03','汾酒','酒',21,89,'53度汾酒紫砂汾 清香型白酒475毫升','img/lis01.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','',''),('04','汾酒','酒',232,7,'53度汾酒封坛15年 清香型白酒475','img/lis02.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','',''),('05','白酒','酒',32,298,'53度汾酒20年青花瓷 清香型白酒50','img/lis02.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','',''),('06','白酒','酒',123,56,'53度汾酒30年青花瓷 清香型白酒50','img/lis01.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','',''),('07','葡萄酒','酒',231,88,'53度蓝瓷汾酒 清香型白酒475毫升/瓶','img/lis02.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','',''),('08','啤酒','酒',434,876,'53度汾酒20年青花瓷 清香型白酒50','img/lis01.jpg','亲民牛栏山，北京地道味','','','加入购物车','','','','','','','','','');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

INSERT INTO `shoppingcart` VALUES ('',NULL,NULL);

#
# Structure for table "vip"
#

CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `usersex` char(2) DEFAULT NULL,
  `userage` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

INSERT INTO `vip` VALUES ('','',NULL,NULL),('13529206480','aaa111','',NULL),('14790334312','aaa111','女',NULL),('15629353422','aaa111','女',NULL),('15800203543','aaa111','女',NULL),('15829825862','aaa111',NULL,NULL),('15829825863','aaa111',NULL,NULL),('15829825865','aaaa111',NULL,NULL),('15829825869','aaa111',NULL,NULL),('18829206412','aaa111',NULL,NULL),('18829206480','aaa111',NULL,NULL),('18829206482','aaa111',NULL,NULL),('18829206483','aaa111',NULL,NULL),('18829206484','aaa111',NULL,NULL);
