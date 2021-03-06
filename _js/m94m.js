//техника парсинга HTML m94m
//Главный метод - m94m_getTreeAsAr. В него передается HTML-строка которую необходимо распарсить

// http://ejohn.org/files/htmlparser.js
// http://tanalin.com/blog/2008/05/pure-javascript-html-parser/
// http://habrahabr.ru/post/115127/

//теги парные - закрывающий тег обязателен
var tagPairList = ['address', 'blockquote', 'center', 'div', 'fieldset', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'menu', 'ol', 'pre', 'table', 'ul', 'a', 'abbr', 'acronym', 'b', 'bdo', 'big', 'cite', 'code', 'dfn', 'em', 'font', 'i', 'kbd', 'label', 'q', 's', 'samp', 'select', 'small', 'span', 'strike', 'strong', 'sub', 'sup', 'textarea', 'tt', 'u', 'var', 'article', 'aside', 'audio', 'bdi', 'canvas', 'datalist', 'details', 'figcaption', 'figure', 'footer', 'header', 'hgroup', 'keygen', 'main', 'mark', 'meter', 'nav', 'output', 'progress', 'ruby', 'section', 'summary', 'time', 'video', 'applet', 'button', 'del', 'iframe', 'ins', 'object', 'dir', 'listing', 'xmp', 'legend', 'optgroup', 'style', 'title', 'map', 'noscript', 'script', 'dl', 'caption', 'form', 'frameset', 'noframes', 'pre', 'blink', 'comment', 'marquee', 'multicol', 'nobr', 'noembed'];
//теги парные - закрывающий тег не обязателен (если закрывающего тега нет, считается, что конец абзаца совпадает с началом следующего блочного элемента)
var tagPairNocList = ['head', 'html', 'dd', 'dt', 'li', 'colgroup', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'p', 'bgsound', 'plaintext', 'spacer'];
//теги парные - зыкрывающий тег не обязателен если идет последним
var tag2List = ['rp', 'rt'];
//теги парные - открывающий и закрывающий теги не обязательны
var tag3List = ['body'];

//теги особые
var tagSpcList = ['!--'];

//теги-одиночки - закрывающий тег не требуется
var tagOnceList = yg54g_Strings_makeMap_m94m('br,hr,input,isindex,basefont,command,embed,source,wbr,track,link,meta,!DOCTYPE,area,img,param,base,col,frame');
//спец. теги - парные - закрывающий обязателен
var tagSpc2List = yg54g_Strings_makeMap_m94m('script,style');

//==============================


/**
 * Возвращает объект описания тег-сущности
 */
function m94m_getOj() {
    var oj = {
        yAllSt: '' //вся тег-сущность, например 'text' или '<div id=x>'
        , yD_IxStart: '' //индекс начала тег-сущности
        , yD_IxEnd: '' //индекс конца тег-сущности
        , yA_ThisIsTx: false //true - тег-сущность типа "межтекст"
        , yA_ThisIsTg: false //true - тег-сущность типа "тег"
        , yB_TgIsOpening: false //true - тег открывающий
        , yB_TgIsClosing: false //true - тег закрывающий
        , yIsAlone: false //true - тег-одиночка
        , yTgName: '' //имя тега
        , yIsComm: false //true - если это тег комментария
        , yIsBroken: false //true - если это "битый тег", например тег без имени ('<  > или </ >') или тег открывающий парный без закрывающей пары
        , yLvl: '' //уровень тег-сущности (0, 1, 2, ...)
        , yPN: '' //индивидуальный уникальный номер тег-сущности (1, 2, ...)
        , yPNParent: '' //PN контейнера, 0 - для если контейнером является корень (root)
        , yTgCloseIxStart: '' //индекс начальный закрывающего парного тега (данного закрывающего тега может не быть, тогда данный индекс будет = '')
        , yTgCloseIxEnd: '' //индекс замыкающий закрывающего парного тега (данного закрывающего тега может не быть, в этом случае данный индекс равен '')
        , yId: '' //id тега
        , yClass: '' //class тега
        , yHref: '' //href
        , yAttrs: '' //атрибуты тега
    }

    return oj;
}

