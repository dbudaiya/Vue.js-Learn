# Vue框架学习

[toc]

## 插值表达式

### 1. 插值表达式

> 插值表达式是使用在html中被绑定的元素中。目的是通过插值表达式来获取vue对象中的属性和方法。
>
> vue对象中的属性时data提供，方法是mothods提供。

```html
<!DOCTYPE html>
<html lang="en">
<!--  -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
</head>

<body>
    <div class="add">
        我的名字叫{{ title }}<br/>
        {{ say() }}
        {{ [0,1,2,3,4,5][1] }}<br/>
        {{ {sex:'男',age:20}.sex }}      
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                title: "杜审言"
            },
            methods:{
                say:function(){
                    document.write("我将实现方法的调用")
                }
            }
        });
    </script>
</body>

</html>
```

## Vue中的关键字

> 这些关键字都是作为html页面的标签的属性

### 1. v-model

> 是将标签的value值与vue实例中的data属性值进行绑定

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
</head>

<body>
   <div class="app">
    请输入你学的课程：<input type="text"  v-model="ha">
   </div>
   <script>
       new Vue({
           el:".app",
           data:{
               ha:"Python"
           }
       });
   </script>
</body>

</html>
```

### 2. 事件绑定-v-on

> 1

```html
<!DOCTYPE html>
<html lang="en">
<!--  -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
</head>

<body>
    <div class="add">
        绑定弹窗事件：<input type="text" v-on:click="changer()">  
        <!-- 这个括号可加可不加，就是加了()可以方便以后添加参数！ -->
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                title: "杜审言"
            },
            methods:{
                say:function(){
                    document.write("我将实现方法的调用")
                },
                changer:function(){
                    alert("VUE事件绑定")
                }
            }
        });
    </script>
</body>

</html>
```

```html
	<div class="add">
        绑定弹窗事件：<input type="text" v-on:click="changer(12)">   
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                title: "杜审言"
            },
            methods:{
                say:function(){
                    document.write("我将实现方法的调用")
                },
                changer:function(obj){
                    alert(obj)
                }
            }
        });
    </script>
```

> 比如在响应函数里面，可以指明使用even内置的参数函数，该对象表示当前事件，可以通过even.target.value来获取当前事件对象。

```html
<!DOCTYPE html>
<html lang="en">
<!--  -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
</head>

<body>
    <div class="add">
        绑定弹窗事件：<input type="text" v-on:input="changer">   
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                title: "杜审言"
            },
            methods:{
                say:function(){
                    document.write("我将实现方法的调用")
                },
                changer:function(even){
                    console.log(even.target.value)
                }
            }
        });
    </script>
</body>

</html>
```

#### this用法

> this表示当前VUE对象“new Vue()”,可以通过“this.”来调用当前vue对象的属性和方法

```html
 changer:function(even){
                   this.title = even.target.value;                   
 }
```

>  v-on还可以简写为v-on:input =>@input

```html
<body>
    <div class="add">
        绑定弹窗事件：<input type="text" @input="changer">   <!--简写-->
        <p>{{ title }}</p>
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                title: "杜审言"
            },
            methods:{
                say:function(){
                    document.write("我将实现方法的调用")
                },
                changer:function(even){
                   this.title = even.target.value;                   
                }
            }
        });
    </script>
</body>
```

### 3. v-bind

> 我们知道插值表达式不能写在html标签中的属性内的，如果一定要用vue中的属性作为html标签的属性内容，就可以通过v-bind进行属性绑定。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
</head>

<body>
    <div class="add">
        <a v-bind:href="link">百度</a>
        <!-- 这里上面的link中未用到{{  }}括号 -->
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                link:"http://www.baidu.com"
            }        
        });
    </script>
</body>
</html>
```

>

### 3. v-html

> 解析输出

```html
<body>
    <div class="add">
        <p v-html="link"></p>
        <!-- 这里上面的link中未用到{{  }}括号 -->
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                link:"<a href='http://www.baidu.com'>百度</a>"
            }        
        });
    </script>
</body>
```

### 4. v-text

> 纯文本输出

```html
<body>
    <div class="add">
        <p v-text="link"></p>
        <!-- 这里上面的link中未用到{{  }}括号 -->
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                link:"<a href='http://www.baidu.com'>百度</a>"
            }        
        });
    </script>
</body>
```

## Vue中的事件

> 1. vue中如何使用时间
>
> 2. 事件的参数传递
>
>    分别三个部分：
>
>    设参：
>
>    <button type="button" @click="add(2)">增加</button>
>
>    传参：
>
>    ​	add：function(step){}
>
>    接参：
>
>    ​	this.count+=step;
>
> 3. vue中的事件修饰符
>
>    @ click .stop   阻止点击事件的传播
>
>    @mousemove.stop  阻止鼠标移动事件
>
>    @keyup.stop   		阻止空格键事件
>
>    

```html
<!DOCTYPE html>
<html lang="en">
    <!-- 这里有两个注意的点：click和methods关键词 -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
</head>

<body>
    <div class="add">
        {{ count }}
        <button type="button"  @click="add" >点击</button>
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                count: 0
            },
            methods: {
                add:function () {
                    this.count++
                }
            }
        });
    </script>
</body>

</html>
```



```html
<!DOCTYPE html>
<html lang="en">
<!-- 这里有两个注意的点：click和methods -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.min.js"></script>
</head>

<body>
    <div class="add">
        {{ count }}<br />
        {{ count>=10?'大于十':'不大于十' }}
        <button type="button" @click="add">增加</button>
        <button type="button" @click="jiansao">减少</button>
        <input type="number" v-model="mystop">
    </div>
    <script>
        new Vue({
            el: ".add",
            data: {
                count: 0,
                mystop: 1
            },
            methods: {
                add: function () {
                    this.count += (Number(this.mystop))
                },
                jiansao: function () {
                    if (this.count > 0) {
                        this.count -= (Number(this.mystop))
                    } else {
                        this.count = 0
                    }
                }
            }
        });
    </script>
</body>

</html>
```

## vue改变内容--虚拟DOM和diff算法

### 1. 插值表达式的方式

范例一：

> {{ count>97?"布袋鼠":"不带书"}}

范例二：

> {{	shuju	}}

## Vue改变样式

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>布局篇 计算属性</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
    <style>
        .mydiv {
            width: 300px;
            height: 100px;
            background-color: aquamarine;
        }

        .red {
            background-color: red;
        }

        .green {
            background-color: green;
        }

        .yellow {
            background-color: yellow;
        }
    </style>
</head>

<body>
    <div id="vue">
        <div v-bind:class="{red:temp}" class="mydiv"></div>
        <div v-bind:class="{yellow:temp}" class="mydiv"></div>
        <div class="mydiv"></div>
        <button type="button" @click="temp=!temp">点我小王八蛋</button>
    </div>
    <script>
        let vm = new Vue({
            el: "#vue",
            data: {
                temp: true
            }
        });
    </script>
</body>
</html>
```

