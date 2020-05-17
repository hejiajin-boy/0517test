let html = document.querySelector("#html");
let style = document.querySelector("#style");
//通过css 选择器找到这个元素
let string = `
/* 你好，我叫何加劲
接下来，我想让自己的页面
好看一些，我要开始加样式了!*/
#div1{
    border:1px solid pink;
    width:200px;
    height:200px;
 
}
/* 接下来见证一个div是如何变成一个八卦图的
* 睁大眼睛看好了
* 首先，把 div变成一个圆
**/
#div1 {
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;

}

/* 八卦是阴阳相济
* 一黑一白
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

}


/* 加两个小球 */


#div1::before {
    width:100px;
    height:100px;
    
    
    top:0;
    left:50%;
    transform:translateX(-50%);
background:#000;
border-radius:50%;
background: radial-gradient(circle, rgba(255,255,255,1) 1%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);

}
#div1::after {
    width:100px;
    height:100px;
  
   
    bottom:0;

    left:50%;
    transform:translateX(-50%);
background:#fff;
border-radius:50%;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 89%, rgba(0,0,0,1) 100%);

}











`;
let string2 = "";
let n = 0;

//第二种方式(可以随时停止)
let step = () => {

    setTimeout(() => {

        // 第一种写法：(再添加缩进)
        if (string[n] === "\n") {
            string2 += "<br>";
            //如果是回车 就不照搬
        } else if (string[n] === " ") {
            string2 += "&nbsp;"; //添加缩进
        } else {
            string2 += string[n];
            //如果不是回车 就照搬
        }
        html.innerHTML = string2;
        // 将内容加载到HTML中
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        //随着代码的运行，图形也跟着滚动
        html.scrollTo(0, 99999);
        //手机端


        if (n < string.length - 1) {
            // n不是最后一个
            n += 1;
            step();
        } else {
            // n 是最后一个。
        }
    }, 50)
};
step(); // 执行





//  //给字体加颜色
// let style = document.querySelector("#style");
// setTimeout(() => {
//     style.innerHTML = `
// body{
//     color:red;
// }
// `
// }, 3000)
// console.log(style);





// demo.innerHTML = string.substring(0, n)
//在demo里写数据




//第一种方式（不能停止）
// setInterval(() => {
//         n = n + 1;
//         demo.innerHTML = n;
//     }, 1000)
//每过一段时间响应一次




//第二种写法：
// 用?和:来简写（来解决换行的时候会出现尖括号的问题）
//如果是回车 就不照搬
//如果不是回车 就照搬
// string2 += string[n] === "\n" ? "<br>" : string[n];




// string = string.replace(/\n/g, "<br>")
//把所有的回车变化成 br(换行)(这一种方式会出现，再换行的时候会出现尖括号)