/**
 * Получение тег-сущности по ее yPN
 * @param aAr array (1) -- массив тег-сущностей
 * @param aPn integer (2) -- yPN тег-сущности
 * @returns object тег-сущность или null при нештате
 */
function m94m_getOjByPn(aAr, aPn){
    for (var i = 0; i < aAr.length; i++) {
        if(aAr[i].yPN === aPn){
            return aAr[i];
        }
    }
    return null;
}

/**
 * Парсит строку (1) которая в общем виде имеет вид 'text<tag>text</tag>text'.
 * Оборачивает каждый 'text' и 'tag' в объект, укладывает каждый в массив в порядке их появления в строке, возвращает данный массив.
 * {qunit}
 * @param aSt (1) -- строка любого вида, подразумевает наличие участков внутри угловых скобок - тегов, например 'text<tag>text</tag>text'
 * @returns {*} массив объектов
 */
function m94m_getTreeAsAr(aSt) {
    if (aSt.length < 1) return null;

    //рег.выр. соответствующее 'text<tag>'  (см. http://regex101.com/r/pW6jK9)
    var re = /([\s\S]*?)(<[^<>]*>)/g;

    var ret = [];
    var pn = 1;
    var m;
    //текущий уровень
    var chLvl = 0;
    //текущий chPnParent
    var chPnParent = 0;
    while (m = re.exec(aSt)) {
        //создание объекта описания для "межтекста"
        if (m[1].length > 0) {
            var ojText = m94m_getOj();
            
            //если содержит начало комментария
            var cmS = m[1].indexOf('<!--');
            if(cmS !== -1){
                if(cmS > 0){
                    var ojp = m94m_getOj();
                    ojp.yAllSt = aSt.substring(m.index, m.index + cmS);
                    ojp.yA_ThisIsTx = true;
                    ojp.yD_IxStart = m.index;
                    ojp.yD_IxEnd = m.index + cmS;
                    ojp.yPN = pn++;
                    ojp.yPNParent = chPnParent;
                    ojp.yLvl = chLvl;
                    ret.push(ojp);
                }
                //поиск ближайшего закрытия комментария
                var cmE = aSt.indexOf('-->', m.index);
                //если закрытие найдено
                if(cmE !== -1){
                    //выделение комментария
                    var cmT = aSt.substring(m.index + cmS, cmE+3);
                    var ojc = m94m_getOj();
                    ojc.yAllSt = cmT;
                    ojc.yA_ThisIsTx = true;
                    ojc.yIsComm = true;
                    ojc.yD_IxStart = m.index+cmS;
                    ojc.yD_IxEnd = cmE+3;
                    ojc.yPN = pn++;
                    ojc.yPNParent = chPnParent;
                    ojc.yLvl = chLvl;
                    ret.push(ojc);
                    re.lastIndex = cmE+3;
                    continue;
                }//если закрытие не найдено
                else{
                    var ojc2 = m94m_getOj();
                    ojc2.yAllSt = aSt.substring(m.index+cmS, m.index + m[0].length);
                    ojc2.yA_ThisIsTx = true;
                    ojc2.yD_IxStart = m.index+cmS;
                    ojc2.yD_IxEnd= m.index + m[0].length;
                    ojc2.yPN = pn++;
                    ojc2.yPNParent = chPnParent;
                    ojc2.yLvl = chLvl;
                    ret.push(ojc2);
                    re.lastIndex = m.index + m[0].length;
                    continue;
                }
            }
            
            ojText.yAllSt = m[1];
            ojText.yD_IxStart = m.index;
            ojText.yD_IxEnd = m.index + m[1].length;
            ojText.yA_ThisIsTx = true;
            //PN
            ojText.yPN = pn;
            pn++;
            //
            ojText.yPNParent = chPnParent;
            ojText.yLvl = chLvl;
            ret.push(ojText);
        }

        //создание объекта описания для тег-сущности типа "тег"
        var ojTag = m94m_getOj();
        ojTag.yAllSt = m[2];
        ojTag.yD_IxStart = m.index + m[1].length;
        ojTag.yD_IxEnd = re.lastIndex;
        ojTag.yA_ThisIsTg = true;
        ojTag.yTgName = yg54g_Strings_html_getTgNm_m94m(m[2]);
        ojTag.yLvl = chLvl;
        ojTag.yPN = pn++;
        //
        ojTag.yPNParent = chPnParent;
        //
        if (ojTag.yTgName) {
            //если это комментарий
            if (ojTag.yTgName === '!--') {
                //1 РАБОТА по части если тег является комментарием
                ojTag.yIsComm = true;
                //комментарий не является тегом, является межтекстом
                ojTag.yA_ThisIsTg = false;
                ojTag.yA_ThisIsTx = true;
                //если на конце НЕ конструкция '-->' -- это важно т.к. комментарии внутри могут содержать угловые скобки
                if (ojTag.yAllSt.indexOf('-->') !== ojTag.yAllSt.length - 3) {
                    //тогда необходимо найти ближайшую конструкцию '-->'
                    var clIx = aSt.indexOf('-->', ojTag.yD_IxEnd);
                    //если найдена
                    if (clIx !== -1) {
                        //обновляем поля объекта
                        ojTag.yAllSt = aSt.substring(ojTag.yD_IxStart, clIx + 3);
                        ojTag.yD_IxEnd = clIx + 3;
                        //обновляем свойство регулярного выражения
                        re.lastIndex = clIx + 3;
                    }
                }
                ret.push(ojTag);
                continue;
                //2
            }
            //если не Комментарий (комментарий не является тегом хотя имеет признаки тега)
            ojTag.yId = yg54g_Strings_html_getTgAttrOne_m94m(m[2], 'id')[0];
            ojTag.yClass = yg54g_Strings_html_getTgAttrOne_m94m(m[2], 'class')[0];
            ojTag.yHref = yg54g_Strings_html_getTgAttrOne_m94m(m[2], 'href')[0];

        } else {
            ojTag.yIsBroken = true;
        }

        //определение Окрывающий или Закрывающий тег
        //если тег Открывающий
        if (/<\s*[A-Za-z0-9!_-]/.test(ojTag.yAllSt)) {
            ojTag.yB_TgIsOpening = true;
            ojTag.yB_TgIsClosing = false;
        }
        //если тег Закрывающий g8g
        if (/<\s*\/\s*[A-Za-z0-9!_-]/.test(ojTag.yAllSt)) {
            ojTag.yB_TgIsOpening = false;
            ojTag.yB_TgIsClosing = true;
        }

        //ЕСЛИ тег открывающий
        if (ojTag.yB_TgIsOpening) {
            //если не одиночка
            if (!tagOnceList[ojTag.yTgName]) {
                //если тег script/style
                var hf;
                if (ojTag.yTgName.toLowerCase() === 'script') hf = 'script';
                if (ojTag.yTgName.toLowerCase() === 'style') hf = 'style';
                if (ojTag.yTgName.toLowerCase() === hf) {
                    //нахождение ближайшего </script>* (*</style>)
                    var mr = yg54g_Strings_fsStIxWithExec_m94m(aSt, new RegExp("<\\s*\\/\\s*" + hf + "\\s*>", "ig"), ojTag.yD_IxEnd);
                    //если закрывающий тег найден
                    if (mr) {
                        ojTag.yTgCloseIxStart = mr[0];
                        ojTag.yTgCloseIxEnd = mr[0] + mr[1];
                        ret.push(ojTag);

                        //если </script>* не идет сразу же за <script>* (*style)
                        //добавление объекта межтекста
                        if (mr[0] !== ojTag.yD_IxEnd) {
                            var ojt = new m94m_getOj();
                            ojt.yA_ThisIsTx = true;
                            ojt.yD_IxStart = ojTag.yD_IxEnd;
                            ojt.yD_IxEnd = mr[0];
                            ojt.yAllSt = aSt.substring(ojTag.yD_IxEnd, mr[0]);
                            ojt.yPNParent = ojTag.yPN;
                            ojt.yPN = pn++;
                            ojt.yLvl = chLvl + 1;
                            ret.push(ojt);
                        }

                        //добавление объекта закрывающего тега
                        var ojct = new m94m_getOj();
                        ojct.yA_ThisIsTg = true;
                        ojct.yB_TgIsClosing = true;
                        ojct.yD_IxStart = mr[0];
                        ojct.yD_IxEnd = mr[0] + mr[1];
                        ojct.yAllSt = aSt.substring(mr[0], mr[0] + mr[1]);
                        ojct.yPNParent = chPnParent;
                        ojct.yPN = pn++;
                        ojct.yLvl = chLvl;
                        ret.push(ojct);

                        re.lastIndex = mr[0] + mr[1];
                        continue;
                    } //if (mr)
                    else { //если закрывающий тег не найден
                        ojTag.yIsBroken = true;
                        ret.push(ojTag);
                        continue;
                    }
                }

                chLvl++;
                chPnParent = ojTag.yPN;
                ret.push(ojTag);
                continue;
            } else {
                ojTag.yIsAlone = true;
                ret.push(ojTag);
                continue;
            }
        }
        //если тег закрывающий
        if (ojTag.yB_TgIsClosing) {
            //цикл по тегам которые выше по массиву в поисках [[NNP]]-(начальная незакрытая пара)
            var e = '';
            for (var i = ret.length - 1; i >= 0; i--) {
                var itm = ret[i];
                //если открывающий тег, если он не закрыт, если имена тегов совпадают
                if (itm.yB_TgIsOpening && itm.yTgCloseIxStart === '' && itm.yTgName === ojTag.yTgName) {
                    itm.yTgCloseIxStart = ojTag.yD_IxStart;
                    itm.yTgCloseIxEnd = ojTag.yD_IxEnd;
                    ojTag.yLvl = itm.yLvl;
                    ojTag.yPNParent = itm.yPNParent;
                    //
                    chLvl = itm.yLvl;
                    chPnParent = itm.yPNParent;
                    e = itm.yD_IxEnd;
                    break;
                }
            }
            //если NNP был найден
            //повторный цикл чтобы закрыть незакрытые теги находящиеся внутри текущего парного
            if (e) {
                for (var i = ret.length - 1; i >= 0; i--) {
                    var itm = ret[i];
                    //если тег-сущность внутри текущего парного тега, если тег открывающий
                    if (itm.yD_IxStart > e) {
                        //если тег открывающий и незакрытый
                        if (itm.yB_TgIsOpening && itm.yTgCloseIxStart == '') {
                            itm.yTgCloseIxStart = ojTag.yD_IxStart;
                            itm.yTgCloseIxEnd = ojTag.yD_IxStart;
                        }
                    } else {
                        //прерывание цикла если произошел выход за пределы текущего парного тега
                        break;
                    }
                }
            }
        }

        ret.push(ojTag);
    }
    //обработка как "межтекста" если "тегов" нет
    if (ret.length < 1) {
        var ojText = m94m_getOj();
        ojText.yAllSt = aSt;
        ojText.yA_ThisIsTx = true;
        ojText.yD_IxStart = 0;
        ojText.yD_IxEnd = aSt.length;
        //PN
        ojText.yPN = pn;
        pn++;
        //
        ojText.yPNParent = chPnParent;
        ojText.yLvl = chLvl;
        //
        ret.push(ojText);
    } else if (aSt.length > ret[ret.length - 1].yD_IxEnd) { //обработка текстового "хвоста"
        var ojText = m94m_getOj();
        ojText.yAllSt = aSt.substring(ret[ret.length - 1].yD_IxEnd);
        ojText.yA_ThisIsTx = true;
        ojText.yD_IxStart = ret[ret.length - 1].yD_IxEnd;
        ojText.yD_IxEnd = aSt.length;
        //PN
        ojText.yPN = pn;
        pn++;
        //
        ojText.yPNParent = chPnParent;
        ojText.yLvl = chLvl;
        //
        ret.push(ojText);
    }

    return ret;
}

