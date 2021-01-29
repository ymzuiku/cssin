# cssin

## TODO

- [x] 所有样式
  - `background:#f00`
- [x] 兼容空格
  - `margin:20px|10px`
- [ ] 快捷 css 变量
  - `background:--blue-500`
- [ ] 子代选择器、后代选择器、兄弟选择器
  - `background>div|p+p:--blue-500`
- [x] 伪类
  - `hover:background:--blue-500`
- [x] 媒体查询
  - `md:background:--blue-500`
- [x] 伪类及媒体查询组合
  - `md:hover:background:--blue-500`
- [x] 组件
  - `component("button", "background:--blue-500")`
  - `button`
- [x] 组件嵌套
  - `component("button", "background:--blue-500")`
  - `component("button2", "color:#fff")`
  - `button2`
- [x] 组件伪类
  - `component("button", "background:--blue-500")`
  - `hover:button`
- [x] 子组件伪类高优先级
  - `component("button", "background:--blue-500 active:font-size:40px")`
  - `hover:button`
- [x] 组件参数
  - `component("b", "border:$1|solid|$2")`
  - `b:2px|#f00`
