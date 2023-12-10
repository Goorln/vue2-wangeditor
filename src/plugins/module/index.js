import { IModuleConf } from "@wangeditor/editor";
import { Boot } from "@wangeditor/editor";
import { renderAudioConf } from "./render-elem";
import { audioToHtmlConf } from "./elem-html";
import { parseAudioHtmlConf } from "./parse-elem-html";
import withAudio from "./plugin";

function module() {
  Boot.registerRenderElem(renderAudioConf);
  Boot.registerElemToHtml(audioToHtmlConf);
  Boot.registerParseElemHtml(parseAudioHtmlConf);
  Boot.registerPlugin(withAudio);
}

// const module = {
//   editorPlugin: withAudio,
//   renderElems: [renderAudioConf],
//   elemsToHtml: [audioToHtmlConf],
//   parseElemsHtml: [parseAudioHtmlConf]
// };

export default module;