/**
 * Парсит строку (1) и вовзращает извлеченные из нее данные в виде HTML-таблицы TABLE
 * @param m105m
 * @param aSt (2) -- строка для парсинга
 * @returns
 */
function m94m_getTreeAsHtmlTable(m105m, aSt){
    //получение @объект-кучи
    var ar = m94m_getTreeAsAr(aSt);

    //шапка таблицы
    var w45w1 = "<table id='tb'>" + '<tr>' +
        '<th>yAllSt</th>' +
        '<th>yTgName</th>' +
        '<th>yId</th>' +
        '<th>yClass</th>' +
        '<th>yHref</th>' +
        '<th>yPN</th>' +
        '<th>yPNParent</th>' +
        '<th>yLvl</th>' +
        '<th>yD_IxStart</th>' +
        '<th>yD_IxEnd</th>' +
        '<th>yTgCloseIxStart</th>' +
        '<th>yTgCloseIxEnd</th>' +
        '<th>yA_ThisIsTx</th>' +
        '<th>yA_ThisIsTg</th>' +
        '<th>yB_TgIsOpening</th>' +
        '<th>yB_TgIsClosing</th>' +
        '<th>yIsAlone</th>' +
        '<th>yIsComm</th>' +
        '<th>yIsBroken</th>' +
        '<th>yAttrs</th>' +
    '</tr>';

    //внутренности таблицы
    var w45w2 = "";
    for (var i = 0; i < ar.length; i++) {
        var im = ar[i];

        //замена угловых скобок
        var s = im.yAllSt.replace(/</g, '&lt;');
        var s = s.replace(/>/g, '&gt;');

        var t = '<tr>' +
            '<td>' + s + '</td>' +
            '<td>' + im.yTgName + '</td>' +
            '<td>' + im.yId + '</td>' +
            '<td>' + im.yClass + '</td>' +
            '<td>' + im.yHref + '</td>' +
            '<td>' + im.yPN + '</td>' +
            '<td>' + im.yPNParent + '</td>' +
            '<td>' + im.yLvl + '</td>' +
            '<td>' + im.yD_IxStart + '</td>' +
            '<td>' + im.yD_IxEnd + '</td>' +
            '<td>' + im.yTgCloseIxStart + '</td>' +
            '<td>' + im.yTgCloseIxEnd + '</td>' +
            '<td>' + im.yA_ThisIsTx + '</td>' +
            '<td>' + im.yA_ThisIsTg + '</td>' +
            '<td>' + im.yB_TgIsOpening + '</td>' +
            '<td>' + im.yB_TgIsClosing + '</td>' +
            '<td>' + im.yIsAlone + '</td>' +
            '<td>' + im.yIsComm + '</td>' +
            '<td>' + im.yIsBroken + '</td>' +
            '<td>' + im.yAttrs + '</td>' +
            '</tr>';
        w45w2 += t;
    }

    return w45w1 + w45w2 + "</table>";

}

