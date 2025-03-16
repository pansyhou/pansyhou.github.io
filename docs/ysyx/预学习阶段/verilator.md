---
id: verilator_study
slug: /verilator_study
title: verilator初学习
authors: pansyhou
---



## verilator手册 C++的示例

```cpp
#include "Vour.h"
#include "verilated.h"
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

int main(int argc, char** argv) {
  //Verilated上下文对象，管理仿真环境（解析命令行
    VerilatedContext* contextp = new VerilatedContext;
    //main函数传参到Verilated
    contextp->commandArgs(argc, argv);
    //实例化Verilog模块的C++模型
    //Vour是Verilator将Verilog顶层模块（如module our）转换生成的类，代表被测试的设计（DUT）
    Vour* top = new Vour{contextp};
    //检查Verilog代码中是否调用了$finish
    while (!contextp->gotFinish()) { top->eval(); }//更新组合逻辑和时序逻辑状态
    delete top;
    delete contextp;
    return 0;
}

```



`our.v`：

```verilog
module our;
 initial begin $display("Hello World"); $finish; end
endmodule

```

> .v 后面需要新的空白一行



编译

```shell
verilator --cc --exe --build -j 0 -Wall sim_main.cpp our.v
```



> 疑惑：这cpp怎么得到该module并运行？





### 双控开关

将逻辑套入环境中即可

```cpp
#include "Vour.h"
#include "verilated.h"
#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

int main(int argc, char** argv) {
  //Verilated上下文对象，管理仿真环境（解析命令行
    VerilatedContext* contextp = new VerilatedContext;
    //main函数传参到Verilated
    contextp->commandArgs(argc, argv);
    //实例化Verilog模块的C++模型
    //Vour是Verilator将Verilog顶层模块（如module our）转换生成的类，代表被测试的设计（DUT）
    Vour* top = new Vour{contextp};
    //检查Verilog代码中是否调用了$finish
    while (!contextp->gotFinish()) { 
      int a = rand() & 1;
      int b = rand() & 1;
      top->a = a;
      top->b = b;
      top->eval();
      printf("a = %d, b = %d, f = %d\n", a, b, top->f);
      assert(top->f == (a ^ b));
      // top->eval(); 
      }//更新组合逻辑和时序逻辑状态
    delete top;
    delete contextp;
    return 0;
}

```



![](https://pic1.imgdb.cn/item/67d6755388c538a9b5bf30ec.png)

### 打印并查看波形

GTKWave，其实看man直接干到example就行了

但是example也没写，乐了

```cpp
#include "Vour.h"
#include "verilated.h"
//new
#include "verilated_vcd_c.h" //可选，如果要导出vcd则需要加上

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

int main(int argc, char** argv) {
    //Verilated上下文对象，管理仿真环境（解析命令行
    VerilatedContext* contextp = new VerilatedContext;
    //main函数传参到Verilated
    contextp->commandArgs(argc, argv);
    //实例化Verilog模块的C++模型
    //Vour是Verilator将Verilog顶层模块（如module our）转换生成的类，代表被测试的设计（DUT）
    Vour* top = new Vour{contextp};
    //new
    VerilatedVcdC* tfp = new VerilatedVcdC; //初始化VCD对象指针
    contextp->traceEverOn(true); //打开追踪功能
    top->trace(tfp, 0); //
    tfp->open("wave.vcd"); //设置输出的文件wave.vcd


    //检查Verilog代码中是否调用了$finish
    while (!contextp->gotFinish()) { 
      int a = rand() & 1;
      int b = rand() & 1;
      top->a = a;
      top->b = b;
      top->eval();
      printf("a = %d, b = %d, f = %d\n", a, b, top->f);
      //new
      tfp->dump(contextp->time()); //dump wave
      contextp->timeInc(1); //推动仿真时间

      assert(top->f == (a ^ b));
      // top->eval(); 
      }//更新组合逻辑和时序逻辑状态

    tfp->close();
    delete top;
    delete contextp;
    return 0;
}

```



活了家人们



![](https://pic1.imgdb.cn/item/67d67a5788c538a9b5bf320d.png)