# TypeScript简介

## 1.Ts vs JS

- Ts是Js的超集，最终仍然编译成Js。可以重用JS，也就说可以引入JS流行的库，并不代表着使用了Ts,就不能使用Js了。在某种程度上，它类似于sass，less与css之间的关系。

- Ts比较适合于大型项目的开发。（其原因之一在于它是一门强类型语言，在开发中，能够通过定义变量的类型，避免部分语法上的错误，甚至可以使后期接手代码的开发人员能够更快的了解逻辑，定位错误）

- TypeScript提供了类、模块和接口。


## 2.全局安装Ts

```
cnpm install typescript -g

cnpm install ts-node -g   
/*安装ts-node后，可以使用 ts-node xx.ts,编译该.ts文件*/
```

在此之后，即可使用tsc命令。如： tsc --version ， tsc xx.ts     => xx.js



## 3.Ts中变量的那些事

- 变量综述：

  - Undefined ;

  - Number:数值类型;

  - string : 字符串类型;

  - Boolean: 布尔类型；

  - enum：枚举类型；

  - any : 任意类型，一个比较厉害的类型；js中的let，var，const申明时默认的就是any

  - void：空类型；

  - Array : 数组类型;

  - Tuple : 元祖类型；

  - Null ：空类型;

- 具述：

  - boolean：（其余原始数据类型与boolean用法一致）

    ```typescript
    let booleanTrue: boolean = true
    console.log(booleanTrue);
    // 编译将会通过
    let booleanFalse: boolean = 0;
    console.log(booleanFalse);
    // return new TSError
    let isDone = 0;
    console.log(isDone) // false
    /*这说明了在Ts中，布尔类型只能是true or false，与js中不同。*/
    
    let boolObj: boolean = new Boolean(1);
    console.log(boolObj);
    console.log( typeof new Boolean(1)); // object
    
    /* ---->注意，使用构造函数 Boolean 创造的对象不是布尔值
    通过打印可以知道，new Boolean（）返回的其实是一个obj。
    */
    ```

  - enum:

    枚举用于取值限定在一定的范围内。如申明一周，那么一周就只有七天，星期一到星期天

    ```typescript
    enum week {
        Sun, Mon, Tue, Wed, Thu, Fri, Sat
    }
    ```

    枚举的成员会被赋值为从0开始的递增的数字

    ```typescript
    console.log(week.Sun) // 0
    ```

    但也可以为枚举成员进行赋值，如

    ```typescript
    enum week {
      Sun ="one",
      Mon = true,
      Tue = null,
      Wed = undefined,
      Thu = 0, 
      Fri , Sat
    }
    
    /*
    1. 如果枚举类型有赋值为数字，则不必所有都赋值，
    2. 如果赋值有为字符串的，则所有的都得赋值
    3. 不能赋值true or false
    4. 在具有字符串成员时，不能有null和undefined的赋值（在具有字符串值成员的枚举中不允许计算值。）【这一句留待思考】
    5. 当出现成员赋予数字，而在其后的成员未赋值时，将在其基础上加一，赋值。即
    enum days {
      Tue,
      Thu = 3, 
      Fri , 
      Sat = 3
    }
    console.log(days);
    { '0': 'Tue',
      '3': 'Sat',
      '4': 'Fri',
      Tue: 0,
      Thu: 3,
      Fri: 4,
      Sat: 3 }
    */
    ```

  - any：

    如果一个变量在申明时没有设置类型也没有赋予初值，则会自动识别为any

    ```typescript
    let something;
    something = 'seven';
    something = 7;
    
    console.log(something);
    
    // 等价于：
    let something: any;
    something = 'seven';
    something = 7;
    
    console.log(something);
    ```

  - void:

    在js中的函数中，如果不写return，一般会默认返回undefined。而该类型同样也是作用于函数，表示函数没有返回值

    ```typescript
    function returnVoid(): void  {
        console.log(one);
    }
    ```

    如果要在定义变量时使用，其意义不大。因为只能对变量赋予undefined或者null值。

    ```typescript
    let unusable: void = undefined;
    ```

  - undefined和null：

    `undefined` 类型的变量只能被赋值为 `undefined`，`null` 类型的变量只能被赋值为 `null`。

    与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量

  - Array：

    1. 数组使用 `type[]`或者`Array<type>`表示

    2. 申明了类型的数组变量中，只允许出现该类型的值。即：

       ````typescript
       let noArr: number[] = [1,23,4];
       let numArr: Array<number> = [1,2,"2"]; // typeerror
       ````

    3. 可以使用 `any[]`,但不推荐

  - tuple:

    元组的用法类似于Array，但它允许申明类型时不仅仅只申明一种类型。

    元组就是约定类型的已知数量的数组

    ```typescript
    let tempArr: [number,string] = [1,"cc"];
    // 赋值顺序和申明顺序需保持一致，也需提供申明的所有类型的值,赋值的个数需与类型保持一致
    // 意思是：
    let temp2: [number,string] = ["cc",1] //error
    let temp3: [number,string] = [1] //error
    ```

    鉴于诸多限制，且不利于ts设置类型的初衷，不推荐使用




  ## 4.类型推断

  如果一个变量没有明确的指定参数类型，那么Ts将会依据类型推断的规则，在第一次使用变量时，推断与定义该参数的类型。

  ````typescript
  let myFavoriteNumber = 'seven';
  /*
  1. 申明变量myFavoriteNumber，
  2. 赋值‘seven’，并推断该变量为string
  */
  myFavoriteNumber = 7;
  /* Type 'number' is not assignable to type 'string' */
  
  // 等价于
  let myFavoriteNumber:string = 'seven';
  myFavoriteNumber = 7;
  
  //但不同于
  let myFavoriteNumber;   // --any
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  
  ````

  类型推断与 `any`类型有一点需要注意的是：`any是在变量没有声明类型且未赋值时，无论之后有没有赋值，都会隐式的变成any类型，而推断则是没有明确的指定类型的时候`



  ## 5.联合类型

  联合类型是指：一个变量可以声明多种类型，之后的赋值中，只需要满足声明的多种类型之一即可。

  该规则使用`|`;

  ````typescript
  let myFavoriteNumber: string | number ;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  
  myFavoriteNumber = true; // Type 'boolean' is not assignable to type 'string | number'
  ````



  ## 6.类型断言

  结合联合类型，类型断言是指定联合类型为一个更加具体的类型。一般用于某些特定类型的特定方法时，断言该变量类型。

  比如，函数中传递的参数可能是string，也可能是number，但却需要用到string的length，并且此时你确认你传递的会是一个string值，这时候就需要告诉编译器，这种写法是正常的，然后Ts就会假设你已经做了检测。