/**
 * Отбор объектов из массива объектов g54g_Type001 (1). Отбираются только теги: А) парные, Б) с именем тега (2), В) имеющие ThРодителя с id (3)
 * @param aAr (1) -- массив объектов g54g_Type001
 * @param aTgNm (2) -- имя искомого тега, регистр не учитывается, например 'a'
 * @param aIdPr (3) -- ThParent тега (2)
 * @param aPgNm (4) -- ThFiNm11 страницы к которой ассоциирован (1)
 * @returns array массив объектов g54g_Type001, например {ixStart: 1, ixEnd: 2, stForRp: 'text'}
 */
function m94m_get01(aAr, aTgNm, aIdPr, aPgNm) {
    var ret = [];
    for (var i = 0; i < aAr.length; i++) {
        var im = aAr[i];
        //если тег который нужен (совпадение имени и тег должен быть открывающим)
        if(im.yTgName.toLowerCase() === aTgNm.toLowerCase() && im.yB_TgIsOpening){
            //id родителя
            var idPr = m94m_getIdByPn(aAr, im.yPNParent);
            //если id родителя то которое нужно
            if(aIdPr && idPr === aIdPr){
                var oj = yg54g_Types_getType001_m94m();
                oj.ixStart = im.yD_IxEnd;
                oj.ixEnd = im.yTgCloseIxStart;
                oj.stForRp = im.yHref;
                oj.pgNm = aPgNm;

                ret.push(oj);
            }
        }
    }

    return ret;
}

