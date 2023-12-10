<template>
  <div style="border: 1px solid #ccc;">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-if="isShowEdit"
      style="height: 500px; overflow-y: hidden;"
      v-model="editorValue"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
  </div>
</template>

<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import "@wangeditor/editor/dist/css/style.css";
import { Boot } from "@wangeditor/editor";
import { menu1Conf } from "../plugins/menu/AudioMenu.js";
import module from "../plugins/module";

export default {
  components: { Editor, Toolbar },
  data() {
    return {
      editorRef: null,
      editorValue: "",
      toolbarConfig: {},
      editorConfig: { placeholder: "请输入内容..." },
      mode: "default", // or 'simple',
      isShowEdit: false
    };
  },
  methods: {
    onCreated(editor) {
      this.editorRef = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
      this.toolbarConfig.insertKeys = {
        index: 24, // 插入的位置，基于当前的 toolbarKeys
        keys: ["menu1"]
      };
      // 注册菜单
      // Boot.registerMenu(menu1Conf);
      Boot.registerMenu(menu1Conf);
      // Boot.registerModule(module);
      module();

      // 事件监听
      const initMediaMenuEvent = () => {
        const editor = this.editorRef;
        // 在点击事件中，根据具体菜单，可以触发响应的功能，这里可以为每个事件创建一个el-dialog弹窗。我们就可以完全按照自己的需求开发后续功能
        editor.on("AudioMenuClick", () => {
          // 你点击了音频菜单
          console.log("123");
          editor.insertNode({
            type: "audio",
            src: "http://music.163.com/song/media/outer/url?id=1908673805.mp3",
            children: [{ text: "aaa" }]
          });
        });
      };
      initMediaMenuEvent(); // 注册自定义菜单点击事件
    }
  },
  mounted() {
    this.isShowEdit = true;
  },
  beforeDestroy() {
    const editor = this.editorRef;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  }
};
</script>

<style scoped></style>