但不同于类型转换!!

  一般使用 `<type>值`或者 `值 as type`;

  ````typescript
  function  knowLen(something:string|number) {
      return something.length;
  }  
  // Property 'length' does not exist on type 'string | number'.
  
  function  knowLen(something:string|number) {
   	return (<string>something).length ;
  }  
  // 但不允许断言一个联合类型中未出现的类型，如boolean;
  // 同时注意：当你在TypeScript里使用JSX时，只有as语法断言是被允许的

//-----------------------------
   let someValue: any = "this is a string";
   let strLength: number = (<string>someValue).length;
  ````



  ## 7.函数

  函数的使用，与js类似。只是需要为形参，与函数返回值声明类型：

  ```typescript
  function fnc(name:string,age:number) :void {
      let str = name+","+age+"岁";
      console.log(str);
  }
  
  function sum(x: number, y: number): number {
      return x + y;
  }
  let total:number = sum(1,2);
  console.log(total);
  
  // 注意，使用上述函数时，申明的两个参数都必须传递，否则会报错。                                            ~~~~~~~~~~~~~~~
  //  An argument for 'x' was not provided.
  ```

  Ts中的函数参数有:可选参数，默认参数，剩余形参等。

  1. 可选参数，使用`?`表示定义一个可传递或不传的值

     ````typescript
     function consoleName(firstName:string,lastName?:string):string{
         if(lastName) {
             return firstName + " " + lastName;
         } else return firstName
     }
     ````

     `但需要注意的是，可选参数后面不允许再出现必须参数了`

  2. 默认参数：

     ```typescript
     function consoleName(firstName:string='tom',lastName:string='cat') :string {
         return firstName + " " + lastName;
     }
     ```

     `此时，由于为形参设置默认值了，故可以不受限制，无需可选参数必须在必需参数之后`

  3. 剩余参数：（剩余参数可以参考es6中 `...`拓展运算符的使用）

  ````typescript
  function push(array: number[], ...items: number[]): void {
      items.forEach(function(item: number): void {
          array.push(item);
      });
  }
  
  let a = [];
  push(a, 1, 2, 3);
  ````



  此外，函数表达式中有一种写法是 `=>` 需要注意，它与es6中的箭头函数不同：

  ````typescript
  let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
      return x + y;
  };
  // 箭头左边的括号表示: 输入x，y两个参数值，值为number类型，经过函数逻辑，输出number类型的值
  
  //而箭头函数的写法：
  const add = (n1:number,n2:number):number=>{
      return n1+n2
  }
  
  console.log(add(1,4))
  ````