/**
 * Получение id тег-сущности по её yPN (2)
 * @param aAr (1) -- массив тег-сущностей
 * @param aPn (2) -- yPN тег-сущности
 * @returns integer id тег-сущности или '' при нештате
 */
function m94m_getIdByPn(aAr, aPn){

    for (var i = 0; i < aAr.length; i++) {
        var im = aAr[i];
        if(im.yPN === aPn){
            return im.yId;
        }
    }

    return '';
}

////==========================================library g54g
////==========================================library g54g
////==========================================library g54g


/**
 * Извлекает из строки (1) значение ключа (2), например значение 'someid' ключа 'id' из примера в (1)
 * {qunit}
 * @param aSt (1) -- строка содержащая тег, например ' < tag id="someid" >'
 * @param aKey (2) -- ключ, например 'id'
 * @returns array ['', -1] при нешататах, массив вида ['найденное_значение','индекс_начала значения'], например ['someid', 11]
 */
function yg54g_Strings_html_getTgAttrOne_m94m(aSt, aKey) {
    if (!aSt) return ['', -1];
    if (!aKey) return ['', -1];

    //если не удается корректно получить тег
    var tg = yg54g_Strings_html_getTgNm_m94m(aSt);
    if (!tg) {
        return ['', -1];
    }

    //http://regex101.com/r/rO2uY0
    var re = new RegExp('(\\s+' + aKey + "\\s*=\\s*([\"']*)\\s*)([^\\<\\>\\s'\"]+)\\s*\\2", '');
    var m = re.exec(aSt);
    if (m) {
        return [m[3], m.index + m[1].length];
    } else {
        return ['', -1];
    }
}

