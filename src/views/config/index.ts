import { Boot } from "@wangeditor/editor";
import { renderAudioConf } from "./render-elem";
import { audioToHtmlConf } from "./elem-html";
import { parseAudioHtmlConf } from "./parse-elem-html";
import withAudio from "./plugin";

function initAudioNode() {
  Boot.registerRenderElem(renderAudioConf);
  Boot.registerElemToHtml(audioToHtmlConf);
  Boot.registerParseElemHtml(parseAudioHtmlConf);
  Boot.registerPlugin(withAudio);
}

export default initAudioNode;
