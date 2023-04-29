"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[59299],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var o=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return r?o.createElement(k,a(a({ref:t},s),{},{components:r})):o.createElement(k,a({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77945:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=r(83117),l=r(80102),n=(r(67294),r(3905)),a=["components"],i={},c=void 0,p={unversionedId:"ros/ros_control",id:"ros/ros_control",title:"ros_control",description:"ros control",source:"@site/docs/ros/ros_control.md",sourceDirName:"ros",slug:"/ros/ros_control",permalink:"/en/docs/ros/ros_control",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Controller\u548cHW\u4ea4\u6d41",id:"controller\u548chw\u4ea4\u6d41",level:2},{value:"WSL2\u8fde\u63a5\u4e32\u53e3\u5b8c\u6210Robot\u7c7b\uff0c\u5b9e\u73b0read\uff0cwrite",id:"wsl2\u8fde\u63a5\u4e32\u53e3\u5b8c\u6210robot\u7c7b\u5b9e\u73b0readwrite",level:2},{value:"\u8bbe\u5907\u8fde\u63a5",id:"\u8bbe\u5907\u8fde\u63a5",level:3},{value:"windows",id:"windows",level:4},{value:"WSL2",id:"wsl2",level:4},{value:"\u7ed9\u4e32\u53e3\u6743\u9650",id:"\u7ed9\u4e32\u53e3\u6743\u9650",level:4}],m={toc:u};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://wiki.ros.org/ros_control?action=AttachFile&do=get&target=gazebo_ros_control.png",alt:"ros control"})),(0,n.kt)("p",null,"\u8001\u751f\u5e38\u8c08\u7684\u4e00\u5f20\u6846\u67b6\u56fe\u4e86\uff0c"),(0,n.kt)("h2",{id:"controller\u548chw\u4ea4\u6d41"},"Controller\u548cHW\u4ea4\u6d41"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/joint_state_controller/include/joint_state_controller"},"joint_state_controller")," - \u5c06\u6ce8\u518c\u5230 hardware_interface\uff1a",(0,n.kt)("a",{parentName:"li",href:"http://wiki.ros.org/JointStateInterface"},"\uff1aJointStateInterface")," \u7684\u6240\u6709\u8d44\u6e90\u7684\u72b6\u6001\u53d1\u5e03\u5230\u7c7b\u578b",(0,n.kt)("a",{parentName:"li",href:"http://docs.ros.org/melodic/api/sensor_msgs/html/msg/JointState.html"},"\u4e3a sensor_msgs/JointState")," \u7684\u4e3b\u9898\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"joint_state_controller"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/position_controllers/include/position_controllers"},"position_controllers")," - \u547d\u4ee4",(0,n.kt)("a",{parentName:"li",href:"http://wiki.ros.org/HardwareInterface"},"\u786c\u4ef6\u63a5\u53e3"),"\u7684\u6240\u9700\u4f4d\u7f6e\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"joint_position_controller - \u63a5\u6536\u4f4d\u7f6e\u8f93\u5165\u5e76\u53d1\u9001\u4f4d\u7f6e\u8f93\u51fa\uff0c\u53ea\u9700\u5c06\u8f93\u5165\u4e0e",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/forward_command_controller"},"forward_command_controller"),"\u4e00\u8d77\u4f20\u8f93\u5373\u53ef\u3002"),(0,n.kt)("li",{parentName:"ul"},"joint_group_position_controller - \u4e00\u6b21\u8bbe\u7f6e\u591a\u4e2a\u5173\u8282\u4f4d\u7f6e\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/velocity_controllers/include/velocity_controllers"},"velocity_controllers")," - \u5411",(0,n.kt)("a",{parentName:"li",href:"http://wiki.ros.org/HardwareInterface"},"\u786c\u4ef6\u63a5\u53e3"),"\u547d\u4ee4\u6240\u9700\u7684\u901f\u5ea6\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"joint_position_controller - \u4f7f\u7528 PID \u63a7\u5236\u5668\u63a5\u6536\u4f4d\u7f6e\u8f93\u5165\u5e76\u53d1\u9001\u901f\u5ea6\u8f93\u51fa\u3002"),(0,n.kt)("li",{parentName:"ul"},"joint_velocity_controller - \u63a5\u6536\u901f\u5ea6\u8f93\u5165\u5e76\u53d1\u9001\u901f\u5ea6\u8f93\u51fa\uff0c\u53ea\u9700\u5c06\u8f93\u5165\u4e0e",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/forward_command_controller"},"forward_command_controller"),"\u4e00\u8d77\u4f20\u8f93\u5373\u53ef\u3002"),(0,n.kt)("li",{parentName:"ul"},"joint_group_velocity_controller - \u4e00\u6b21\u8bbe\u7f6e\u591a\u4e2a\u5173\u8282\u901f\u5ea6\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/effort_controllers/include/effort_controllers"},"effort_controllers")," - \u547d\u4ee4\u6240\u9700\u7684\u529b\uff08\u529b/\u626d\u77e9\uff09\u5230\u786c\u4ef6\u63a5\u53e3\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"joint_position_controller - \u4f7f\u7528 PID \u63a7\u5236\u5668\u63a5\u6536\u4f4d\u7f6e\u8f93\u5165\u5e76\u53d1\u9001\u52aa\u529b\u8f93\u51fa\u3002"),(0,n.kt)("li",{parentName:"ul"},"joint_group_position_controller - \u4e00\u6b21\u8bbe\u7f6e\u591a\u4e2a\u5173\u8282\u4f4d\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},"joint_velocity_controller - \u4f7f\u7528 PID \u63a7\u5236\u5668\u63a5\u6536\u901f\u5ea6\u8f93\u5165\u5e76\u53d1\u9001\u52aa\u529b\u8f93\u51fa\u3002"),(0,n.kt)("li",{parentName:"ul"},"joint_effort_controller - \u63a5\u6536\u5de5\u4f5c\u91cf\u8f93\u5165\u5e76\u53d1\u9001\u5de5\u4f5c\u91cf\u8f93\u51fa\uff0c\u53ea\u9700\u4f7f\u7528",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/forward_command_controller"},"forward_command_controller"),"\u4f20\u8f93\u8f93\u5165\u3002"),(0,n.kt)("li",{parentName:"ul"},"joint_group_effort_controller - \u540c\u65f6\u8bbe\u7f6e\u591a\u4e2a\u5171\u540c\u52aa\u529b\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/tree/melodic-devel/joint_trajectory_controller"},"joint_trajectory_controllers")," - \u7528\u4e8e\u6837\u677f\u6574\u4e2a\u8f68\u8ff9\u7684\u989d\u5916\u529f\u80fd\u3002\u67e5\u770b",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ros-controls/ros_controllers/blob/melodic-devel/joint_trajectory_controller/src/joint_trajectory_controller.cpp"},"\u6e90\u6587\u4ef6"),"\uff0c\u4e86\u89e3joint_trajectory_controller\u5982\u4f55\u4e0eposition_controller\u3001velocity_controller\u7b49\u4e00\u8d77\u547d\u540d\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"position_controller"),(0,n.kt)("li",{parentName:"ul"},"velocity_controller"),(0,n.kt)("li",{parentName:"ul"},"effort_controller"),(0,n.kt)("li",{parentName:"ul"},"position_velocity_controller"),(0,n.kt)("li",{parentName:"ul"},"position_velocity_acceleration_controller"))))),(0,n.kt)("p",null,"\u4e0a\u8ff0\u4e3acontroller list\uff0c\u9700\u8981\u5229\u7528\u4ed6\u4eec\u4e0eHW\u4ea4\u6d41\uff0c\u4e0b\u9762\u662f\u786c\u4ef6\u7684\u63a5\u53e3"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ROS\u63a7\u5236\u5c06\u786c\u4ef6\u63a5\u53e3\u4e0e\u4e0a\u8ff0ROS\u63a7\u5236\u5668\u4e4b\u4e00\u7ed3\u5408\u4f7f\u7528\uff0c\u4ee5\u5411\u786c\u4ef6\u53d1\u9001\u548c\u63a5\u6536\u547d\u4ee4\u3002"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1JointCommandInterface.html"},"\u8054\u5408\u547d\u4ee4\u63a5\u53e3")," - \u652f\u6301\u6307\u6325\u5173\u8282\u9635\u5217\u7684\u786c\u4ef6\u63a5\u53e3\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e9b\u547d\u4ee4\u53ef\u4ee5\u5177\u6709\u4efb\u4f55\u8bed\u4e49\u542b\u4e49\uff0c\u53ea\u8981\u5b83\u4eec\u6bcf\u4e2a\u547d\u4ee4\u90fd\u53ef\u4ee5\u7531\u5355\u4e2a\u53cc\u7cbe\u5ea6\u8868\u793a\uff0c\u5b83\u4eec\u4e0d\u4e00\u5b9a\u662f effort \u547d\u4ee4\u3002\u82e5\u8981\u6307\u5b9a\u6b64\u547d\u4ee4\u7684\u542b\u4e49\uff0c\u8bf7\u53c2\u9605\u6d3e\u751f\u7c7b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1EffortJointInterface.html"},"\u52aa\u529b\u8054\u5408\u63a5\u53e3")," - \u7528\u4e8e\u6307\u6325\u57fa\u4e8e\u52aa\u529b\u7684\u5173\u8282\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1VelocityJointInterface.html"},"\u901f\u5ea6\u5173\u8282\u63a5\u53e3")," - \u7528\u4e8e\u6307\u6325\u57fa\u4e8e\u901f\u5ea6\u7684\u5173\u8282\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1PositionJointInterface.html"},"\u4f4d\u7f6e\u5173\u8282\u63a5\u53e3")," - \u7528\u4e8e\u6307\u6325\u57fa\u4e8e\u4f4d\u7f6e\u7684\u5173\u8282\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1JointStateInterface.html"},"\u5173\u8282\u72b6\u6001\u63a5\u53e3")," - \u652f\u6301\u8bfb\u53d6\u547d\u540d\u5173\u8282\u6570\u7ec4\u72b6\u6001\u7684\u786c\u4ef6\u63a5\u53e3\uff0c\u6bcf\u4e2a\u547d\u540d\u5173\u8282\u90fd\u6709\u4e00\u5b9a\u7684\u4f4d\u7f6e\u3001\u901f\u5ea6\u548c\u529b\uff08\u529b\u6216\u626d\u77e9\uff09\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1ActuatorStateInterface.html"},"\u6267\u884c\u5668\u72b6\u6001\u63a5\u53e3")," - \u652f\u6301\u8bfb\u53d6\u547d\u540d\u6267\u884c\u5668\u6570\u7ec4\u72b6\u6001\u7684\u786c\u4ef6\u63a5\u53e3\uff0c\u6bcf\u4e2a\u6267\u884c\u5668\u90fd\u6709\u4e00\u5b9a\u7684\u4f4d\u7f6e\u3001\u901f\u5ea6\u548c\u529b\uff08\u529b\u6216\u626d\u77e9\uff09\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c\u5668\u547d\u4ee4\u63a5\u53e3"))),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u52aa\u529b\u6267\u884c\u5668\u63a5\u53e3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901f\u5ea6\u6267\u884c\u5668\u63a5\u53e3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f4d\u7f6e\u6267\u884c\u5668\u63a5\u53e3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://wiki.ros.org/PosVelJointInterface"},"PosVelJointInterface"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://wiki.ros.org/PosVelAccJointInterface"},"PosVelAccJointInterface"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u529b-\u626d\u77e9\u4f20\u611f\u5668\u63a5\u53e3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IMU \u4f20\u611f\u5668\u63a5\u53e3")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"wsl2\u8fde\u63a5\u4e32\u53e3\u5b8c\u6210robot\u7c7b\u5b9e\u73b0readwrite"},"WSL2\u8fde\u63a5\u4e32\u53e3\u5b8c\u6210Robot\u7c7b\uff0c\u5b9e\u73b0read\uff0cwrite"),(0,n.kt)("p",null,"\u4e00\u4e0a\u6765\u6211\u5c31\u8499\u4e86\uff0c\u600e\u4e48 ",(0,n.kt)("inlineCode",{parentName:"p"},"<termios.h> "),"\u8fd9\u54e5\u4eecinclude\u4e0d\u4e0a\u7684\uff1f"),(0,n.kt)("p",null,"\u8fd9\u4e48\u8bf4\u662f",(0,n.kt)("em",{parentName:"p"},"POSIX"),"\u7ec8\u7aef\u63a7\u5236wsl\u662f\u6ca1\u4e86\uff1f"),(0,n.kt)("p",null,"\u641e\u4e86\u5f88\u4e45\uff0c\u5982\u540c\u50bb\u5b50\u822c\uff0c\u5176\u5b9e\u81ea\u5df1\u4e4b\u524d\u5c31\u641e\u8fc7usbip\u8fd9\u4e2a\u9b3c\u4e1c\u897f\u4e86\uff0c\u5c31\u5361\u5728\u6ca1\u7ed9\u4e32\u53e3\u6743\u9650\u4e86QAQ\u3002"),(0,n.kt)("p",null,"\u5728wsl2\u8981\u5b9e\u73b0\u4e32\u53e3\uff0c\u53ef\u4ee5\u7528USBIPD-WIN"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/windows/wsl/connect-usb"},"\u8fde\u63a5 USB \u8bbe\u5907 | Microsoft Learn")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_28695769/article/details/125202748"},"(234\u6761\u6d88\u606f) WSL2\u4e0b\u7684usb\u4e32\u53e3\u8bbe\u5907\u4f7f\u7528_MagicKingC\u7684\u535a\u5ba2-CSDN\u535a\u5ba2_wsl2 \u4e32\u53e3")),(0,n.kt)("p",null,"WSL2\u4e0d\u80fd\u76f4\u63a5\u7528\u4e32\u53e3\uff0c\u9700\u8981USBIPD-WIN \u9879\u76ee\u4e3a WSL 2 \u63d0\u4f9b USB \u8bbe\u5907\u652f\u6301\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5728windows\u91cc"),"\uff0c\u4e0b\u8f7dusbipd ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dorssel/usbipd-win/releases"},"Releases \xb7 dorssel/usbipd-win (github.com)")),(0,n.kt)("p",null,"WSL2\u91cc\uff0c\u4e0b\u8f7d\u5de5\u5177\u5305 "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install linux-tools-5.4.0-77-generic hwdata\nsudo update-alternatives --install /usr/local/bin/usbip usbip /usr/lib/linux-tools/5.4.0-77-generic/usbip 20\n")),(0,n.kt)("h3",{id:"\u8bbe\u5907\u8fde\u63a5"},"\u8bbe\u5907\u8fde\u63a5"),(0,n.kt)("h4",{id:"windows"},"windows"),(0,n.kt)("p",null,"\u5728powershell\u91cc\u64cd\u4f5c\uff0c\u5217\u51fa\u6240\u6709\u8bbe\u5907"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"usbipd wsl list\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"usbipd wsl attach --busid \u8bbe\u5907\u7684busid\u53f7\n")),(0,n.kt)("h4",{id:"wsl2"},"WSL2"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"lsusb\n")),(0,n.kt)("p",null,"\u67e5\u770b\u4e32\u53e3\u8bbe\u5907\u6709\u6ca1\u6709\u88ab\u5217\u51fa"),(0,n.kt)("h4",{id:"\u7ed9\u4e32\u53e3\u6743\u9650"},"\u7ed9\u4e32\u53e3\u6743\u9650"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod a+rw /dev/ttyUSB0\n")),(0,n.kt)("p",null,"\u5b8c\u6210"),(0,n.kt)("p",null,"\u5728usbipd wsl attach --busid \u8fd9\u4e2a\u540e\u9762\u52a0\u4e0a\u8fd9\u4e2a\uff0c\u80fd\u81ea\u52a8attach"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"--auto-attach\n")))}d.isMDXComponent=!0}}]);