/**
 * Извлечение имени тега из строки (1). Рассматривается только первый тег из строки (1)
 * {qunit}
 * @param aSt (1) -- строка любого вида, например '< tag >', '< / tag >'
 * @returns {*} '!--' если тег-комментарий, '' при нештатах
 */
function yg54g_Strings_html_getTgNm_m94m(aSt) { //TODO добавить в библиотеку
    //проверка на комментарий
    var m = /<!--[\s\S]*?>/.exec(aSt);
    if (m) return '!--';

    //fail http://regex101.com/r/yV1bO3
    //http://regex101.com/r/pS3lZ7
    var m1 = /<\s*[\/]?\s*([A-Za-z0-9!_-]*)([^<>]*)>/.exec(aSt);
    if (m1) {
        if (m1[1].indexOf('!--') !== -1) {
            return '';
        }
        //проверка что после тега не идет знак '='
        var eq = /\s*=/.exec(m1[2]);
        if (eq && eq.index === 0) {
            return '';
        }
        return m1[1];
    } else {
        return '';
    }
}


/**
 * Выводит в консоль свойства и значения объекта (1) в виде одной строки в формате 'свойство [значение]; свойство2 [значение]; ...'
 * @param oj (1) -- объект свойства которого необходимо вывести
 * @param prefix (2) -- будет отображаться перед строкой
 */
function yg54g_DOM_printPropOj_B_m94m(oj, prefix) {  //TODO добавить в библиотеку
    var props = prefix + ' === ';
    for (var p in oj) {
        props += p + ' [' + oj[p] + ']; ';
    }
    console.log(props);
}


/**
 * Ищет в строке (1) цепочку символов соответствующую рег. выражению (2) при условии что она находится на индксе >= (3)
 * @param aSt (1) -- строка в которой выполняется поиск, например 'aa22bb33cc55dd'
 * @param aRe (2) -- рег. выр., модификатор доступа g обязателен, например 'new RegExp('\\dd\\dd', 'g');'
 * @param aIx (3) -- индекс с которого будет начат поиск, например '3'
 * @returns array массив из двух элементов ['индекс найденного соответствия по отношению к строке (1)', 'длина найденного соответствия']. При нештате или если ничего не найдено возвращается null. Например '[6, 2]'
 */
function yg54g_Strings_fsStIxWithExec_m94m(aSt, aRe, aIx) {
    if (!aSt || !aRe || aIx < 0 || aIx > aSt.length) {
        return null;
    }

    var ms = [];
    var m = [];
    while (m = aRe.exec(aSt)) {
        if (m.index < aIx) continue;
        ms.push(m.index, m[0].length);
        break;
    }

    if (ms.length > 0) {
        return ms;
    }
    return null;
}


