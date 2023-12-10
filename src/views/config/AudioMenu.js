import { IDomEditor, IDropPanelMenu } from "@wangeditor/editor";

// class MyDropPanelMenu implements IDropPanelMenu {
// TS 语法
export default class AudioMenu {
  // JS 语法

  constructor() {
    this.title = "My menu";
    this.iconSvg =
      '<svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#FF7F7F" d="M849.408 6.656L411.648 140.8c-53.248 15.36-95.744 70.656-95.744 123.392v461.312S284.16 704 213.504 714.24C109.568 729.088 25.6 808.448 25.6 891.904s83.968 134.656 187.904 119.808c103.936-14.848 179.712-91.648 179.712-175.104v-445.44c0-36.864 44.544-52.736 44.544-52.736l387.072-121.344s43.008-14.336 43.008 25.088v367.616s-39.424-22.528-110.08-14.336c-103.936 12.8-187.904 90.624-187.904 174.08S653.824 905.728 757.76 893.44c103.936-12.8 187.904-90.624 187.904-174.08V74.752c-0.512-52.224-43.52-82.944-96.256-68.096z"  /></svg>';
    this.tag = "button";
    this.showDropPanel = true;
  }

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  // isActive(editor: IDomEditor): boolean {
  // TS 语法
  isActive(editor) {
    // JS 语法
    return false;
  }

  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  // getValue(editor: IDomEditor): string | boolean {
  // TS 语法
  getValue(editor) {
    // JS 语法
    return "";
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  // isDisabled(editor: IDomEditor): boolean {
  // TS 语法
  isDisabled(editor) {
    // JS 语法
    return false;
  }

  // 点击菜单时触发的函数
  // exec(editor: IDomEditor, value: string | boolean) {
  // TS 语法
  exec(editor, value) {
    // JS 语法
    // DropPanel menu ，这个函数不用写，空着即可
    if (this.isDisabled(editor)) {
      return;
    }
    editor.emit("AudioMenuClick");
  }

  // 定义 DropPanel 内部的 DOM Element
  // getPanelContentElem(editor: IDomEditor): DOMElement {
  // TS 语法
  // getPanelContentElem(editor) {
  //   // 创建元素
  //   const list = document.createElement("ul");

  //   // 上传音频按钮
  //   const uploadBtn = document.createElement("button");
  //   uploadBtn.textContent = "上传音频";

  //   const item = document.createElement("li");
  //   item.appendChild(uploadBtn);

  //   list.appendChild(item);

  //   // 点击事件
  //   uploadBtn.addEventListener("click", () => {
  //     // 上传音频逻辑
  //     // editor.insertText("【音频】");
  //     // editor.insertHtml("<h1>标题</h1>");
  //   });

  //   // 返回元素
  //   return list;

  //   // PS：也可以把 $list 缓存下来，这样不用每次重复创建、重复绑定事件，优化性能
  // }
}
