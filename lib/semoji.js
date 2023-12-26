import axios from "axios";
import cheerio from "cheerio";
import {
  get
} from "emoji-api";
function change(_0x86a130) {
  return _0x86a130.replace(/\s+/g, '-');
}
async function emoji(_0x49b5d7) {
  try {
    const _0x32a338 = await get(_0x49b5d7);
    const _0x48f40b = await _0x32a338._data.name.replace(/\s+/g, '-');
    const _0x157ea8 = await axios.get('https://emojigraph.org/id/' + _0x48f40b + '/', {
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
      }
    });
    const _0x14001e = cheerio.load(_0x157ea8.data);
    const _0x821591 = _0x14001e(".block__emoji img.lazyload[data-src]");
    function _0x39c022(_0x5e0140) {
      const _0x487f37 = _0x14001e(_0x5e0140).attr('data-src');
      return _0x487f37 !== undefined ? "https://emojigraph.org" + _0x487f37 : "https://telegra.ph/file/096ee41b520ab05b1491b.png";
    }
    const _0x41a435 = ["apple", "google", "facebook", 'twitter', "samsung", "microsoft", "whatsapp", "mesengger", "joypixels", "openmoji", 'emojidex', "htc", 'lg', "mozilla", 'softbank', "au_kddi"];
    const _0x593512 = {};
    _0x41a435.forEach((_0x4ade46, _0x13de67) => {
      _0x593512[_0x4ade46] = _0x39c022(_0x821591[_0x13de67]);
    });
    return {
      'creator': 'Alberto',
      'host': 'https://emojigraph.org/id',
      'emojisData': _0x593512
    };
  } catch (_0x25c6da) {
    console.error(_0x25c6da);
    throw new Error("Bad request / Internal Server Error!");
  }
}
export default emoji