/**
 * Ищет в строке (1) все цепочки символов которые: а) соответствуют рег.выр. (3), б) находятся после индекса (4). Заменяет найденные цепочки на текст (2)
 * @param aSt (1) -- строка в которой выполняется поиск и замена, например 'aa33bb55cc'
 * @param aStRp (2) -- строка для замены, например '44'
 * @param aRe (3) -- объек RegExp, модификатор g обязателен, например 'new RegExp('\\d\\d', 'g');'
 * @param aIx (4) -- индекс начиная с которого выполняется замена, например '4'
 * @returns string строка с выполненными заменами или null если нештат или замены не выполнялись
 */
function yg54g_Strings_rpWithExecAfIx_m94m(aSt, aStRp, aRe, aIx) {
    if (!aSt || !aRe || aIx < 0 || aIx > aSt.length - 1 || aIx < 0) {
        return null;
    }

    //парный массив. Пара 'индекс начала совпадения' - 'длина совпадения'
    var ms = [];
    //
    var m = [];
    while (m = aRe.exec(aSt)) {
        if (m.index < aIx) continue;
        ms.push(m.index);
        ms.push(m[0].length);
    }

    if (!ms || ms.length < 1) return null;

    var res = '';
    var start = 0;
    for (var i = 0; i < ms.length; i += 2) {
        var s = aSt.substring(start, ms[i]);
        res += s;
        res += aStRp;
        start = ms[i] + ms[i + 1];
    }

    //если есть "хвост"
    var x = ms[ms.length - 2] + ms[ms.length - 1];
    if (x < aSt.length) {
        res += aSt.substring(x);
    }

    return res;
}


/**
 * Возвращает объект имена свойств у которого совпадают с подстроками из (1), значения равны true
 * @param str (1) -- строка с разделителем ',', например 'text1,text2,text3,...'
 * @returns {{}} объект, например {text1: true, text2: true, ...}
 */
function yg54g_Strings_makeMap_m94m(str) {
    var obj = {};
    var items = str.split(",");
    for (var i = 0; i < items.length; i++)
        obj[ items[i] ] = true;
    return obj;
}

/**
 * Возврат содержимого файла в виде строки с разделителями "\n"
 * @param aRelativeNmFi - относительное имя файла, например "_files\\testFile.txt" или "testFile.txt"
 * @return содержимое файла в виде строки с разделителями "\n"
 */
function yg54g_Storages_readFi_m94m(aRelativeNmFi) {
    var fso = new ActiveXObject("Scripting.FileSystemObject"); //создаем объект файловой системы
    var f = fso.OpenTextFile(this.yg54g_Storages_getPaFd_m94m() + '\\' + aRelativeNmFi, 1, false, 1);
    //up   1 - открываем файл только для чтения    //false - если файла нет, то он не создается
    var d2 = "";
    var n = "";
    //noinspection JSUnresolvedVariable
    while (!f.AtEndOfStream) {
        var d = f.ReadLine(); //считывание следующей строки
        d2 = d2 + n + d; //добавление новой строки к уже считанным строкам
        n = "\n";
    }
    f.Close();
    return d2;
}

/**
 * Возврат пути к папке в которой находится файл html который сейчас отображается
 * @return пример "F:\\Dropbox\\_Web\\wiki"
 */
function yg54g_Storages_getPaFd_m94m() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var t = fso.GetFile(this.yg54g_Storages_getPaFi_m94m());
    //noinspection JSUnresolvedVariable
    var p = t.ParentFolder.Path; //ParentFolder возвращает объект Folder являющийся путем к папке в
    // которой лежит файл, Path объект Folder превращает в обычный текст
    p = p.replace(/\\/g, '\\\\'); //приведение к правильному виду
    return p;
}


/**
 * Возврат абсолютного имени сейчас отображаемой страницы
 * @return например "D:\\Working\\file.html"
 */
function yg54g_Storages_getPaFi_m94m() {
    var a = window.location.href;
    a = a.replace(/file:\/\/\//i, "").replace(/%20/g, " ").replace(/\//g, '\\\\');
    return a;
}

/**
 * Тип. Используется при заменах текста
 * @returns {{ixStart: number, ixEnd: number, stForRp: string}}
 */
function yg54g_Types_getType001_m94m(){
    return {ixStart: -1, ixEnd: -1, stForRp: '', pgNm: ''};
}