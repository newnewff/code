.lazy  v-model.lazy="value"
```
input 光标离开才更新视图。
```

.stop   @click.stop="shout(1)"
```
由于事件冒泡的机制，我们给元素绑定点击事件的时候，也会触发父级的点击事件。
.stop一键阻止事件冒泡。相当于调用了event.stopPropagation()方法。
```

.self
```
只当事件是从事件绑定的元素本身触发时才触发回调。
子元素会冒泡到父元素导致触发父元素的点击事件，当我们加了这个.self以后，我们点击button不会触发父元素的点击事件shout。
```

.prevent
```
用于阻止事件的默认行为，例如，当点击提交按钮时阻止对表单的提交。相当于调用了event.preventDefault()方法。
```

.once  @click.once=
```
这个修饰符的用法也是和名字一样简单粗暴，只能用一次，绑定了事件以后只能触发一次，第二次就不会触发。
```

.capture
```
从上面我们知道了事件的冒泡，其实完整的事件机制是：捕获阶段--目标阶段--冒泡阶段。
默认的呢，是事件触发是从目标开始往上冒泡。
当我们加了这个.capture以后呢，我们就反过来了，事件触发从包含这个元素的顶层开始往下触发。
```

.passive  v-on:scroll.passive="onScroll"
```
当我们在监听元素滚动事件的时候，会一直触发onscroll事件，在pc端是没啥问题的，但是在移动端，会让我们的网页变卡。

因此我们使用这个修饰符的时候，相当于给onscroll事件整了一个.lazy修饰符
```

.native
```
我们经常会写很多的小组件，有些小组件可能会绑定一些事件，但是，像下面这样绑定事件是不会触发的。

<My-component @click="shout(3)">My-component>
必须使用.native来修饰这个click事件(即)，可以理解为该修饰符的作用就是把一个vue组件转化为一个普通的HTML标签。

注意
使用.native修饰符来操作普通HTML标签是会令事件失效的
```

鼠标按钮修饰符
```
.left 左键点击

.right 右键点击

.middle 中键点击

<button @click.right="shout(1)">okbutton>
```

键值修饰符
```
@keyup.keyCode="shout(4)"   每次按下键盘都会触发shout

为了方便我们使用，vue给一些常用的键提供了别名://普通键.enter.tab.delete //(捕获“删除”和“退格”键).space.esc.up.down.left.right//系统修饰键.ctrl.alt.meta.shift

可以通过全局 config.keyCodes 对象自定义按键修饰符别名： 可以使用 `v-on:keyup.f1`Vue.config.keyCodes.f1 = 112

如果仅仅使用系统修饰键是无法触发keyup事件的,需要将系统修饰键和其他键码链接起来使用，比如： type="text" @keyup.ctrl.67="shout(4)">

如果是鼠标事件，那就可以单独使用系统修饰符:
<button @mouseover.ctrl="shout(1)">okbutton> <button @mousedown.ctrl="shout(1)">okbutton> <button @click.ctrl.67="shout(1)">okbutton>

可以一个手指按住系统修饰键一个手指按住另外一个键来实现键盘事件。也可以用一个手指按住系统修饰键，另一只手按住鼠标来实现鼠标事件。

```

.exact (2.5新增)
```
有些场景我们只需要或者只能按一个系统修饰键来触发(像制作一些快捷键的时候)，而当我们按下ctrl和其他键的时候则无法触发。

这个只是限制系统修饰键的，像下面这样书写以后你还是可以按下ctrl + c，ctrl+v或者ctrl+普通键 来触发，但是不能按下ctrl + shift +普通键来触发。
type="text" @click.ctrl.exact="shout(4)">ok</button>

然后下面这个你可以同时按下enter+普通键来触发，但是不能按下系统修饰键+enter来触发
type="text" @keydown.enter.exact="shout('我被触发了')">
```

.sync(2.3.0+ 新增)
```
子组件可以修改父组件变量

我们通常的做法是：

//父亲组件"bar" //jsfunc(e){ this.bar = e;}//子组件jsfunc2(){  this.$emit('update:myMessage',params);}
现在这个.sync修饰符就是简化了上面的步骤

//父组件"bar">//子组件this.$emit('update:myMessage',params);
这样确实会方便很多，但是也有很多需要注意的点：

使用sync的时候，子组件传递的事件名必须为update:value，其中value必须与子组件中props中声明的名称完全一致(如上例中的myMessage，不能使用my-message)

注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。

将 v-bind.sync 用在一个字面量的对象上，例如 v-bind.sync=”{ title: doc.title }”，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。
```

.prop
```
Property：节点对象在内存中存储的属性，可以访问和设置。

Attribute：节点对象的其中一个属性( property )，值是一个对象。
可以通过点访问法 document.getElementById('xx').attributes 或者 document.getElementById('xx').getAttributes('xx') 读取，
通过 document.getElementById('xx').setAttribute('xx',value) 新增和修改。在标签里定义的所有属性包括 HTML 属性和自定义属性都会在 attributes 对象里以键值对的方式存在。

attribute和property两个单词，翻译出来都是属性，但是《javascript高级程序设计》将它们翻译为特性和属性，以示区分。
//这里的id,value,style都属于property//index属于attribute//id、title等既是属性，也是特性。
修改属性，其对应的特性会发生改变；修改特性，属性也会改变"uid" title=//input.index === undefined//input.attributes.index === this.index

如果直接使用v-bind绑定，则默认会绑定到dom节点的attribute。
.prop的作用:
通过自定义属性存储变量，避免暴露数据
防止污染 HTML 结构

```

.camel
```
解决HTML不区分大小写的渲染问题
```
