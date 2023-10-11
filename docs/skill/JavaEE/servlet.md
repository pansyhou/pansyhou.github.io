### 响应乱码问题

```java
//      设置服务端编码格式
        resp.setCharacterEncoding("UTF-8");
//      设置客户端编码格式和响应的MIME类型
        resp.setHeader("content-type","text/html;Charset=UTF-8");

//      一句话就可以的那种
        resp.setContentType("text/html;Charset=UTF-8");
//      字符输出流
        PrintWriter writer = resp.getWriter();
        writer.write("<h2>你好</h2>");
```



### 重定向

服务器指导，客户端的行为，request域不共享

存在两次请求

### Cookie

![image-20231001200643652](https://pic.imgdb.cn/item/651960dac458853aefb444b6)

![image-20231001201044317](https://pic.imgdb.cn/item/651961c5c458853aefb4d4f4)

![image-20231001201145646](https://pic.imgdb.cn/item/65196201c458853aefb4de20)

![image-20231001201336476](https://pic.imgdb.cn/item/65196271c458853aefb4f167)![image-20231001201436642](https://pic.imgdb.cn/item/651962adc458853aefb4fa70)

### Seection

![image-20231001201953583](https://pic.imgdb.cn/item/651963eac458853aefb52daf)

![image-20231001202124018](https://pic.imgdb.cn/item/65196444c458853aefb53ccb)

### ![image-20231001203818035](https://pic.imgdb.cn/item/6519683bc458853aefb5efe6)![image-20231001210952843](https://pic.imgdb.cn/item/65196fa1c458853aefb8a318)ServletCont

![image-20231001211226866](https://pic.imgdb.cn/item/6519703bc458853aefb91ffc)![image-20231001211553509](https://pic.imgdb.cn/item/65197109c458853aefb94353)![image-20231001211740569](https://pic.imgdb.cn/item/65197175c458853aefb955ba)

### 文件上传

![image-20231001213923510](https://pic.imgdb.cn/item/6519768bc458853aefba5641)

### 注释

![image-20231001222256130](https://pic.imgdb.cn/item/651980c0c458853aefbdc3a1)



### 包含

![image-20231003175231033](https://pic.imgdb.cn/item/651be467c458853aef50249f)



### 域对象

![image-20231003175555737](https://pic.imgdb.cn/item/651be52dc458853aef503610)

### EL表达式

![image-20231003182319851](https://pic.imgdb.cn/item/651beb99c458853aef52fd5e)首先显示的应该是最小范围的

![image-20231003182720448](https://pic.imgdb.cn/item/651bec89c458853aef53127b)

### ![image-20231003182733348](https://pic.imgdb.cn/item/651bec96c458853aef53139d)![image-20231003183048782](https://pic.imgdb.cn/item/651bed5ac458853aef5327bc)JSTL

![image-20231003184456768](https://pic.imgdb.cn/item/651bf0aac458853aef53e756)

![image-20231003185417767](https://pic.imgdb.cn/item/651bf2dbc458853aef54283e)

![image-20231003185600849](https://pic.imgdb.cn/item/651bf342c458853aef54309e)
