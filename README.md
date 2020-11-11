# codemirror_demo

编译codemirror-minimap

     npm run build
webpack.config.js 内入口文件src/index.ts的代码为codemirror-minimap的nodejs包源文件src/minimap.ts代码

codemirror-minimap实际上是为CodeMirror添加了一个Option（minimap）

如果需要标签引入并使用codemirror-minimap，需要将上面闭包的codemirror对象(定义了minimap)暴露给全局window，所以index.ts增加代码

    window['CodeMirror'] = CodeMirror;

打包后的文件为codemirror+codemirror-minimap

打包出单独的minimap

删除 import CodeMirror from 'codemirror';
将index.ts里面的CodeMirror改成 window['CodeMirror'] 

此时就可以通过script标签引入独立的CodeMirror与codemirror-minimap