## 8.字符串字面量类型

类型使用`type`申明，约束取值只能是某几个字符串中的一个值

````typescript
type x = "cat" | "dog" | "mouse";
let a:x = 'cat'; 
````



## 9.类与接口

1.类：

1. `public` :公有修饰符，修饰的变量或方法可以在类的内部或外部使用
2. `private`：私有修饰符，修饰的变量或方法只可以在类的内部使用
3. `protected`：保护修饰符，与`private`类似，但可以在子类中使用
4. `readonly`:只读，该符修饰的属性表示只能读取，而不能改变值，且在申明属性时就需要赋值。



2.接口

接口使用`interface`定义，一般抽象出类之间的共同的规范。在接口中，定义了多少参数，那么在使用的时候就要都设置。

````typescript
interface Man {
    gender: string
    interest: Array<string>
    age: number
    doing?: Array<string>
}

const male: Man = {
    gender: '男',
    interest: ["吃"，"喝"]，
    age: 12
}
````



## 10.泛型

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型。（变量类型的参数化 ---by java）

````typescript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']

// 在函数名后添加`<T>`,T指代任意类型。当使用的的时候，设置T为指定类型。如果不设置T，则会依据类型推断算出；
````



# 搭建项目

`````
 create-react-app my-app --scripts-version=react-scripts-ts
 =>
    my-app/
        ├─ .gitignore
        ├─ images.d.ts
        ├─ node_modules/
        ├─ public/
        ├─ src/
        │  └─ ...
        ├─ package.json
        ├─ tsconfig.json
        ├─ tsconfig.prod.json
        ├─ tsconfig.test.json
        └─ tslint.json
`````

如果要引入antd：

1. yarn add antd
2. yarn add ts-import-plugin react-app-rewired@1.6.2 react-app-rewire-less --dev
    // 注意: 这里暂时不要安装react-app-rewired 2.0版本的, 后续命令行会出错 这里安装的是1.6.2版本的
3. //根目录下新建 config-overrides.js

````javascript

const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule => rule.loader && typeof rule.loader === 'string' && rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryDirectory: 'es',
          libraryName: 'antd',
          style: true,
        }),
      ],
    }),
  };

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A', // 主题色
    },
  })(config, env);

  return config;
};
````



4.修改 package.json 中的 script 任务项

````json
 "scripts": {
   "start": "react-app-rewired start --scripts-version react-scripts-ts",
   "build": "react-app-rewired build --scripts-version react-scripts-ts",
   "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts"
},
````



当然可以直接clone antd pro的代码



# 搭建项目中遇到的那些事

1. ### npm run eject：

   ​	命令用于将项目中的配置文件暴露出来，如config/webpack-config.js等，方便用户自定义配置项。

   但使用该命名有个前提： 需要先初始化本地仓库，即

   ​        1.1  git init 

   ​	1.2  git commit -m "...."  

   ​	1.3  npm run eject

   -----------------------------

   ​	此外，如果使用了CRA，创建项目，并执行了eject，就无法享受CRA升级带来的好处。原因在于：CRA 与其他脚手架不同的另一个地方，就是可以通过升级其中的`react-scripts`包来升级 CRA 的特性。比如用老版本 CRA 创建了一个项目，这个项目不具备 [PWA](https://link.juejin.im?target=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Fprogressive-web-apps%2F) 功能，但只要项目升级了`react-scripts`包的版本就可以具备 PWA 的功能，项目本身的代码不需要做任何修改。

   ​	而eject之后，`react-scripts`则变成了以文件形式存在于项目中，不再是资源包

2. ### react-app-rewired:

   ​	类似eject,但它作为一个工具，安装后需要在根目录下新建件config-overrides.js，搭配使用，从而在其中进行各种webpack操作。并需要更改package.json文件中script中的配置

   ​	较eject而言，生成的文件更少。

   [扩展create-react-app方法简介]: https://juejin.im/post/5a5d5b815188257327399962

3. ### allowSyntheticDefaultImports：

   ​	在Ts中导入一般采用的是类似于`import * as React from 'react';`,而对于习惯了解构导入组件的写法的情况，在`tsconfig.json`文件中的`compilerOptions`可配置属性`allowSyntheticDefaultImports`为`true`

4. ### @type/react-router-dom等：

   ​	由于`react-dom,react-router-dom等`都不是使用Ts编写的， Ts无法解析识别，因此在使用时需先下载`@type/react-router-dom,@type/react-dom，@types/react`

5. 








