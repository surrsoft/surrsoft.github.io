//главный JS

//$(document).ready(function () {

//исходные установки
//TRUE чтобы показывать логи в консоли
yLogif = true;
//
yLogifPristavka = ":info:";
//в какой кодировке открывать файлы (0 - ASCII, -1 - Unicode, -2 - system default)
w38w = -1;
//имя ThFiNm11 файла индекса
x50f = "j_x50f.txt";
//относительное имя файла конфигурации (ThFiNmR11)
x52p = 'j_x52f.txt';
//===
var G1_SEPARATOR_W72W = '|_ _ _|_ _ _|';
var G1_COOK_LAST_FIND_W73W = 'cook_last_find';
var G1_ID_LAST_FIND_W74W = 'id_last_find';
var G1_LAST_FIND_MAX = 9;
var G1_DIV = '\\\\';
//---
//адрес по которому будет загружаться файл индекса
var G1_MNUA_URL = '/getFindIndex';
var G1_IXWA_UHOX = 'uhox';
var G1_IXWA_UASK = 'uask';

//---
PTDO_FILE_NAME = 'j_ptdo.txt';

//===
//* когда все скрипты загружены
//* json3 подключен т.к. по умолчанию он остутствует в IE 8 (не работало создание индекса на работе из-за этого)
$.when(
    $.getScript("_js/xregexp-all-min.js")
    , $.getScript("_js/x45z.js")
    , $.getScript("_ext/json/json3.js")
    , $.getScript("_js/ixwa.js")
).done(function () {
        console.log('-- ixwaMode=' + ixwaMode);

        //===
        $('.showAll').click(function () {
            $(".snippet-in").show();
            $(".snippetStyle").addClass("snippetStylePress");
        });

        //===
        var m1 = 'корень';

        //обновление блока пересечений
        x41z_fn_udAp();

        //замена консоли для Работы
        function Console1() {
            this.log = function (aSt) {

            }
        }

        console1 = new Console1();

        //массив диапазонов
        //p - работа; t - дом; q - дом личное
        yx23z_ranges = ["p", "t", "q"];

        //[[ijer]] - строка для RegExp соответствующая 1) всем диапазонам, 2) только ThFiNm11 страниц проекта
        var r = "";
        for (var i = 0; i < yx23z_ranges.length; i++) {
            r += yx23z_ranges[i];
        }
        ijer = r;

        //1 ограничение диапазона в соответствии с выбранными "галками"
        if (docCookies.getItem('w50w_t') !== '1') {
            r = r.replace('t', '');
        }
        if (docCookies.getItem('w50w_p') !== '1') {
            r = r.replace('p', '');
        }
        if (docCookies.getItem('w50w_q') !== '1') {
            r = r.replace('q', '');
        }
        //2


        //===

        yx23z_re_set = function (diaps) {
            if (diaps == '') {
                for (var i = 0; i < yx23z_ranges.length; i++) {
                    diaps += yx23z_ranges[i];
                }
            }
            yx23z_re_diaps = diaps;
            yx23z_re = "^[" + diaps + "]_\\d+_[" + diaps + "].html$";
            stEinp = "^[" + ijer + "]_\\d+_[" + ijer + "].html$";
            yx23z_re2 = "^(.+)([" + diaps + "]_\\d+_[" + diaps + "].html)$";
        };

        yx23z_re_set(r);
        /**
         * Удаление одного диапазона
         * @param diap (1) -- удаляемый диапазон, например "p"
         */
        yx23z_re_remove = function (diap) {
            yx23z_re_diaps = yx23z_re_diaps.replace(diap, '');
            yx23z_re_set(yx23z_re_diaps);
            console.log("--35--yx23z_re=" + yx23z_re);
            console.log("--35--yx23z_re2=" + yx23z_re2);
        };
        /**
         * Добавление одного диапазона, например "p"
         * @param diap
         */
        yx23z_re_add = function (diap) {
            if (yx23z_re_diaps.indexOf(diap) !== -1) {
                yx23z_re_diaps = diap;
            } else {
                yx23z_re_diaps += diap;
            }
            yx23z_re_set(yx23z_re_diaps);
            console.log("--37--yx23z_re=" + yx23z_re);
            console.log("--37--yx23z_re2=" + yx23z_re2);
        };

        //[[bedn]] - путь к корню проекта, формат [aznf], например "F:\\Dropbox\\wiki"
        stBedn = yg54g_Storages_getPaFd_B();
        //alert("yx15z_pathRoot=["+yx15z_pathRoot+"]");

        //абсолютное имя страницы которая использует данный js
        yx21z_nmAbsCurrPg = yg54g_Storages_getPaFi_B();

        yx22z_nmCurrPg = yg54g_Storages_nameCurrPage_C();
        //alert("yx22z_nmCurrPg=["+yx22z_nmCurrPg+"]");

        /**
         * имя ThFiNm111 файла-индекса
         */
        stMnuaCrip = stBedn + "\\" + x50f;

        //===
        var title = $('title:first').html();

        $($shapka).append('<img src="_pic_p/anim_001.gif" />');
        $($shapka).append(' <span id="shapka_title">' + title + '</span>');
        //отображение пути к странице
        var pa140427082100 = yx21z_nmAbsCurrPg.replace(/\\+/g, '/').replace(/\/+/g, '/');
        $($shapka).append(' <div id="shapka_path" onclick="prompt(' + "'" + "Чтобы скопировать путь " +
        "в буфер обмена, нажмите Ctrl+C и Enter" + "', '" + pa140427082100 + "'" + ');">' + pa140427082100 + '</div>');
        //
        $($shapka).append('<hr>');


        //кнопка "Кто ссылается?" и "Run ActiveX"
        $($podval)
            .append('</br><form>' +
            '<input class="css_btn" id=x47z_bt type=button value="Кто ссылается?"/>' +
            ' <input class="css_btn" id=x25z_id_bt type=button value="Run ActiveX"/></form>' +
            '<div id=x47z_res></div>')
        ;
        //ссылка на главную
        $($podval)
            .append('</br><hr style="color:silver"><a href="p_0_p.html">Wiki - главная</a>')
        ;

        //ФОРМА поиска
        //если блок пересечений есть, то вставлется после него, иначе после подвала
        var b7 = $("div").is($x41z_blocks);
        var se = $podval;
        if (b7) {
            se = $x41z_blocks;
        }

        $(se)
            .after('<form class="x42z_form_class">' +
            '<label><b>Поиск</b></label>' +
            '<br> <input id="x42z_tf" type="text" />' +
            '<input id=x42z_bt type=button value=Поиск onclick="x42z_find_click(' + "'нажата кнопка Поиск'" + ', $(' + "'" + '#x42z_tf' + "'" + ').val(), $('
            + "'" + '#x42z_cb_case' + "'" + ').prop(' + "'" + 'checked' + "'" + '))"/>' +
            ' <input id="w36w" type="button" value="Создать индекс" onclick="fn_cfIndex(' + "'кнопка Создать индекс'" + ');" />' +
            ' <input id="w37w" type="button" value="test" onclick="fn_test();" />' +
            ' <span> <input type="checkbox" id="w50w_t"/>t' +
            '<input type="checkbox" id="w50w_p"/>p' +
            '<input type="checkbox" id="w50w_q"/>q </span>' +
            ' &nbsp;&nbsp;<a href="t_7_t.html" title="Программирование под Android">AN</a> <a href="t_98_t.html" >JV</a> <a href="t_1758_t.html" >ZR</a> <a href="p_2_p.html" >ABL</a>' +
            ' <span onclick="g1_clear();" class="g1a">x</span><span id="' + G1_ID_LAST_FIND_W74W + '"></span>' + //TODO
            '' +
            '<br><input id=x42z_cb_case type=checkbox /> учитывать регистр'
            + ' <input id="x50h" type="checkbox" /> искать в индексе'
            + ' <input id="x51h" type="checkbox" /> использовать технику m104m'
            + '<div id=x42z_find_result></div>' +
            '</form>')
        ;

        //=== //TODO
        $('.snippet-in').each(function () {
            var s = 'snippet';
            if ($(this).attr('snippetTitle')) {
                s = $(this).attr('snippetTitle');
            }

            $(this).before('<span class="snippetStyle" onclick="$(this).next().toggle(); hhh(this); ">' + s + '</span>');
            $(this).hide();

        });

        //=== //показ
        updateShowLastFind();


        //===
        //НАЧАЛЬНЫЕ установки из куки
        //галка "искать в диапазоне t"
        if (docCookies.getItem('w50w_t') == '1') {
            $("#w50w_t").prop('checked', 'checked');
        } else {
            $("#w50w_t").prop('checked', '');
        }
        //галка "искать в диапазоне p"
        if (docCookies.getItem('w50w_p') == '1') {
            $("#w50w_p").prop('checked', 'checked');
        } else {
            $("#w50w_p").prop('checked', '');
        }
        //галка "искать в диапазоне q"
        if (docCookies.getItem('w50w_q') == '1') {
            $("#w50w_q").prop('checked', 'checked');
        } else {
            $("#w50w_q").prop('checked', '');
        }
        //галка "искать в индексе"
        if (docCookies.getItem('x50h') == '1') {
            $("#x50h").prop('checked', 'checked');
        } else {
            $("#x50h").prop('checked', '');
        }
        //галка "учитывать регистр"
        if (docCookies.getItem('x42z_cb_case') == '1') {
            $("#x42z_cb_case").prop('checked', 'checked');
        } else {
            $("#x42z_cb_case").prop('checked', '');
        }

        //галка "искать в диапазоне t"
        $("#w50w_t").click(function () {
            if ($(this).prop('checked')) {
                docCookies.setItem('w50w_t', '1');
                yx23z_re_add('t');
            } else {
                docCookies.setItem('w50w_t', '0');
                yx23z_re_remove('t');
            }
        });
        //галка "искать в диапазоне p"
        $("#w50w_p").click(function () {
            if ($(this).prop('checked')) {
                docCookies.setItem('w50w_p', '1');
                yx23z_re_add('p');
            } else {
                docCookies.setItem('w50w_p', '0');
                yx23z_re_remove('p');
            }
        });
        //галка "искать в диапазоне q"
        $("#w50w_q").click(function () {
            if ($(this).prop('checked')) {
                docCookies.setItem('w50w_q', '1');
                yx23z_re_add('q');
            } else {
                docCookies.setItem('w50w_q', '0');
                yx23z_re_remove('q');
            }
        });
        //галка "искать в индексе"
        $("#x50h").click(function () {
            if ($(this).prop('checked')) {
                docCookies.setItem('x50h', '1');
            } else {
                docCookies.setItem('x50h', '0');
            }
        });
        //галка "учитывать регистр"
        $("#x42z_cb_case").click(function () {
            if ($(this).prop('checked')) {
                docCookies.setItem('x42z_cb_case', '1');
            } else {
                docCookies.setItem('x42z_cb_case', '0');
            }
        });

        //запуск поиска по нажатию Enter
        //данная конструкция срабатывает при каждом изменении в поле ввода
        $('#x42z_tf').keypress(function () {
            var e = event.keyCode;
            if (e == 13) {
                x42z_find_click('кнопка Поиск по нажатию Enter', $('#x42z_tf').val(), $('#x42z_cb_case').prop('checked'));
                //далее инструкция чтобы браузер не выполнял действий, иначе результат поиска не будет выведен
                // в консоли и будет сообщение f140f
                return false;
            }
        });

        //обработка ссылок
        $('a').each(function () {
            var hrLink = $(this).attr('href');
            var txLink = $(this).text();

            //пустые ссылки
            if (/^\s*$/.test(hrLink)) {
                $(this).css('color', 'red');

                var x18z_TxLink = $(this).text();

                //ДОБАВЛЕНИЕ ссылки "создать"
                $(this).after(' <span class="x11z" onclick=' + "'" + 'x12z_create("--> нажатие ссылки Создать", "' + x18z_TxLink + '",$(this))' + "'" + ' >создать</span>');
            } else { //если ссылка с непустым адресом
                //добавление информации о диапазоне
                for (var i = 0; i < yx23z_ranges.length; i++) {
                    var re = new RegExp("^" + yx23z_ranges[i] + "_\\d*?_" + yx23z_ranges[i] + ".html", "i");
                    if (re.test(hrLink)) {
                        $(this).after(' <span class="x23z_css">/r' + yx23z_ranges[i] + '/</span>');
                    }
                }

                //добавление /-/ (техника m81m)
                if (/\+$/.test(hrLink)) {
                    $(this).after(' <span class=x27z>/-/</span>');
                }
            }

            //техника m86m (удаление вертикальной черты на конце текста ссылок)
            if (/\s*\|\s*$/.test(txLink)) {
                txLink = txLink.replace(/\s*\|\s*$/, "");
                $(this).text(txLink);
            }

        });

        //действие при наведении мыши на ссылку
        $("a").hover(function () {
            var href = $(this).attr("href");

            //для техники m81m (удаление + на конце адреса)
            if (/\+$/.test(href)) {
                href = href.replace(/\+$/, '');
                $(this).attr("href", href);
            }
        });

        //отработка нажатия кнопки "Кто ссылается?"
        $('#x47z_bt').click(function () {
            var m1 = logif2("--> нажата кнопка Кто ссылается");

            $('#x47z_res').html("");

            //thxidfz текущей страницы
            var thxidfzCurrPage = yg54g_Storages_nameCurrPage();

            //thxidz текущей страницы
            var thxidzCurrPage = yg54g_Storages_nameCurrPage_B();

            //thxidfz всех страниц wiki
            //var thxidfzAll = yg54g_Storages_getNamesAllFilesOfDir_B(pathRoot, 0, "^p_\\d+_p.html$");
            var thxidfzAll = yg54g_Storages_getCrips(stBedn, 0);

            //получение массива с номерами страниц упоминающих текушую страницу
            var arr = [];
            //  и массива с абсолютными путями таких страниц
            var arrAbs = [];
            for (var i = 0; i < thxidfzAll.length; i++) {
                var elem = thxidfzAll[i];

                //полный путь
                var fullPath = stBedn + "\\\\" + elem;

                //файл содержит строку с именем текущей страницы
                var b = yg54g_Storages_isConsistText(thxidfzCurrPage, fullPath);

                if (b) {
                    arr.push(elem);
                    arrAbs.push(fullPath);
                }
            }

            //вывод информации о страницах ссылающихся на текущую страницу внутри себя
            for (var i1 = 0; i1 < arr.length; i1++) {
                //заголовок страницы
                var title = yg54g_Storages_getTagValue(arrAbs[i1], "title");

                $('#x47z_res').append('<li><a href="' + arr[i1] + '">'
                + title + '</a></li>');
            }


        });

        //отработка нажатия кнопки "Run ActiveX"
        $("#x25z_id_bt").click(function () {
            var m1 = logif2('--> нажата кнопка Run ActiveX');

            yx28z_activXObject = new ActiveXObject("Scripting.FileSystemObject");

            //применение к ссылкам технологии m81m
            $("a").each(function () {
                //применение к ссылкам техники m81m
                var a = $(this).attr('href');
                //
                //если есть + на конце
                var e = /.*\+$/.exec(a);
                if (e !== null && e.length > 0) {
                    //адрес без "+" на конце
                    var ap = a.replace(/\+$/, "");

                    //путь к корню проекта
                    var pathRoot = yg54g_Storages_getPaFd('');
                    //полный путь страницы на которую указывает ссылка
                    var pathF = pathRoot + "\\\\" + ap;

                    //заголовок страницы
                    var t = yg54g_Storages_getTagValue(pathF, "title");

                    $(this).attr('href', ap);
                    $(this).text(t);

                    $('.x27z').text('/+/');
                }
            });

            //имена всех файлов корневой папки - массив
            var arFiNms = yg54g_Storages_getCrips(stBedn, 0);
            //проверка ссылок на наличие страниц на которые они ссылаются
            $("a").each(function () {
                var thLHref = $(this).attr('href');
                var linkExist = false;
                for (var i = 0; i < arFiNms.length; i++) {
                    if (thLHref.toLowerCase() == arFiNms[i].toLowerCase()) {
                        linkExist = true;
                        break;
                    }
                }

                //если страница по ссылке не существует И она не пустая И соответствуе xPz
                if (!linkExist && !/^\s*$/.test(thLHref) && yis_xPz(thLHref)) {
                    $(this).after(' <span class="x29z">/?/</span>');
                }

            });

        });


        yx41z_blocks_html = '<div id="x41z_blocks"></div>';

        //добавление заголовка для блока ссылок
        $('#x44z_links').prepend('<h1>Ссылки</h1>');


        //TEST

        /*
         var s = yx23z_ranges.toString().replace(/,/g,'');
         console.log("s=["+s+"]");

         */
        /*
         var pa = "F:\\Dropbox\\_Web\\_Projects\\m80m_Trooget\\_wiki\\t_137_t.html";
         var fiSt = yg54g_Storages_readFi_B(pa, yg54g_Storages_getFileSystemObject());
         console.log("fiSt=[" + fiSt + "]");

         var res = yg54g_Strings_html_rpTag(fiSt, 'a', 'href', "", "newAttrVa", "методом|метод объекта|[JavaScript]", "newTextLink");
         console.log("res=["+res+"]");

         */


    }); //$.when...


function hhh(view) {
    if ($(view).hasClass("snippetStylePress")) {
        $(view).removeClass("snippetStylePress");
    } else {
        $(view).addClass("snippetStylePress");
    }
    //$(view).next().css("margin-left", "20px");
}

/**
 * Очистка области последних поисковых запросов
 */
function g1_clear() {
    $('#' + G1_ID_LAST_FIND_W74W).html('');
    docCookies.setItem(G1_COOK_LAST_FIND_W73W, "");
}

function updateShowLastFind() {
    if (docCookies.getItem(G1_COOK_LAST_FIND_W73W)) {
        var clf = docCookies.getItem(G1_COOK_LAST_FIND_W73W);
        var arr = clf.split(G1_SEPARATOR_W72W);
        $('#' + G1_ID_LAST_FIND_W74W).html(''); //очистка
        for (var ii = 0; ii < arr.length; ii++) {
            $('#' + G1_ID_LAST_FIND_W74W).append('<span class="w75w" onclick="g1_fn(this.innerHTML);">' + arr[ii] + '</span>');
        }
    }
}

/**
 *
 * @param txt
 */
function g1_fn(txt) {

    //=== перемещение нажатого элемента в конец списка
    var clf = docCookies.getItem(G1_COOK_LAST_FIND_W73W);
    var arr = clf.split(G1_SEPARATOR_W72W);

    var pos = arr.indexOf(txt);
    if (pos != arr.length - 1) {
        var v1 = arr[pos];
        arr.push(v1);
        arr.splice(pos, 1);
    }
    $('#' + G1_ID_LAST_FIND_W74W).html(''); //очистка
    for (var ii = 0; ii < arr.length; ii++) {
        $('#' + G1_ID_LAST_FIND_W74W).append('<span class="w75w" onclick="g1_fn(this.innerHTML);">' + arr[ii] + '</span>');
    }
    var join = arr.join(G1_SEPARATOR_W72W);
    docCookies.setItem(G1_COOK_LAST_FIND_W73W, join);

    //===
    $('#x42z_tf').val(txt);
    x42z_find_click('', txt, $('#x42z_cb_case').prop('checked'));
}

function fn_test() {
    console.log("--> fn_test()");

    /*
     var coo = document.cookie;
     console.log("coo=[" + coo + "]");
     console.log("coo.lenght=[" + coo.length + "]");
     var keys_ = docCookies.keys();
     console.log("keys_=[" + keys_ + "]");

     //var file = "file:///N:/_YandexDisk/_Web/_Projects/m80m_Trooget/_wiki/p_0_p.html";
     var file = "file:///N:/_YandexDisk/_Web/_Projects/m80m_Trooget/_wiki/";
     //var file = "file:///N:\\_YandexDisk\\_Web\\_Projects\\m80m_Trooget\\_wiki\\p_0_p.html";

     $.ajax({
     url: file
     //, contentType: "text/plain; charset=windows-1251"
     , beforeSend: function (xhr) {
     //xhr.setRequestHeader('Content-Type', 'charset=windows-1251');
     //xhr.overrideMimeType('charset=windows-1251');
     }, success: function (data) {
     //data = encodeURIComponent(data);
     console.log(":info: data=[" + data + "]");
     }, dataType: 'html'
     }).done(function () {
     //jqXHR.overrideMimeType('text/plain; charset=windows-1251')
     });
     */

}

/**
 * Создание индекса
 */
function fn_cfIndex(m105m) {
    var m1 = logif('-->fn_cfIndex', m105m);

    //получение массива имен ([dtof]s) всех статей
    //var dtofs = yg54g_Storages_getCrips_B(stBedn, 3, stEinp);
    var dtofs = yg54g_Storages_getCrips_B(stBedn, 0, stEinp);

    var title = '';
    var comm = '';
    var intersect = '';

    //[pker]
    var arPker = new Array();

    //цикл по именам ThFiNm111 статей
    logif2('-- цикл по именам файлов статей; получение Карточек статей')
    for (var i = 0; i < dtofs.length; i++) {
        //"Карточка" статьи
        var cxkk = x_fn_getCxkk(i + '^' + m1, stBedn + G1_DIV + dtofs[i], dtofs[i]);
        //var sart = JSON.stringify(art);
        //console.log(":info: sart=["+sart+"]");
        arPker.push(cxkk);
    }
    logif2('-- циклов = ' + i);

    var stPker = JSON.stringify(arPker);
    //console.log("sar=" + sar);

    //сохранение в файл-индекс (заменой)
    yg54g_Storages_rpFi(m1, stMnuaCrip, stPker, yg54g_Storages_getFileSystemObject(m1));

    alert('Индекс создан');

}

/**
 * Преобразует селектор (1) в строку для RegExp (ThRxStbb).
 * @param aSr (1) -- селектор типа ThSelC, например "div", ".name", "div.name"
 * @retruns {string} строка для использования в конструкции "new RegExp(.., ..)", например "\\<\\s*div"
 */
function yg54g_Strings_html_SrToRx(aSr) {
    //селектор в виде объекта спец. формата
    var ojSr = yg54g_Strings_html_convertSr_B(aSr);
    //:{tag: "div", comma: "id", name: "test"}

    var sRx;
    if (ojSr.tag && ojSr.comma && ojSr.name) {
        var tag1 = ojSr.tag + "\\s+";
        var tag2 = ojSr.tag;
        var attr = "[^\\<\\>]*?" + ojSr.comma + "\\s*=\\s*\"*'*" + ojSr.name;
        var x2 = "[\\s\"']";
        sRx = "\\<\\s*" + tag1 + attr
        + "(?:\\>|" + x2 + "[^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag2 + "\\s*\\>";
    }
    if (ojSr.tag && !ojSr.comma && !ojSr.name) {
        var tag1 = ojSr.tag;
        var tag2 = ojSr.tag;
        var attr = "";
        var x2 = "\\s+";
        sRx = "\\<\\s*" + tag1 + attr
        + "(?:\\>|" + x2 + "[^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag2 + "\\s*\\>";

    }
    if (!ojSr.tag && ojSr.comma && ojSr.name) {
        var tag1 = "([^\\<\\>]*?)\\s+";
        var tag2 = "\\1";
        var attr = "[^\\<\\>]*?" + ojSr.comma + "\\s*=\\s*\"*'*" + ojSr.name;
        var x2 = "[\\s\"']";

        sRx = "\\<\\s*" + tag1 + attr + "(?:\\>|" + x2 + "[^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag2 + "\\s*\\>";
    }

    return sRx;


}
/**
 * Преобразует селектор (1) в строку для RegExp (ThRxStbb).
 * От А отличается добавлением закрвающих конструкций (тегов) в количестве (2).
 * @param aSr (1) -- селектор типа ThSelC, например "div", ".name", "div.name"
 * @param aCtClose (2) -- количество закрывающих конструкций которые нужно добавить
 * @retruns {string} строка для использования в конструкции "new RegExp(.., ..)", например "\\<\\s*div"
 */
function yg54g_Strings_html_SrToRx_B(aSr, aCtClose) {
    //селектор в виде объекта спец. формата
    var ojSr = yg54g_Strings_html_convertSr_B(aSr);
    //:{tag: "div", comma: "id", name: "test"}

    var sRx;
    if (ojSr.tag && ojSr.comma && ojSr.name) {
        var tag1 = ojSr.tag + "\\s+";
        var tag2 = ojSr.tag;
        var attr = "[^\\<\\>]*?" + ojSr.comma + "\\s*=\\s*\"*'*" + ojSr.name;
        var x2 = "[\\s\"']";
        sRx = "\\<\\s*" + tag1 + attr
        + "(?:\\>|" + x2 + "[^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag2 + "\\s*\\>";
    }
    if (ojSr.tag && !ojSr.comma && !ojSr.name) {
        var tag1 = ojSr.tag;
        var tag2 = ojSr.tag;
        var attr = "";
        var x2 = "\\s+";
        sRx = "\\<\\s*" + tag1 + attr
        + "(?:\\>|" + x2 + "[^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag2 + "\\s*\\>";

    }
    if (!ojSr.tag && ojSr.comma && ojSr.name) {
        var tag1 = "([^\\<\\>]*?)\\s+";
        var tag2 = "\\1";
        var attr = "[^\\<\\>]*?" + ojSr.comma + "\\s*=\\s*\"*'*" + ojSr.name;
        var x2 = "[\\s\"']";

        sRx = "\\<\\s*" + tag1 + attr + "(?:\\>|" + x2 + "[^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag2 + "\\s*\\>";
    }

    //добавление закрывающих конструкций
    for (var i = 0; i < aCtClose; i++) {
        var tag;
        if (ojSr.tag) {
            tag = ojSr.tag;
        } else {
            tag = "\\1";
        }
        sRx = sRx + "[\\s\\S]*?\\<\\s*/\\s*" + tag + "\\s*\\>";
    }

    return sRx;

}

/**
 * Возвращает TRUE если (1) это имя страницы удовлетворяющее шаблону имени страницы в рамках проекта (xPz)
 * @param aThLHref (1) -- ThLHref
 * @returns boolean
 */
function yis_xPz(aThLHref) {
    var res = false;
    for (var i = 0; i < yx23z_ranges.length; i++) {
        var re = new RegExp("^" + yx23z_ranges[i] + "_\\d*?_" + yx23z_ranges[i] + "\\.html", "");
        if (re.test(aThLHref)) {
            res = true;
            break;
        }
    }

    return res;
}


/**
 * Просматривает все файлы в папке (2) с именами по шаблону (3), ищет в них ссылки, извлекает из них href и возвраща
 * @param aActivXObject
 * @returns array например [p_1_p.html, t_4_t.html, ...]
 */
function x30z(aActivXObject) {
    //ЗАМОРОЖЕНО
}

/**
 * Нажатие на "создать" рядом с пустой ссылкой
 * @param aTxLink (1) -- текст ссылки
 * @param aLink (2) -- элемент управления "создать"
 */
function x12z_create(m105m, aTxLink, aLink) {
    var m1 = logif('--> x12z_create', m105m);

    //ЗАМОРОЖЕНО
    //получение массива всех ThLHref на которые есть ссылка в страницах проекта
    /*
     yx28z_activXObject = new ActiveXObject("Scripting.FileSystemObject");
     var ar = x30z(yx28z_activXObject);
     */

    var bTxLink = aTxLink;

    //раскладывание текста ссылки по знаку "|" (техника m87m)
    var txSplit = aTxLink.split("|");
    if (txSplit[1]) {
        bTxLink = txSplit[1];
        if (txSplit[2]) {
            bTxLink += "|" + txSplit[2];
        }
    }

    //определение максимального значения PID
    var maxTplus = x52c.ranges_getPIDMax(m1, 't') - 0 + 1; //fn_getPIDMax(m1, "t") + 1;
    var maxPplus = x52c.ranges_getPIDMax(m1, 'p') - 0 + 1; //fn_getPIDMax(m1, "p") + 1;
    var maxQplus = x52c.ranges_getPIDMax(m1, 'q') - 0 + 1; //fn_getPIDMax(m1, "q") + 1;

    //имена страниц для создания
    var pgT = "t_" + maxTplus + "_t.html";
    var pgP = "p_" + maxPplus + "_p.html";
    var pgQ = "q_" + maxQplus + "_q.html";

    //начальный checked
    //значение в конфигурационном файле
    var va = yg64g_getVa(yx46z_config_fi, yx46z_key_last_diap);
    var ch_t, ch_p, ch_q = '';
    if (va === null || va === "t") ch_t = 'checked="checked"';
    if (va === "p") ch_p = 'checked="checked"';
    if (va === "q") ch_q = 'checked="checked"';

    aLink.after('<div class="x13z">' +
    '<form id="x17z">' +
    '<b>Создание новой страницы [' + bTxLink + ']:</b>' +
    '<br><i>Выбор пространства имен:</i>' +
    '<br><input type="radio" id="w41w_t" name="diap" value="' + pgT + '" ' + ch_t + '/> ' + pgT + ' - диапазон t' +
    '<br><input type="radio" id="w41w_p" name="diap" value="' + pgP + '" ' + ch_p + '/> ' + pgP + ' - диапазон p' +
    '<br><input type="radio" id="w41w_q" name="diap" value="' + pgQ + '" ' + ch_q + '/> ' + pgQ + ' - диапазон q' +
    '<br><input type="button" value="Создать" onclick=' + "'" + 'x16z_createPg("--> нажатие Создать когда уже выбран диапазон", "' + aTxLink + '")' + "'" + ' />' +
    '</form>' +
    '</div>');

    //получение последнего диапазона в котором создавалась страница
    var lastDiap = JSON.parse(x52c.getJSON(m1)).ranges['last_diap'];
    switch (lastDiap) {
        case 'p' :
            $("#w41w_p").prop('checked', 'checked');
            break
        case 'q' :
            $("#w41w_q").prop('checked', 'checked');
            break
        case 't' :
            $("#w41w_t").prop('checked', 'checked');
            break
    }

    //скрытие всех ЭУ "создать"
    $('.x11z').hide();
}


/**
 * Получает из конфигурационного файла (1) значение по ключу (2).
 * Работает с форматом хранения "key: value"
 * @param aThFiNmR11 (1) -- относительное имя файла, например "folder\\file.txt"
 * @param aKey (2) -- ключ по которому ищется значение
 * @returns {string} найденное значение (например: "t" или "") или null при нештате
 */
function yg64g_getVa(aThFiNmR11, aKey) {
    var m1 = null;

    //объект файловой системы
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    //абсолютное имя файла
    var thFiNm111 = this.yg54g_Storages_getPaFd(m1) + '\\' + aThFiNmR11;
    //проверка существования файла
    if (!yg54g_Storages_isFiExist(thFiNm111, fso)) {
        console.log("(!) file not exist");
        return null;
    }

    var rx = new RegExp("^\\s*" + aKey + "\\s*:\\s*(.*?)\\s*$", "m");

    //1 - открытие файла только для чтения
    // false - если файла нет, то он не создается
    var textStream = fso.OpenTextFile(thFiNm111, 1, false, w38w);
    var line = "";
    //noinspection JSUnresolvedVariable
    while (!textStream.AtEndOfStream) {
        //считывание следующей строки
        var line = textStream.ReadLine();

        var ex;
        if (ex = rx.exec(line)) {
            textStream.Close();
            return ex[1];
        }
    }
    textStream.Close();
    return null;
}
/**
 * Обновляет в конфигурационном файле (1) значение ключа (2) значением (3).
 * Работает с форматом хранения "key: value".
 * @param aThFiNmR11 (1) -- относительное имя файла, например "folder\\file.txt"
 * @param aKey (2) -- ключ по которому ищется значение
 * @param aVa (3) -- значение для обновления
 * @returns {boolean} true если находит ключ и успешно выполняет перезапись, false во всех остальных случаях
 */
function yg64g_udVa(m105m, aThFiNmR11, aKey, aVa) {
    var m1 = logif('--> yg64g_udVa', m105m);

    //объект файловой системы
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    //абсолютное имя файла
    var thFiNm111 = this.yg54g_Storages_getPaFd(m1) + '\\' + aThFiNmR11;
    //проверка существования файла
    if (!yg54g_Storages_isFiExist(thFiNm111, fso)) {
        console.log("(!) file not exist");
        return false;
    }

    var rx = new RegExp("^\\s*" + aKey + "\\s*:.*$", "m");

    var arLines = [];
    var exist = false;

    //ФОРМИРОВАНИЕ временного массива строк
    //1 - открытие файла только для чтения
    // false - если файла нет, то он не создается
    var textStream = fso.OpenTextFile(thFiNm111, 1, false, w38w);
    var line = "";
    //noinspection JSUnresolvedVariable
    while (!textStream.AtEndOfStream) {
        //считывание следующей строки
        var line = textStream.ReadLine();

        if (!exist && rx.test(line)) {
            arLines.push(aKey + ": " + aVa);
            exist = true;
        } else {
            arLines.push(line);
        }
    }
    textStream.Close();

    if (!exist) {
        return false;
    }

    var rsSave = yg54g_Storages_saveToFile(aThFiNmR11, arLines);

    return rsSave;
}
/**
 * Проверка наличия в конфигурационном файла (1) ключа (2).
 * Работает с форматом хранения "key: value".
 * @param aThFiNmR11 (1) -- относительное имя файла, например "folder\\file.txt"
 * @param aKey (2) -- ключ
 * @returns {boolean} true если находит ключ, false во всех остальных случаях
 */
function yg64g_verifyKeyExist(aThFiNmR11, aKey) {
    var m1 = null;

    //объект файловой системы
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    //абсолютное имя файла
    var thFiNm111 = this.yg54g_Storages_getPaFd(m1) + '\\' + aThFiNmR11;

    //проверка существования файла
    if (!yg54g_Storages_isFiExist(thFiNm111, fso)) {
        console.log("(!) file not exist");
        return false;
    }

    var rx = new RegExp("^\\s*" + aKey + "\\s*:.*$", "m");

    //ФОРМИРОВАНИЕ временного массива строк
    //1 - открытие файла только для чтения
    // false - если файла нет, то он не создается
    var textStream = fso.OpenTextFile(thFiNm111, 1, false, w38w);
    var line = "";
    //noinspection JSUnresolvedVariable
    while (!textStream.AtEndOfStream) {
        //считывание следующей строки
        var line = textStream.ReadLine();

        if (rx.test(line)) {
            textStream.Close();
            return true;
        }
    }
    textStream.Close();

    return false;
}

/**
 * Создание новой страницы по нажатию на "создать" рядом с пустой ссылкой
 * @param aPgTitle (1) -- title для новой страницы; может быть составным (техника m87m)
 */
function x16z_createPg(m105m, aPgTitle) {
    var m1 = logif('-->x16z_createPg', m105m);

    //заголовок который будет у созданной страницы
    var title = aPgTitle;
    //комментарий заголовка который будет у созданной страницы
    var commTitle = "";
    //текст который будет у ссылки
    var rpThTText = aPgTitle;
    //далее переменные выше уточняются

    //выделение текста для заголовка и блока коммментария к заголовку (техника m87m)
    var sp = aPgTitle.split("|");
    if (sp[1]) {
        title = sp[1];
        rpThTText = sp[0];
        if (sp[2]) {
            commTitle = sp[2];
        }
    }
    //на случай если второй элемент пустой, например "text||comment"
    if (sp[2]) {
        title = sp[0];
        rpThTText = sp[0];
        commTitle = sp[2];
    }

    //получение value выбранного в группе radio
    //это value содержит ThFiNm11 страницы которую необходимо создать
    var pgNm = yg54g_DOMs_getRadioVal(m1, 'x17z', 'diap');

    //сохранение checked
    /*
     for (var i = 0; i < yx23z_ranges.length; i++) {
     var rx = new RegExp("^" + yx23z_ranges[i] + "_\\d+_" + yx23z_ranges[i], "i");
     if (rx.test(pgNm)) {
     yg64g_udVa(i+'^'+m1, yx46z_config_fi, yx46z_key_last_diap, yx23z_ranges[i]);
     break;
     }
     }
     */

    //абсолютное имя создаваемого файла
    var absPgNm = this.yg54g_Storages_getPaFd(m1) + '\\' + pgNm;

    //МАССИВ строк с содержимым новой страницы
    var html = [];
    html.push('<html>');
    html.push('<head>');
    html.push('<meta charset="utf-8">');
    html.push('<title>' + title + '</title>');
    html.push('<script language="JavaScript" type="text/javascript" src="_js/jquery-1.11.0.js"></script>');
    html.push('<script language="JavaScript" type="text/javascript" src="_js/main.js"></script>');
    html.push('<link rel="stylesheet" href="_styles/main.css" type="text/css">');
    html.push('</head>');
    html.push('<body>');
    html.push('<div id="shapka"></div>');
    if (commTitle) {
        html.push('<div id="x44z_comm">' + commTitle + '</div>');
    }
    html.push('');
    html.push('');
    html.push('');
    html.push('<div id="podval"></div>');
    html.push('<div id="x41z_blocks"> <a href="'+yg54g_Storages_nameCurrPage_C()+'">'+$("title").text()+'</a> </div>'); //rgx
    html.push('</body>');
    html.push('</html>');

    //создание страницы
    var res = yg54g_Storages_createFi(m1, absPgNm, html);
    if (res == 1) {
        alert("(!) Файл [" + pgNm + "] уже существует");
    }
    if (res == 0) {
        alert("(!) Файл [" + pgNm + "] создан пустым");
    }
    if (res == 2) {
        //alert("Файл успешно создан");

        //обновление информации в конфиг-файле
        //цифра из PID
        var number = yPIDClass.getPIDNumber(m1, pgNm);
        //литера из PID
        var lit = yPIDClass.getPIDLit(m1, pgNm);
        //обновление
        x52c.ranges_udInfo(m1, lit, number);

        logif2("обновлен конфиг-файл");
        logif2("файл успешно создан");
    }

    //замена пустой ссылки ссылкой на вновь созданную страницу
    //yg54g_Storages_html_rpTxInSt(yx21z_nmAbsCurrPg, aPgTitle, pgNm);

    //ВСТАВКА НА ТЕКУЩУЮ страницу ссылки на вновь созданную страницу
    //считываение файла как строки
    var stFi = yg54g_Storages_readFi_B(m1, yx21z_nmAbsCurrPg, yg54g_Storages_getFileSystemObject(m1));
    //замена нужного тега
    var newStFi = yg54g_Strings_html_rpTag(m1, stFi, 'a', 'href', '', pgNm, aPgTitle, rpThTText);
    //перезапись файла
    yg54g_Storages_rpFi(m1, yx21z_nmAbsCurrPg, newStFi, yg54g_Storages_getFileSystemObject(m1));

    //перезагрузка страницы
    yg54g_DOMs_reloadPg(m1);
}


/**
 * Просматривает в файле (1) строки. Если находит подобное &lt;a href=LLL&gt;(2)&lt;/a&gt; то заменяет LLL на (3).
 *  В итоге файл изменяется если были замены.
 * @param aThFiNm111 (1) -- абсолютное имя страницы
 * @param aTxLink (2) -- текст внутри <a>
 * @param aTxForRp (3) -- текст для замены LLL
 */
function yg54g_Storages_html_rpTxInSt(aThFiNm111, aTxLink, aTxForRp) {
    var m1 = null;

    //объект файловой системы
    var axo = new ActiveXObject("Scripting.FileSystemObject");

    //текущая страница в виде строки с переносами в виде \n
    var st = yg54g_Storages_readFi_B(m1, aThFiNm111, axo);

    //замена ссылки (ThLHref)
    var st = yg54g_Strings_html_rpHrefLinks(st, aTxLink, aTxForRp);

    var res = yg54g_Storages_rpFi(m1, aThFiNm111, st, axo);
}

/**
 * Просматривает в файле (1) строки. Если находит подобное &lt;a href=LLL&gt;(2)&lt;/a&gt; то заменяет LLL на (3), а вместо (2) вставляет (4).
 * В итоге файл изменяется если были замены.
 * Отличается от А только опцией вставки (4) вместо (2).
 * @param aThFiNm111 (1) -- абсолютное имя страницы
 * @param aTxLink (2) -- текст внутри <a>
 * @param aNewHref (3) -- текст для замены LLL
 * @param aNewTxLink (4) -- текст для замены текста ссылки (2)
 */
function yg54g_Storages_html_rpTxInSt_B(aThFiNm111, aTxLink, aNewHref, aNewTxLink) {
    var m1 = null;

    //объект файловой системы
    var axo = new ActiveXObject("Scripting.FileSystemObject");

    //текущая страница в виде строки с переносами в виде \n
    var st = yg54g_Storages_readFi_B(m1, aThFiNm111, axo);

    //замена ссылки (ThLHref)
    var st = yg54g_Strings_html_rpHrefLinks(st, aTxLink, aNewHref);

    var res = yg54g_Storages_rpFi(m1, aThFiNm111, st, axo);
}

/**
 * Возвращает объект для работы с файловой системой
 * @returns {ActiveXObject} new ActiveXObject("Scripting.FileSystemObject");
 */
function yg54g_Storages_getFileSystemObject(m105m) {
    var m1 = logif('--> yg54g_Storages_getFileSystemObject', m105m);

    return new ActiveXObject("Scripting.FileSystemObject");
}


/**
 * Ищет в строке (1) ссылки подобные &lt;a href="A"&gt;B&lt;/a&gt; у которых B==(2) /строгое соответствие/
 * и заменяет в них A на (3)
 * @param aTxSource (1) -- строка в которой выполняется поиск и замена,
 * например "&lt;a href=link.html&gt;TTT&lt;/a&gt;"
 * @param aTxLink (2) -- TTT из примера в (1)
 * @param aNewHref (3) -- новое содержимое для замены link.html из примера в (1)
 * @return новая строка
 */
function yg54g_Strings_html_rpHrefLinks(aTxSource, aTxLink, aNewHref) {
    var m1 = null;

    var res = aTxSource;

    //"гашение" спец. символов
    var bTxLink = yg54g_Strings_dismissRegexpSymbols(m1, aTxLink);

    //когда линк в двойных кавычках, например грубо <a href="link" taget=_blank>textLink</a>
    //var re1 = /(<\s*a\s+href\s*=\s*")([^<>"]*)("[^<>]*>)(.*?)(<\s*\/\s*a\s*>)/igm;
    var re1 = new RegExp("(\\<\\s{0,}a\\s{1,}href\\s{0,}=\\s{0,}\")([^\\<\\>\"]{0,})(\"[^\\<\\>]{0,}\\>)(" + bTxLink + ")(\\<\\s{0,}/\\s{0,}a\\s{0,}\\>)", "gim");
    res = res.replace(re1, "$1" + aNewHref + "$3$4$5");

    //когда линк в одинарных кавычках, например грубо <a href='link' taget=_blank>textLink</a>
    //var re2 = /(<\s*a\s+href\s*=\s*')([^<>']*)('[^<>]*>)(.*?)(<\s*\/\s*a\s*>)/igm;
    var re2 = new RegExp("(\\<\\s{0,}a\\s{1,}href\\s{0,}=\\s{0,}')([^\\<\\>']{0,})('[^\\<\\>]{0,}\\>)(" + bTxLink + ")(\\<\\s{0,}/\\s{0,}a\\s{0,}\\>)", "gim");
    res = res.replace(re2, "$1" + aNewHref + "$3$4$5");

    //когда линк без кавычек, например грубо <a href= link taget=_blank>textLink</a>
    //var re3 = /(<\s*a\s+href\s*=\s*)([^'<>"\s]+)([^<>]*>)(.*?)(<\s*\/\s*a\s*>)/igm;
    var re3 = new RegExp("(\\<\\s{0,}a\\s{1,}href\\s{0,}=\\s{0,})([^'\\<\\>\"\\s]{1,})([^\\<\\>]{0,}\\>)(" + bTxLink + ")(\\<\\s{0,}/\\s{0,}a\\s{0,}\\>)", "gim");
    res = res.replace(re3, "$1" + '"' + aNewHref + '"' + "$3$4$5");

    //когда линк пустой, например грубо <a href= >textLink</a>
    //var re4 = /(<\s*a\s+href\s*=)(\s*)(>.*?)(<\s*\/\s*a\s*>)/igm;
    var re4 = new RegExp("(\\<\\s{0,}a\\s{1,}href\\s{0,}=)(\\s{0,})(\\>" + bTxLink + ")(\\<\\s{0,}/\\s{0,}a\\s{0,}\\>)", "gim");
    res = res.replace(re4, "$1" + '"' + aNewHref + '"' + "$3$4");

    return res;
}


/**
 * Ищет в строке первый тег вида &lt;(2) (3)=(4)&gt;(6)&lt;/(2)&gt; и заменяет (4) на (5) и (6) на (7).
 * Критерием совпадения является точное равенство (6) строки (1) и (6) заданного, а также равенство (4) строки (1) и (4) заданного
 * <i>(последнее равенство учитывает только непрерывную последовательность символов (4) после знака = в которые не входят пробелы и кавычки ' ",
 * например будут считаться равными строки "href = 'text '" и "href=  text  ")</i>
 * @param aTxSource (1) -- строка в которой выполняется поиск и замена
 * @param bTgNm (2) -- имя тега
 * @param bAttrNm (3) -- имя атрибута
 * @param aCuAttrVa (4) -- текущее значение атрибута
 * @param aNwAttrVa (5) -- текст для замены (4)
 * @param aCuThTText (6) -- текущий текст тега
 * @param aNwThTText (7) -- текст для замены (6)
 * @return {string} новая строка; если замен не было, то исходная строка
 */
function yg54g_Strings_html_rpTag(m105m, aTxSource, aTgNm, aAttrNm, aCuAttrVa, aNwAttrVa, aCuThTText, aNwThTText) {
    var m1 = logif('--> yg54g_Strings_html_rpTag', m105m);

    var res = aTxSource;

    //"гашение" спец. символов
    var bTgNm = yg54g_Strings_dismissRegexpSymbols(m1, aTgNm);
    var bAttrNm = yg54g_Strings_dismissRegexpSymbols(m1, aAttrNm);
    var bCuAttrVa = yg54g_Strings_dismissRegexpSymbols(m1, aCuAttrVa);
    var bCuThText = yg54g_Strings_dismissRegexpSymbols(m1, aCuThTText);

    //"разбивка" 1-го порядка
    var rx = new RegExp("(\\<\\s*)(" + bTgNm + ")([^\\<\\>]*?)\\>(" + bCuThText + ")(\\<\\s*/\\s*\\2\\s*\\>)", "gi");
    var ex = rx.exec(aTxSource);
    var r0, r0_new;
    var b = true;
    if (ex) {
        //весь тег
        r0 = ex[0];

        //элементы тега
        var r1 = RegExp.$1;
        var r2 = RegExp.$2;
        //часть с атрибутами
        var attrs = RegExp.$3;
        var r31 = ">";
        var r4 = RegExp.$4;
        var r5 = RegExp.$5;

        //"разбивка" 2-го порядка - разбивка части с атрибутами, и замена значения атрибута
        var rxA = new RegExp("(\\s+" + bAttrNm + "\\s*=\\s*[\"']?\\s*)([^\"'\\<\\>\\s]*)([\\s\"']?[\\s\"']?)", "gi");
        var exA = rxA.exec(attrs);
        if (exA) {
            var cuVa = exA[2];
            var r1a = RegExp.$1;
            var r3a = RegExp.$3;

            var rx8 = new RegExp("^" + bCuAttrVa + "$", "i");
            //если значение атрибута заданное пользователем и фактическое совпадают, то выполняем замену
            if (rx8.test(cuVa)) {
                attrs = attrs.replace(rxA, r1a + aNwAttrVa + r3a);
            } else {
                b = false;
            }
        }

        //формирование тега с выполненными заменами (если есть совпадение по значению атрибута)
        if (b) {
            r0_new = r1 + r2 + attrs + r31 + aNwThTText + r5;
        }
    }

    //итоговая замена
    if (r0 && r0_new) {
        res = res.replace(r0, r0_new);
    }

    return res;
}


/**
 * Перезагрузка страницы
 */
function yg54g_DOMs_reloadPg(m105m) {
    var m1 = logif('--> yg54g_DOMs_reloadPg', m105m);
    location.reload();
}

/**
 * Создание файла (1) со строками (2). Файл не создается если он уже существует.
 * @param aThFiNm111 (1) -- абсолютное имя файла, например "F:\\Folder\\File.html"
 * @param aArr (2) -- массив строк для добавления в файл (1), например ['text1', 'text2', ...] или null
 * или пустой массив, тогда файл будет пустым
 * @return int 2 - если успешно; 1 - если файл (1) уже существует; 0 - или если массив (2) null или пустой
 */
function yg54g_Storages_createFi(m105m, aThFiNm111, aAr) {
    var m1 = logif('--> yg54g_Storages_createFi', m105m);

    //объект для работы с файловой системой
    var fsObj = new ActiveXObject("Scripting.FileSystemObject");

    //проверка - если такой файл уже существует
    if (fsObj.FileExists(aThFiNm111)) {
        return 1;
    }

    //создание файла - открытие текстового потока для записи
    //
    //see http://stackoverflow.com/questions/2840252/writing-utf8-text-to-file
    //=== var utf8Enc = new ActiveXObject("Utf8Lib.Utf8Enc");
    //
    //1 - false, если такой файл уже есть, то он не заменяется
    //2 - true: кодировка Unicode; false: кодировка ANSI
    var textStream = fsObj.CreateTextFile(aThFiNm111, false, true);

    //проверка - если массив пуст, то и файл остается пустым
    if (aAr == null || aAr.length < 1) {
        textStream.Close();
        return 0;
    }

    //запись в файл
    for (var i = 0; i < aAr.length; i++) {
        textStream.WriteLine(aAr[i]);
    }

    textStream.Close();
    return 2;
}


/**
 * Заменяет всё содержимое файла (1) данными из (2)
 * @param aThFiNm111 (1) -- абсолютное имя файла, например "F:\\Folder\\File.html"
 * @param aStRp (2) -- строка с разделителями строк \n
 * @param aActiveXObject (3) -- объект файловой системы JScript
 * @returns int 2 - если успешно; 1 - если файл не существует; 0 - если строка для записи пуста (файл становится пустым)
 */
function yg54g_Storages_rpFi(m105m, aThFiNm111, aStRp, aActiveXObject) {
    var m1 = logif('--> yg54g_Storages_rpFi', m105m);

    if (aActiveXObject == null) alert("null");

    //проверка существования файла
    if (!aActiveXObject.FileExists(aThFiNm111)) {
        //файл не существует
        return 1;
    }

    //открытие текстового потока для записи
    //2 - false, если такой файл уже есть, то он не заменяется
    //3 - true: кодировка Unicode; false: кодировка ANSI
    var textStream = aActiveXObject.CreateTextFile(aThFiNm111, true, true);

    //преобразование строки в массив по разделителю
    var arSts = aStRp.split(/\n/igm);

    //проверка - если массив пуст, то и файл остается пустым
    if (arSts == null || arSts.length < 1) {
        textStream.Close();
        return 0;
    }

    //запись строк
    for (var i = 0; i < arSts.length; i++) {
        textStream.WriteLine(arSts[i]);
    }

    textStream.Close();
    return 2;

}

/**
 * Ищет форму (1), в ней группу radio (2), определяет какой из radio отмечен и возвращает его value
 * @param aFormId (1) -- id формы, например "forma"
 * @param aNmRadios (2) -- name группы radio, например "radios" (у группы radio name должен быть одинаковыми)
 * @return
 */
function yg54g_DOMs_getRadioVal(m105m, aFormId, aNmRadios) {
    var m1 = logif('--> yg54g_DOMs_getRadioVal', m105m);

    var form = document.forms[aFormId];

    var val;
    var radios = form.elements[aNmRadios];

    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked == true) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

/**
 * Возвращает наибольшее число страницы (xnz) из пространства (2) (наибольшее PID диапазона (2))
 * @param aDiap (2) -- пространство имен страниц, возможные значения : "p", "t", "q"
 * @return number 0 если нет ни одного файла удовлетворяющего условиям
 */
function fn_getPIDMax(m105m, aDiap) {
    var m1 = logif('--> fn_getPIDMax', m105m);

    //чтение содержимого конфиг-файла
    var fconf = yg54g_Storages_readFi_C(m1, stBedn + '\\' + x52p);
    //fconf = fconf.replace(/\n/g, '');
    //console.log("fconf=["+fconf+"]");

    var oj = JSON.parse(fconf);
    var val = oj.ranges[aDiap];

    return val;

    /*
     //список всех файлов, например [p_1_p.html, p_2_p.html, ...]
     var files = yg54g_Storages_getNamesAllFilesOfDir(m1, yx15z_pathRoot, 0);

     if (files.length < 1) {
     return 0;
     }

     var res = 0;
     //пробежка по именам страниц
     var re = new RegExp(aDiap + "_(\\d+)_" + aDiap + ".html", "i");
     for (var i1 = 0; i1 < files.length; i1++) {
     //выделение числа из имени
     var e = re.exec(files[i1]);
     if (e !== null) {
     var e1 = e[1] - 0;
     //если число больше уже запомненного
     if (e1 > res) {
     res = e1;
     }
     }
     }

     return res;
     */
}


//ВЫВОД на экран
function fnShowFindResult_x2(arOjs, m1, stFindText) {
    //блок с различной общей информацией о результатах поиска
    var jResBlockInfo = $('<div class="x42z_res_block_info"></div>').appendTo('#x42z_find_result');
    //информация о количестве совпавших страниц
    var jResInfoCount =
        $('<div id="x42z_res_info_count">Найдено: ' + arOjs.length + ' стр. </div>').appendTo(jResBlockInfo);
    //
    //блок с отдельными поисковыми блоками
    var jResBlocks = $('<div class="x42z_res_blocks"></div>').appendTo('#x42z_find_result');
    //три подблока
    //для соответствий в заголовке
    var jResBlocksMatchTitle = $('<div id="x42z_res_blocks_match_title"><div id="x42z_css_title_title">В ЗАГОЛОВКЕ</div></div>').appendTo(jResBlocks);
    //для соответствий в комментарии
    var jResBlocksMatchComm = $('<div id="x42z_res_blocks_match_comm"><div id="x42z_css_title_comm">В КОММЕНТАРИИ</div></div>').appendTo(jResBlocks);
    //для соответствий в теле страницы
    var jResBlocksMatchBody = $('<div id="x42z_res_blocks_match_body"><div id="x42z_css_title_body">В ТЕЛЕ</div></div>').appendTo(jResBlocks);
    //
    //вывод каждой карточки
    var ctTitle = 0, ctComm = 0, ctBody = 0;
    logif2('-- перед циклом вывода каждой Карточки');
    for (var i = 0; i < arOjs.length; i++) {
        //Jq-блок с карточкой-результатом
        var j = x_fn_block(i + '^' + m1, arOjs[i], stFindText, "p_find");

        if (arOjs[i].isTitle) {
            j.appendTo(jResBlocksMatchTitle);
            ctTitle++;
        } else {
            if (arOjs[i].isComm) {
                j.appendTo(jResBlocksMatchComm);
                ctComm++;
            } else {
                j.appendTo(jResBlocksMatchBody);
                ctBody++;
            }
        }
    }

    //количество совпадений в заголовках групп вывода
    $('#x42z_css_title_title').append(' (' + ctTitle + ')');
    $('#x42z_css_title_comm').append(' (' + ctComm + ')');
    $('#x42z_css_title_body').append(' (' + ctBody + ')');

    var delta = new Date().getTime() - w39w;
    logif2('-- время поиска и вывода = ' + delta);
}

/**
 * Отфильтровка
 *
 * @param stPker
 * @param aCheckedCase
 * @param stFindText
 * @param arOjs
 * @param m1
 */
function fnFilterFind_x2(stPker, aCheckedCase, stFindText, arOjs, m1) {
    //преобразование строки в массив объектов ([pker])
    var arPker = JSON.parse(stPker);
    //=
    for (var i18 = 0; i18 < arPker.length; i18++) { //ЦИКЛ
        var ojCxkk = arPker[i18];
        var stPath = stBedn + G1_DIV + ojCxkk.stZxuw;

        //учет "галок" фильтрации наборов (t, p, q)
        //= yx23z_re=^[q]_\d+_[q].html$
        //= yx23z_re2=^(.+)([q]_\d+_[q].html)$
        var re = new RegExp(yx23z_re.substring(1), 'i');
        var m = re.exec(stPath);
        if (m == null) {
            continue;
        }

        var stTitle = ojCxkk.txTitle;
        if (!aCheckedCase) stTitle = stTitle.toLowerCase();
        if (stTitle.indexOf(stFindText) !== -1) {
            ojCxkk.isTitle = true;
        }

        var comm = ojCxkk.txComm;
        if (!aCheckedCase) comm = comm.toLowerCase();
        //
        if (comm.indexOf(stFindText) !== -1) {
            ojCxkk.isComm = true;
        }

        if (ojCxkk.isTitle || ojCxkk.isComm) {
            arOjs.push(ojCxkk);
        }
    } //ЦИКЛ

    fnShowFindResult_x2(arOjs, m1, stFindText);
}
/**
 * Нажата кнопка "Поиск"
 * @param stFindText (1) -- текст из поля поиска
 * @param aCheckedCase (2) -- галочка "Учитывать регистр"
 */
function x42z_find_click(m105m, stFindText, aCheckedCase) {
    var m1 = logif('--> x42z_find_click', m105m);
    w39w = new Date().getTime();

    yx7z_case = aCheckedCase;

    if (!aCheckedCase) stFindText = stFindText.toLowerCase();

    //проверка что хотябы что-то было введено
    if (stFindText.length < 1) {
        alert("Введите текст для поиска");
        return; //=====X
    }

    //===
    var clf = docCookies.getItem(G1_COOK_LAST_FIND_W73W);
    var arr = [];
    if (clf) {
        arr = clf.split(G1_SEPARATOR_W72W);
    }
    var ix = arr.indexOf(stFindText);
    if (ix == -1) {
        arr.push(stFindText);
        if (arr.length > G1_LAST_FIND_MAX) {
            arr.shift(); //удаление 1-го элемента массива
        }
        var join = arr.join(G1_SEPARATOR_W72W);
        docCookies.setItem(G1_COOK_LAST_FIND_W73W, join);
        updateShowLastFind();
    }
    //===

    //очистка поля вывода результата
    $('#x42z_find_result').text('');

    var arOjs = [];

    //если вкл. галка "искать в индексе"
    if ($('#x50h').prop('checked')) {
        //получение строки индекса из файла-индекса
        var stPker = "";
        if (ixwaMode === G1_IXWA_UASK) {
            console.log('-- режим [uask]');
            $.get(G1_MNUA_URL, function (stData, textStatus, jqXHR) {
                stPker = stData;
                fnFilterFind_x2(stPker, aCheckedCase, stFindText, arOjs, m1);
            }).fail(function () {
                alert('ошибка: недоступен файл индекса');
                console.error('ошибка загрузки файла индекса');
            });
        } else {
            stPker = yg54g_Storages_readFi_C(m1, stMnuaCrip);
            fnFilterFind_x2(stPker, aCheckedCase, stFindText, arOjs, m1);
        }
    } else if (!$('#x50h').prop('checked')) {
        //^ если обычный поиск, т.е. без использования Индекса

        //массив [crip]s всех страниц проекта
        var fiNms = yg54g_Storages_getCrips_B(stBedn, 3, yx23z_re);

        //ПОЛУЧЕНИЕ массива с объектами содержащими результаты поиска
        //var arOjs = yg54g_Strings_getConsistText_D(fiNms, 'title', aText, yx7z_case, 'x42z_hg');
        arOjs = yx42z_getConsistText(m1, fiNms, stFindText, yx7z_case);

        fnShowFindResult_x2(arOjs, m1, stFindText);
    }

}

/**
 * Реализация нажатия на кноку добавления результата поиска как тег в область тегов
 * @param aOj
 */
function x41z_fn_add_tag(aOj) {
    var m1 = null;

    //ПРОВЕРКА есть ли уже на странице блок тегов
    var b = $('body').find($x41z_block_tags).is($x41z_block_tags);

    //если блока нет, то создаем его над блоком поиска
    var jBlockTags;
    if (!b) {
        jBlockTags = $('<div id="x41z_block_tags">');
        $('.x42z_form_class').before(jBlockTags);

        var title = $('<div id="x41z_block_tags_title">Блок тегов</div>').appendTo(jBlockTags);
    } else {
        jBlockTags = $('body').find($x41z_block_tags);
    }

    //ДОБАВЛЯЕМ запись в блок
    //шаблон записи
    var jElem = $('<div class="x41z_block_tags_elem"></div>');
    var jElemTitle = $('<div class="x41z_block_tags_elem_title"></div>');
    var jElemComm = $('<div class="x41z_block_tags_elem_comm"></div>');
    var jElemThxx = $('<div class="x41z_block_tags_elem_thxx"></div>');
    jElemTitle.appendTo(jElem);
    jElemComm.appendTo(jElem);
    jElemThxx.appendTo(jElem);
    //
    //НАПОЛНЕНИЕ записи
    //обработка пересечений
    var thxx = aOj.data.txThxx;
    if (thxx) {
        var jx = $('<div></div>');
        jx.append(thxx);
        jx.find('a').each(function () {
            $(this).before('&bull; ');
            $(this).after(' &nbsp; ');
        });
        var jxh = jx.html();
        jElemThxx.html(jxh);
    }
    //
    //заголовок
    var title = aOj.data.txTitle;
    var hr = aOj.data.stZxuw;
    //превращение абсолютной ссылки в относительную
    hr = hr.replace(stBedn + '\\\\', '');
    //удаление html на конце для отображения
    hr1 = hr.replace(/\.html$/i, '');
    //замена слеэшей
    hr = hr.replace(/\\+/g, '/').replace(/\/+/g, '/');
    $(jElemTitle).append('<a href="' + hr + '">' + title + '</a>' + ' <span class="x41z_block_tags_elem_title_href">' + hr1 + '</span>');
    //
    //комментарий
    jElemComm.html(aOj.data.txComm);
    //
    //добавление записи
    jElem.appendTo(jBlockTags);

    //ДАЕМ команду на перестроение блока результатов поиска
    //очистка блока поиска
    $('.x42z_res_blocks').html('');
    //получение массива href отобранных ссылок (тегов)
    var arHrefs = [];
    $('.x41z_block_tags_elem_title > a').each(function () {
        var href = $(this).attr('href');
        arHrefs.push(href);
    });
    //
    //определение тегодержателей и ассоциатов
    var oj = x41z_fn_getArTagholders(arHrefs);
    //массив ThFiNm11 тегодержателей
    var arTagholders = oj.tagholders;
    //массив ThFiNm11 ассоциатов
    var arAssociats = oj.associats;
    //сортировка и схлопывание массива
    arAssociats = yg54g_Ars_removeDublicatesAaSort(arAssociats, "");

    //добавление блока тегодержателей
    var jResBlockTagholders = $('<div id="x42z_res_tagholders"></div>').appendTo('.x42z_res_blocks');
    jResBlockTagholders.append('<div id="x42z_css_title_tagholders">ТЕГОДЕРЖАТЕЛИ (' + arTagholders.length + ')</div>');
    //добавление блока ассоциатов
    var jResBlockAssociats = $('<div id="x42z_res_associats"></div>').appendTo('.x42z_res_blocks');
    jResBlockAssociats.append('<div id="x42z_css_title_associats">АССОЦИАТЫ (' + arAssociats.length + ')</div>');

    //вывод тегодержателей в блок поиска
    for (var i32 = 0; i32 < arTagholders.length; i32++) {
        //получения объекта с данными тегодержателя
        var oj = x_fn_getCxkk(null, stBedn + '\\\\' + arTagholders[i32], null);
        //получение карточки тегодержателя
        var jBlock = x_fn_block(i32 + '^' + m1, oj, "", "p_tagholders");
        $(jResBlockTagholders).append(jBlock);
    }
    //вывод ассоциатов в блок поиска
    for (var i33 = 0; i33 < arAssociats.length; i33++) {
        //получения объекта с данными ассоциата
        var oj = x_fn_getCxkk(null, stBedn + '\\\\' + arAssociats[i33], null);
        //получение карточки ассоциата
        var jBlock = x_fn_block(i33 + '^' + m1, oj, "", "p_tagholders");
        $(jResBlockAssociats).append(jBlock);
    }

}

/**
 * Получение массива тегодержателей тегов (1), а также их ассоциатов
 * @param aThFiNm11s (1) -- массив имен файлов из блока тегов
 * @returns {objext} объект из двух свойств-массивов,
 * {tagholders: [массив_href_тегодержателей], associats: [массив_href_ассоциатов]}
 */
function x41z_fn_getArTagholders(aThFiNm11s) {

    var m1 = null;

    //массив ассоциатов
    var arAssociats = [];

    //ПОЛУЧЕНИЕ массива тегодержаталей, с повторениями
    //получение массива имен файлов проекта
    var a = yx23z_ranges.toString().replace(/,/g, '');
    //:ptq
    var arFis = yg54g_Storages_getCrips_B(stBedn, 0, "^[ptq]_\\d+_[ptq].*");

    //этап 1 - проход по всем файлам, отделение файлов которые упоминают каждую искомую ссылку.
    //Упоминание может быть в любом месте файла, не обязательно в блоке персечений. То что попадает в блок пересечений будет
    //отсеяно на этапе 2
    var ar = [];
    //
    var fso = yg54g_Storages_getFileSystemObject(m1);
    for (var i = 0; i < arFis.length; i++) {
        //всмомогательный массив - первичное заполнение
        var arExists = [];
        for (var i7 = 0; i7 < aThFiNm11s.length; i7++) {
            arExists[i7] = false;
        }

        //1 - открываем файл только для чтения    //false - если файла нет, то он не создается
        var textStream = fso.OpenTextFile(stBedn + '\\' + arFis[i], 1, false, w38w);
        //пока не достигнут конец файла
        //noinspection JSUnresolvedVariable
        while (!textStream.AtEndOfStream) {
            //очередная строка
            var line = textStream.ReadLine();

            //проверка наличия в строке тегов
            for (var i2 = 0; i2 < aThFiNm11s.length; i2++) {
                //если присутствует
                if (line.indexOf(aThFiNm11s[i2]) !== -1) {
                    arExists[i2] = true;
                }
            }
        }
        textStream.Close();

        //проверка все ли ссылки встретились в файле
        for (var i3 = 0; i3 < arExists.length; i3++) {
            if (!arExists[i3]) {
                arExists.length = 0;
                break;
            }
        }
        //если все
        if (arExists.length > 0) {
            ar.push(arFis[i]);
        }
    }

    //ЭТАП 2 - просмотр отобранных страниц для определения какие из них содержат искомые теги в блоке пересечений
    var ar2 = [];
    logif2('-- перед циклом (--> yg54g_Storages_readFi_B, --> yg54g_Strings_html_getTg_C)')
    for (var i8 = 0; i8 < ar.length; i8++) {
        //всмомогательный массив - первичное заполнение - подразумевает начальное остуствие всех искомых ссылок
        var arExists2 = [];
        for (var i9 = 0; i9 < aThFiNm11s.length; i9++) {
            arExists2[i9] = false;
        }

        //файл в виде строки
        var fiSt = yg54g_Storages_readFi_B(null, stBedn + '\\' + ar[i8], fso);
        if (!fiSt) continue;

        //блок пересечений как строка
        var stThxx = yg54g_Strings_html_getTg_C(m1, fiSt, "div#x41z_blocks", "p_outerHTML").blockOuter;
        if (!stThxx) continue;

        var arTempAssociats = [];
        //перечисление href каждой ссылки блока пересечений
        $(stThxx).find('a').each(function () {
            var h = $(this).attr('href');

            arTempAssociats.push(h);

            //сравнение с искомыми ссылками
            for (var i10 = 0; i10 < aThFiNm11s.length; i10++) {
                if (aThFiNm11s[i10] === h) {
                    arExists2[i10] = true;
                }
            }
        });

        //проверка вспомогательного массива, что все его элементы == true
        for (var i22 = 0; i22 < arExists2.length; i22++) {
            if (!arExists2[i22]) {
                arExists2.length = 0;
                break;
            }
        }

        //если все искомые ссылки в блоке пересечений содержаться
        if (arExists2.length > 0) {
            ar2.push(ar[i8]);
            //
            arAssociats = arAssociats.concat(arTempAssociats);
        }
    }
    return {tagholders: ar2, associats: arAssociats};

}


/**
 * Получение "Карточки" страницы (1) представленной объектом [cxkk]
 *
 * @param stCrip (1) -- абсолютное имя страницы, формат [crip], например "F:\\Folder\\index.html"
 * @param stDtof (2) -- {optional} имя файла страницы, формат [dtof], например "index.html"
 * @retruns {object} объект
 */
function x_fn_getCxkk(m105m, stCrip, stDtof) {
    stDtof = stDtof || null;

    var m1 = logif('-->x_fn_getDataOjOfPg', m105m);

    //файл в виде строки
    var stFi = yg54g_Storages_readFi_B(m1, stCrip, yg54g_Storages_getFileSystemObject(m1));
    if (!stFi) return;

    var title = yg54g_Strings_html_getTg_C(m1, stFi, "title", "p_innerHTML").blockInner;
    var comm = yg54g_Strings_html_getTg_C(m1, stFi, "#x44z_comm", "p_innerHTML").blockInner;
    var thxx = yg54g_Strings_html_getTg_C(m1, stFi, "div#x41z_blocks", "p_innerHTML").blockInner;

    //объект [[cxkk]]
    var cxkk = {
        isTitle: false,
        txTitle: title,
        isComm: false,
        txComm: comm,
        txThxx: thxx,
        //[[zxuw]] - тут находится либо полный путь к странице ([crip]) либо только имя страницы ([stDtof])
        stZxuw: stDtof === null ? stCrip : stDtof,
        arSts: []
    };

    return cxkk;

}

/**
 * Возвращает готовый к выводу на экран блок.
 * В режиме "p_find" (см. (3)), если задан текст (2) то выполняется подсветка данного текста в "заголовке" и "комментарии к заголовку".
 * Данный метод используется для получения блоков для вывода результата текстового поиска (режим "p_find") и для вывода тегодержателей (режим "p_tagholders").
 * @param aOj (1) -- объект с информацией для формирования блока, {isTitle"":, txTitle"":, isComm"":, txComm:"", txThxx:"", ThFiNm111:"", arSts:[]}
 * @param aTxFind (2) -- текст для подсветки в "заголовке" и "комментарии к заголовоку"
 * @param aMod (3) -- режим работы: "p_find" для формирования блока результатов текстового поиска; "p_tagholders" для формирования блока тегодержателя;
 * при любом другом значении будет возвращено null
 * @returns {string}  Jq объект или null при нештате
 */
function x_fn_block(m105m, aOj, aTxFind, aMod) {
    var m1 = logif('--> x_fn_block', m105m);

    if (aMod !== "p_find" && aMod !== "p_tagholders") {
        return null;
    }

    var modFind = (aMod === "p_find") ? true : false;
    var modAssociats = (aMod === "p_tagholders") ? true : false;

    //если заголовок содержит (2)
    var isTitle = aOj.isTitle;
    //заголовок
    var title = aOj.txTitle;
    //если комментарий содержит (2)
    var isComm = aOj.isComm;
    //комментарий
    var comm = aOj.txComm;
    //линки блока пересечений, например "<a href="1.html">text</a><a href="2.html">text</a>..."
    var thxx = aOj.txThxx;
    //абсолютное имя страницы
    var ThFiNm111 = aOj.stZxuw;
    //массив строк содержащих (2)
    var arSts = aOj.arSts;

    //контейнер
    var jResBlock = $('<div class="x42z_res_block"></div>');

    var jResTitle = $('<div class="x42z_res_title"></div>');
    //имя файла справа от заголовка-ссылки
    var jResFiNm = $('<span class="x41z_res_href"></span>');
    var jResComm = $('<div class="x42z_res_comm"></div>');
    var jResThxx = $('<div class="x42z_res_thxx"></div>');
    var jResSts = $('<div class="x42z_res_sts"></div>');

    jResFiNm.appendTo(jResTitle);

    //заполнение заголовка
    if (title) {
        //подсветка
        if (modFind) {
            title = yg54g_Strings_html_rpForHg(m1, title, aTxFind, 'x42z_hg', yx7z_case);
        }
        jResTitle.appendTo(jResBlock);
    }
    //
    //href
    var hr = ThFiNm111;
    //превращение абсолютной ссылки в относительную
    hr = hr.replace(stBedn + '\\\\', '');
    //удаление html на конце для отображения
    hr1 = hr.replace(/\.html$/i, '');
    //замена слеэшей
    hr = hr.replace(/\\+/g, '/').replace(/\/+/g, '/');
    //
    $(jResTitle).prepend('<a href="' + hr + '">' + title + '</a>');
    $(jResFiNm).append(' &nbsp;' + hr1);
    //
    //кнопка "Добавить в пересечения"
    var jBt = $('<input class="x41z_bt_plus" type="button" value="+ i" title="Добавить в пересечения" />')
        .appendTo(jResTitle);
    //добавление обработчика - см. http://ruseller.com/lessons.php?rub=32&id=700
    $(jBt).bind("click", aOj, x41z_fn_add);
    //кнопка "Добавить как тег в блок тегов"
    var jBtAddTg = $('<input class="x41z_bt_add_tg" type="button" value="+ t" title="Добавить как тег в блок тегов" />')
        .appendTo(jResTitle);
    $(jBtAddTg).bind("click", aOj, x41z_fn_add_tag);

    //КОММЕНТАРИЙ заголовка
    if (comm) {
        //подстветка
        if (modFind) {
            comm = yg54g_Strings_html_rpForHg(m1, comm, aTxFind, 'x42z_hg', yx7z_case);
        }
        jResComm.append(comm);
        jResComm.appendTo(jResBlock);
    }

    //ПЕРЕСЕЧЕНИЯ
    if (thxx) {
        var tmp = $('<div></div>');
        tmp.append(thxx);
        tmp.find('a').each(function () {
            $(this).before('&bull; ');
            $(this).after(' &nbsp; ');
        });
        var jxh = tmp.html();
        jResThxx.append(jxh);
        jResThxx.appendTo(jResBlock);
    }

    //строки
    if (arSts.length > 0 && modFind) {
        for (var i1 = 0; i1 < arSts.length; i1++) {
            var t = arSts[i1];
            //подстветка
            if (t) {
                t = yg54g_Strings_html_rpForHg(m1, t, aTxFind, 'x42z_hg', yx7z_case);
            }
            $('<div class="x42z_res_st">' + t + '</div>').appendTo(jResSts);

        }
        jResSts.appendTo(jResBlock);
    }

    return jResBlock;
}


/**
 * Реализация нажатия на кнопку добавления пересечения (x41z_bt_plus)
 * @param oj (1) -- объект с данными поиска
 */
function x41z_fn_add(oj) {

    //делаем кнопку disabled
    $(this).prop('disabled', 'false');

    //формирование блока для вставки
    //var jBlock = $('<div class="x41z_block"></div>');
    //var jLink = $('<a href="' + oj.data.ThFiNm111 + '">' + oj.data.txTag + '</a>'); //.appendTo(jBlock);
    //
    //var block = jBlock.get(0).outerHTML;
    var hr = oj.data.stZxuw;
    hr = hr.replace(stBedn + "\\\\", "");

    var lnk = '<a href="' + hr + '">' + oj.data.txTitle + '</a>';
    //удаление подсвечиваний
    var lnk = yg54g_Strings_html_unwrapTg(lnk, "span");
    //
    var block = $(lnk);

    //ДОБАВЛЕНИЕ пересечения в файл страницы
    //проверка наличия блока пересечений (xXz) в файле
    var ctXxz = yg54g_Storages_html_isConsistEm(yx21z_nmAbsCurrPg, "div#x41z_blocks");
    //добавление блока пересечений если его нет
    var rs1;
    if (ctXxz < 1) {
        rs1 = yg54g_Storages_html_addEmIntoFi(yx21z_nmAbsCurrPg, "div#podval", yx41z_blocks_html, "p_after");
    }
    //добавление пересечения в блок пересечений
    var rs = yg54g_Storages_html_addEmIntoFi(yx21z_nmAbsCurrPg, "div#x41z_blocks", block, "p_append");

    //показ/обновление блока пересечений без обновления страницы

    if (rs == 2) {
        //если блок пересечений есть
        if ($('div').is($x41z_blocks)) {
            //добавление пересечения
            $($x41z_blocks).append(block);

        } else {
            $(yx41z_blocks_html).appendTo($podval).append(block);
        }
        //обновление блока пересечений
        x41z_fn_udAp();
    }
}

/**
 * Ищет в файле (1) элементы удовлетворяющие селектору (2). Возвращает количество таких элементов
 * @param aThFiNm111 (1) -- абсолютное имя файла, например "F:\\Folder\\file.html"
 * @param aSelector (2) -- селектор типа ThSelA
 * @returns {int} -1 при неполадках
 */
function yg54g_Storages_html_isConsistEm(aThFiNm111, aSelector) {
    var m1 = null;

    //преобразование селектора в массив
    var arS = yg54g_Strings_html_convertSr(aSelector);
    var tag = arS[0];
    var id_class = arS[1];
    var name = arS[2];

    //получение файла в виде строки
    var fiSt = yg54g_Storages_readFi_B(m1, aThFiNm111, yg54g_Storages_getFileSystemObject(m1));
    if (!fiSt) {
        return -1;
    }
    if (fiSt.length < 1) {
        return 0;
    }

    //шаблон регулярного выражения
    var rx = new RegExp("\\<\\s{0,}"
    + tag + "\\s{1,}.{0,}?" + id_class + "\\s{0,}=\\s{0,}[\"']{0,}"
    + name + "(?:[\"'\\s][\\s\\S]{0,}?\\>|\\>)", "igm");
    var res = fiSt.match(rx);
    if (res) {
        return res.length;
    }

    return 0;
}


/**
 * Ищет в файле (1) первый элемент с селектором (2) и в зависимости от модификатора (4) выполняет вставку до, после и т.д.
 * @param aThFiNm111 {string} (1) -- абсолютное имя файла, например "F:\\Folder\\file.html"
 * @param aEmSr (2) -- селектор опорного элемента, например "div#name" или "div.name"
 * @param aEmHtml (3) -- добавляемый элемент, например "<span>ttt<span>"
 * @param aMod (4) --
 * <b>"p_append"</b> для .append (добавления в конец);
 * <b>"p_prepend"</b> для .prepend (добавления в начало);
 * <b>"p_after"</b> для .after (добавления сразу после);
 * <b>"p_before"</b> для .before (добавления перед)
 * @returns {int} 2 - если успешно, 0 - при неудачах
 */
function yg54g_Storages_html_addEmIntoFi(aThFiNm111, aEmSr, aEmHtml, aMod) {
    var m1 = null;

    if (aMod !== "p_append" && aMod !== "p_prepend" && aMod !== "p_after" && aMod !== "p_before") {
        return 0;
    }

    //файл в виде строки
    var fiSt = yg54g_Storages_readFi_B(m1, aThFiNm111, yg54g_Storages_getFileSystemObject(m1));
    if (!fiSt) {
        return 0;
    }

    //обновление html-строки
    var newSt = yg54g_Strings_html_addEmAToEmB(fiSt, aEmHtml, aEmSr, aMod);
    if (!newSt) {
        return 0;
    }

    //запись обновленной строки обратно в файл
    var res = yg54g_Storages_rpFi(m1, aThFiNm111, newSt, yg54g_Storages_getFileSystemObject(m1));
    if (res > 1) {
        return 2;
    }

    return 0;

}


/**
 * Создает html-элемент на базе селектора (1)
 * @param aSelector (1) -- селектор, например "div#name" или "div.name" (селектор должен быть именно таким трехзвенным)
 * @returns {string} например <div id="name"></div> или <div class="name"></div>
 */
function yg54g_Strings_html_createEmFromSelector(aSelector) {
    var se = yg54g_Strings_html_convertSr(aSelector);
    var res = '<' + se[0] + ' ' + se[1] + '="' + se[2] + '"></' + se[0] + '>';
    return res;
}


/**
 * Ищет в html-строке (1) элемент (3) добавляет html-строку (2) в зависимости от
 * модификатора (4). Возвращает новую строку
 * @param aHtml (1) -- html-строка
 * @param aEmA (2) -- html-строка для добавления, например "&lt;div>ttt</div>"
 * @param aEmBSr (3) -- селектор опорного элемента,
 * например "div#name" или "div.class"
 * @param aMod (4) -- "p_append" для .append (добавления в конец); "p_prepend" для .prepend (добавления в начало);
 * "p_after" для .after (добавления сразу после); "p_before" для .before (добавления перед)
 * @returns {string} новую строку или "" при неудачах
 */
function yg54g_Strings_html_addEmAToEmB(aHtml, aEmA, aEmBSr, aMod) {
    //извлечение опорного элемента
    var tagStrong = yg54g_Strings_html_getTg(aHtml, aEmBSr);
    if (tagStrong.length < 1) {
        return "";
    }

    //извлечение этого же элемента, но в причесанном виде, формат Jq-Oj
    var jTagDress = yg54g_Strings_html_getTgJq(aHtml, aEmBSr);

    var udTag = "";
    if (aMod === "p_append") {
        udTag = jTagDress.append(aEmA).get(0).outerHTML;
    }
    if (aMod === "p_prepend") {
        udTag = jTagDress.prepend(aEmA).get(0).outerHTML;
    }
    if (aMod === "p_after") {
        var parent = $('<div></div>');
        $(jTagDress).appendTo(parent);
        $(aEmA).appendTo(parent);
        udTag = parent.html();
    }
    if (aMod === "p_before") {
        var parent = $('<div></div>');
        $(aEmA).appendTo(parent);
        $(jTagDress).appendTo(parent);
        udTag = parent.html();
    }

    var newSt = aHtml.replace(tagStrong, udTag);

    return newSt;
}

/**
 * Извлечение из (1) outerHTML первого тега (2) удовлетворяющего селектору (3).
 * Опции:
 * А) извлекается только первый встретившийся тег.
 * B) {ОТЛИЧИЕ ОТ A} Извлечение идет НЕ строго в таком виде в каком тег
 * содержится в (1) - испльзуется jQuery который выполняет "причесывание".
 * C) Теги (2) могут быть сложенными друг в друга.
 * @param aSt (1) -- строка из которой извлекается тег
 * @param aSelector (2) -- селектор, например "div#name" или "div.class"
 * @returns {jQuery} {ОТЛИЧИЕ ОТ А} jQuery объект
 */
function yg54g_Strings_html_getTgJq(aSt, aSelector) {
    //вспомогательный оберточный элемент
    var wrap = $('<div></div>');
    //"скармливание" нашей строки
    wrap.html(aSt);

    //извлечение нужного нам элемента, по селектору, в контексте wrap
    var res = $(aSelector, wrap).eq(0);
    return res;
}


/**
 * Возвращает ThHtmlIdPar на базе селектора
 * @param aSelector (1) -- селектор типа ThSelA
 * вместо # и . ничего другого быть не может
 * @returns {array} массив ThHtmlIdPar, например ["div", "id", "nameId"]
 */
function yg54g_Strings_html_convertSr(aSelector) {
    //var rx = new RegExp("\\s*([\\.#])(\\S+)", "i");
    var rx = new RegExp("(.{0,})([\\.#])(.{0,})", "i");
    var match = rx.exec(aSelector);
    //: ["div.nameClass", "div", ".", "nameClass"]
    //
    var a = match[2];
    if (a === ".") {
        a = "class";
    }
    if (a === "#") {
        a = "id";
    }
    //
    var b = match[3];
    var c = match[1];

    //формирование выходного массива
    var arRes = [];
    arRes.push(c);
    arRes.push(a);
    arRes.push(b);

    return arRes;
}


/**
 * Возвращает ThHtmlIdPar на базе селектора. Отличается от А только тем что возвращает в виде объекта, а не массива;
 * также тем, что селектор может быть типа ThSelC
 * @param aSelector (1) -- селектор типа ThSelС
 * вместо # и . ничего другого быть не может
 * @returns {object} объект ThHtmlIdPar, например {tag: "div", comma: "id", name: "nameId"}
 */
function yg54g_Strings_html_convertSr_B(aSelector) {
    //var rx = new RegExp("\\s*([\\.#])(\\S+)", "i");
    var rx = new RegExp("(.{0,})([\\.#])(.{0,})", "i");
    var match = rx.exec(aSelector);
    //: ["div.nameClass", "div", ".", "nameClass"]
    //
    var name = "", comma = "", tag = "";
    if (match) {
        name = match[2];
        if (name === ".") {
            name = "class";
        }
        if (name === "#") {
            name = "id";
        }
        //
        comma = match[3];
        tag = match[1];
    } else {
        if (aSelector.length > 0) {
            tag = aSelector;
        }
    }

    //формирование выходного объекта
    var ojRes = {tag: "", comma: "", name: ""};
    ojRes.tag = tag;
    ojRes.comma = name;
    ojRes.name = comma;

    return ojRes;
}


/**
 * Возвращает массив с объектами содержащими результаты поиска в файлах (1).
 * @param aFiNms (1) -- массив абсолютных имен ThFiNm111 файлов в которых будет осуществляться поиск, например [F://file1.html,
 * F://file2.html, ...]
 * @param aTagPrior (2) -- тег являющийся приоритетным. Результат для него является отдельным.
 * Например &lt;title&gt;text&lt;/title&gt;.
 * Если один раз был найден, то больше не ищется
 * @param aTxFind (3) -- искомый текст. Он ищется в тексте файла и в том числе в (2)
 * @param aConsiderCase {boolean} (4) -- TRUE чтобы учитывать регистр, иначе FALSE
 * @param aClassHg (5) -- совпадения будут обернуты в SPAN с данным именем класса
 * @returns array массив объектов
 * {
 *  matchTag: true/false есть ли совпадение в теге (2),
 *  txTag: содержимое тега (2) - вне зависимости было или нет совпадение,
 *  ThFiNm111: имя файла,
 *  arSts: массив строк имеющих совпадения
 * }
 */
function yg54g_Strings_getConsistText_D(aFiNms, aTagPrior, aTxFind, aConsiderCase, aClassHg) {
    var m1 = null;

    //FileSystemObject
    var fso = yg54g_Storages_getFileSystemObject(m1);

    //результирующий массив объектов
    var arRes = [];

    //проход по файлам
    for (var i = 0; i < aFiNms.length; i++) {

        var res = {
            matchTag: false,
            txTag: "",
            ThFiNm111: aFiNms[i],
            arSts: []
        };

        //1 - открываем файл только для чтения    //false - если файла нет, то он не создается
        var textStream = fso.OpenTextFile(aFiNms[i], 1, false, w38w);
        //пока не достигнут конец файла
        //noinspection JSUnresolvedVariable
        var mm1 = 0, mm2 = 0;
        while (!textStream.AtEndOfStream) {
            //очередная строка
            var line = textStream.ReadLine();

            //РАБОТА с тегом (2)
            if (!res.txTag) { //если тег (2) еще не был найден
                //содержимое тега (2) если он в строке есть, иначе ""
                res.txTag = yg54g_Strings_html_existTg(line, 'title');
                if (res.txTag) { //если тег в строке есть
                    //оборачивание в span совпадений (подсвечивание)
                    res.txTag = yg54g_Strings_html_rpForHg(mm1++ + '^' + m1, res.txTag, aTxFind, aClassHg, aConsiderCase);
                    //определение наличия совпадения в thTText тега (подсветка)
                    //если есть совпадение
                    if (yg54g_Strings_equalSts_A(line, aTxFind, aConsiderCase)) {
                        res.matchTag = true;
                    }
                    continue;
                }
            }

            //удаление HTML
            var line2 = line.replace(/<.*?>/ig, "");

            if (yg54g_Strings_equalSts_A(line2, aTxFind, aConsiderCase)) {
                //оборачивание в span совпадений
                line2 = yg54g_Strings_html_rpForHg(mm2++ + '^' + m1, line2, aTxFind, aClassHg, aConsiderCase);
                res.arSts.push(line2);
            }
        }
        textStream.Close();

        //добавление в результирующий массив объектов -- если в теге (2) что-то найдено или
        // в остальном тексте
        if (res.matchTag === true || res.arSts.length > 0) {
            arRes.push(res);
        }

    }

    return arRes;

}

/**
 * Определение наличия в (1) текста (2). Возврат объекта-описания в случае наличия поисковых совпадений, иначе возврат undefined
 * @param fiSt (1) -- строка в которой ищется текст (2)
 * @param aTxFind (2) -- искомый текст
 * @param aConsiderCase (3) -- учитывать или нет регистр
 * @param aFiNm (4) -- имя файла содержимое которого представлено в (1)
 * @returns объект {
 *  isTitle: true/false есть ли совпадение в теге title,
 *  txTitle: содержимое title - вне зависимости было или нет совпадение,
 *  isComm: true/false если ли совпадение в блоке #x44z_comm,
 *  txComm: содержимое блока #x44z_comm - вне зависимости есть совпадение или нет,
 *  txThxx: содержимое блока div#x41z_blocks
 *  ThFiNm111: имя файла,
 *  arSts: массив строк имеющих совпадения, из тела body
 * }
 */
function fn_getDescOj(m105m, fiSt, aTxFind, aConsiderCase, aFiNm) {

    var m1 = logif('--> fn_getDescOj', m105m);

    var r_txTitle = "";
    var r_isTitle = false;
    var r_txComm = "";
    var r_isComm = false;
    var r_txThxx = "";
    var r_ThFiNm111 = "";
    //
    var r_arSts = [];

    //извлечение с вырезанием блока title
    var ojTitle = yg54g_Strings_html_getTg_C(m1, fiSt, "title", "p_innerHTML");
    //обновление дальнейшей строки
    fiSt = ojTitle.newst;
    //console.log("fiSt after title=["+fiSt + "]");
    var txTitle = ojTitle.blockInner;
    //обработка
    txTitle = yg54g_Strings_delSpaces_B(txTitle);
    txTitle = yg54g_Strings_zipSpaces(txTitle);
    //
    if (txTitle) {
        r_txTitle = txTitle;
        //проверка совпадения
        r_isTitle = yg54g_Strings_equalSts_A(txTitle, aTxFind, aConsiderCase);
    }

    //извлечение с вырезанием блока #x44z_comm
    var ojComm = yg54g_Strings_html_getTg_C(m1, fiSt, "#x44z_comm", "p_innerHTML");
    //обновление дальнейшей строки
    fiSt = ojComm.newst;
    var txComm = ojComm.blockInner;
    //обработка
    txComm = yg54g_Strings_delSpaces(txComm);
    txComm = yg54g_Strings_zipSpaces(txComm);
    if (txComm) {
        r_txComm = txComm;
        //проверка совпадения
        r_isComm = yg54g_Strings_equalSts_A(txComm, aTxFind, aConsiderCase);
    }

    //извлечение с вырезанием блока div#x41z_blocks
    var ojThxx = yg54g_Strings_html_getTg_C(m1, fiSt, "div#x41z_blocks", "p_innerHTML");
    //обновление дальнейшей строки
    fiSt = ojThxx.newst;
    var txThxx = ojThxx.blockInner;
    //обработка
    txThxx = yg54g_Strings_delSpaces(txThxx);
    txThxx = yg54g_Strings_zipSpaces(txThxx);
    if (txThxx) {
        r_txThxx = txThxx;
    }

    //извлечение с вырезанием body
    var ojBody = yg54g_Strings_html_getTg_C(m1, fiSt, "body", "p_innerHTML");
    //обновление дальнейшей строки
    fiSt = ojBody.newst;
    var txBody = ojBody.blockInner;
    //обработка
    //txBody = yg54g_Strings_delSpaces(txBody);
    //txBody = yg54g_Strings_zipSpaces(txBody);
    //удаление HTML тегов
    txBody = yg54g_Strings_html_delHtmlTags(txBody);
    //
    //ФОРМИРОВАНИЕ массива match-строк из body
    //"убиваем" спецсимволы
    var bTxFind = yg54g_Strings_dismissRegexpSymbols(m1, aTxFind);
    //
    var re3 = new RegExp("^.*" + bTxFind + ".*$", (aConsiderCase) ? 'gm' : 'gim');
    var ex;
    while (ex = re3.exec(txBody)) {
        r_arSts.push(yg54g_Strings_delSpaces_B(ex[0]));
    }

    //формирование объекта-результата
    var res;
    if (r_isTitle || r_isComm || r_arSts.length > 0) {
        //конструктор объекта
        res = {
            isTitle: r_isTitle,
            txTitle: r_txTitle,
            isComm: r_isComm,
            txComm: r_txComm,
            txThxx: r_txThxx,
            ThFiNm111: aFiNm,
            arSts: r_arSts
        };
    }

    return res;
}


/**
 * Возвращает массив с объектами содержащими результаты поиска в файлах (1).
 *
 * @param aFiNms (1) -- массив абсолютных имен ThFiNm111 файлов в которых будет осуществляться поиск, например [F://file1.html,
 * F://file2.html, ...]
 * @param aTxFind (2) -- искомый текст. Он ищется в тексте файла и в том числе в (2)
 * @param aConsiderCase {boolean} (3) -- TRUE чтобы учитывать регистр, иначе FALSE
 * @returns {array} массив объектов
 * {
 *  isTitle: true/false есть ли совпадение в теге title,
 *  txTitle: содержимое title - вне зависимости было или нет совпадение,
 *  isComm: true/false если ли совпадение в блоке #x44z_comm,
 *  txComm: содержимое блока #x44z_comm - вне зависимости есть совпадение или нет,
 *  txThxx: содержимое блока div#x41z_blocks
 *  ThFiNm111: имя файла,
 *  arSts: массив строк имеющих совпадения из тела body
 * }
 */
function yx42z_getConsistText(m105m, aFiNms, aTxFind, aConsiderCase) {
    var m1 = logif('--> yx42z_getConsistText', m105m);

    //FileSystemObject
    var fso;
    if (!$('#x51h').prop('checked')) {
        fso = yg54g_Storages_getFileSystemObject(m1);
    }

    //результирующий массив объектов
    var arRes = [];

    //проход по файлам
    //aFiNms.length = 10;
    logif2('-- цикл по файлам /внутри yx42z_getConsistText/');
    for (var i = 0; i < aFiNms.length; i++) {

        //получение содержимого файла
        var fiSt = '';
        // если стоит галка "использовать технику m104m"
        if ($('#x51h').prop('checked')) {
            var fe = aFiNms[i];

            var linda = 'file:///' + fe;

            $.ajax({
                url: linda, success: function (data) {
                    //содержимое страницы
                    fiSt = data;
                }, dataType: 'html'
            });

        } else {
            fiSt = yg54g_Storages_readFi_B(i + '^' + m1, aFiNms[i], fso);
        }

        //проверка наличия поискового совпадения
        // и формирование объекта-описания совпадения
        var res = fn_getDescOj(i + '^' + m1, fiSt, aTxFind, aConsiderCase, aFiNms[i]);

        //добавление объекта-резульата в массив объектов-результатов
        if (res) {
            arRes.push(res);
        }
    }
    logif2('-- циклов = ' + i + ' /внутри yx42z_getConsistText/');

    return arRes;

}


/**
 * Удаляет все теги оставляя только текст
 * @param aSt (1) -- строки из которой нужно удалить теги
 * @returns {string] строка без тегов
 */
function yg54g_Strings_html_delHtmlTags(aSt) {
    return aSt.replace(/<.*?>/ig, "");
}


/**
 * Извлечение из (1) outerHTML или innerHTML первого тега удовлетворяющего селектору (2).
 * Возвращает объект формата {newst: строка (1) без блока (2), block: outerHTML или innerHTML блока (2)}
 * Опции:
 * А) извлекается только первый встретившийся тег.
 * B) Извлечение идет строго в таком виде в каком тег
 * содержится в (1) - jQuery не используется.
 * C) ThTTag (2) могут быть вложенными друг в друга.
 * <b>ОТЛИЧИЯ ОТ А:</b>
 * 1) возвращает и искомый блок и исходную строку без данного блока
 * @param aSt (1) -- строка из которой извлекается тег
 * @param aSelector (2) -- селектор типа ThSelA, например "div#name" или "div.class"
 * @param aMod (3) -- "p_innerHTML" или "p_outerHTML"* по умолчанию (* или что угодно)
 * @returns {object} при нештате возвращает объект с пустыми строками, например {newst: "", block: ""}
 */
function yg54g_Strings_html_getTg_B(aThFiSt, aSr, aMod) {
    //результирующий объект
    var res = {newst: "", block: ""};

    //преобразование селектора в ThHtmlIdPar
    var arSel = yg54g_Strings_html_convertSr(aSr);
    //:["div", "#", "name"]
    //
    var tag = arSel[0];
    var id_class = arSel[1];
    var name = arSel[2];

    //первое получение
    //: \<\s*tag\s+[^\<\>]*?class\s*=\s*"*'*name(?:\>|[\s"'][^\<\>]*?\>)[\s\S]*?\<\s*\/\s*tag\s*\>
    var sRx = "\\<\\s*" + tag + "\\s+[^\\<\\>]*?" + id_class + "\\s*=\\s*\"*'*" + name
        + "(?:\\>|[\\s\"'][^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag + "\\s*\\>";
    var rx1 = new RegExp(sRx, "gim");

    //используется техника m85m
    var ex;
    while (ex = rx1.exec(aThFiSt)) {
        //:m84m140422185300

        ex = ex[0];

        //определение количества открывающих тегов в отобранном
        var rx2 = new RegExp("\\<\\s{0,}" + arSel[0] + "[\\s\\>]{1,}", "gim");
        //количество совпадений
        var ctOpenTags = ex.match(rx2).length;

        //определение количества закрывающих тегов в отобранном
        var rx3 = new RegExp("\\<\\s{0,}/" + arSel[0] + "\\s{0,}\\>", "igm");
        var ctCloseTags = ex.match(rx3).length;

        if (ctOpenTags !== ctCloseTags) {
            //рег.выр. закрывающего тега
            var rxAdding = "[\\s\\S]{0,}?\\<\\s{0,}/\\s{0,}" + arSel[0] + "\\s{0,}\\>";
            sRx += rxAdding;
            var rx1 = new RegExp(sRx, "gim");
        } else {
            break;
        }
    }

    if (ex) {
        aThFiSt = aThFiSt.replace(ex, "");

        res.newst = aThFiSt;
        res.block = ex;
    }

    return res;
}

/**
 * Извлечение из (1) outerHTML или innerHTML первого тега удовлетворяющего селектору (2).
 * Возвращает объект формата
 * {
 * newst: строка (1) без блока (2),
 * blockOuter: outerHTML блока (2),
 * blockInner: innerHTML блока (2)
 * }
 * Опции:
 * А) извлекается только первый встретившийся тег.
 * B) Извлечение идет строго в таком виде в каком тег
 * содержится в (1) - jQuery не используется.
 * C) ThTTag (2) могут быть вложенными друг в друга.
 * <b>ОТЛИЧИЯ ОТ А:</b>
 * 1) возвращает и искомый блок и исходную строку без данного блока
 * @param aSt (1) -- строка из которой извлекается тег
 * @param aSelector (2) -- селектор типа ThSelC, например "#name" или "div"
 * @param aMod (3) -- "p_innerHTML" или "p_outerHTML"* по умолчанию (* или что угодно)
 * @returns {object} если блок не находит, то возвращает объект типа {newst: "$исходная строка aThFiSt$", blockOuter: "", blockInner: ""}
 */
function yg54g_Strings_html_getTg_C(m105m, aThFiSt, aSr, aMod) { //TODO обновить в библиотеке

    var m1 = logif('--> yg54g_Strings_html_getTg_C', m105m);

    //результирующий объект
    var res = {newst: "", blockOuter: "", blockInner: ""};

    //разбивка селектора
    var ojSr = yg54g_Strings_html_convertSr_B(aSr);

    var thRxStbb = yg54g_Strings_html_SrToRx(aSr);
    var rx1 = new RegExp(thRxStbb, "gim");

    //используется техника m85m (циклическое добавление закрывающей конструкции (тега))
    var ex;
    var ct = 1;
    var matchSt;
    while (ex = rx1.exec(aThFiSt)) {
        //:m84m140422185300

        matchSt = ex[0];

        var xTag = ojSr.tag;
        //для случая когда в селекторе не указан тег
        if (ex[1]) {
            xTag = ex[1];
        }

        //определение количества открывающих тегов в отобранном
        var rx2 = new RegExp("\\<\\s*" + xTag + "[\\s\\>]+", "gim");
        //количество совпадений
        var ctOpenTags = matchSt.match(rx2).length;

        //определение количества закрывающих тегов в отобранном
        var rx3 = new RegExp("\\<\\s{0,}/" + xTag + "\\s{0,}\\>", "igm");
        var ctCloseTags = matchSt.match(rx3).length;

        if (ctOpenTags !== ctCloseTags) {
            //строка для RegExp с дополнительной закрывающей конструкцией на конце
            var newRx = yg54g_Strings_html_SrToRx_B(aSr, ct);

            var rx1 = new RegExp(newRx, "gim");
            ct++;
        } else {
            break;
        }
    }

    if (matchSt) {
        bThFiSt = aThFiSt.replace(matchSt, "");

        res.newst = bThFiSt;
        res.blockOuter = matchSt;
        if (aMod === "p_innerHTML") {
            //выделяется все что внутри parent-конструкции <x>..</x>
            var regex = new RegExp("^\\<[\\s\\S]*?\\>([\\s\\S]*)\\r*\\n*\\<[\\s\\S]*?\\>$", "i");
            var ex = regex.exec(matchSt);
            if (ex) {
                res.blockInner = ex[1];
            }
        }
    } else {
        res.newst = aThFiSt;
    }

    return res;
}


/**
 * Извлечение из (1) outerHTML первого тега удовлетворяющего селектору (2).
 * Опции:
 * А) извлекается только первый встретившийся тег.
 * B) Извлечение идет строго в таком виде в каком тег
 * содержится в (1) - jQuery не используется.
 * C) ThTTag (2) могут быть вложенными друг в друга.
 * @param aSt (1) -- строка из которой извлекается тег
 * @param aSelector (2) -- селектор типа ThSelA, например "div#name" или "div.class"
 * @returns {string} "" при отсутсвии тега и различных неудачах
 */
function yg54g_Strings_html_getTg(aSt, aSelector) {
    //преобразование селектора в ThHtmlIdPar
    var arSel = yg54g_Strings_html_convertSr(aSelector);
    //:["div", "#", "name"]

    var tag = arSel[0];
    var id_class = arSel[1];
    var name = arSel[2];

    //первое получение
    //: \<\s*tag\s+[^\<\>]*?class\s*=\s*"*'*name(?:\>|[\s"'][^\<\>]*?\>)[\s\S]*?\<\s*\/\s*tag\s*\>
    var sRx = "\\<\\s*" + tag + "\\s+[^\\<\\>]*?" + id_class + "\\s*=\\s*\"*'*" + name
        + "(?:\\>|[\\s\"'][^\\<\\>]*?\\>)[\\s\\S]*?\\<\\s*/\\s*" + tag + "\\s*\\>";
    var rx1 = new RegExp(sRx, "gim");

    var ex;
    while (ex = rx1.exec(aSt)) {
        //:m84m140422185300

        ex = ex[0];

        //определение количества открывающих тегов в отобранном
        var rx2 = new RegExp("\\<\\s{0,}" + arSel[0] + "[\\s\\>]{1,}", "gim");
        //количество совпадений
        var ctOpenTags = ex.match(rx2).length;

        //определение количества закрывающих тегов
        var rx3 = new RegExp("\\<\\s{0,}/" + arSel[0] + "\\s{0,}\\>", "igm");
        var ctCloseTags = ex.match(rx3).length;

        if (ctOpenTags !== ctCloseTags) {
            //рег.выр. закрывающего тега
            var rxAdding = "[\\s\\S]{0,}?\\<\\s{0,}/\\s{0,}" + arSel[0] + "\\s{0,}\\>";
            sRx += rxAdding;
            var rx1 = new RegExp(sRx, "gim");
        } else {
            break;
        }
    }


    return ex;
}


/**
 * TRUE если aSt2 содержится в aSt1 1+ раз. Иначе FALSE
 * @param aSt1 {string} (1) -- строка 1, например "aaBBccDD"
 * @param aSt2 {string} (2) -- строка 2, например "Вс"
 * @param aConsiderCase {boolean} (3) -- если TRUE то регистр учитывается
 */
function yg54g_Strings_equalSts_A(aSt1, aSt2, aConsiderCase) {
    //учет/неучет регистра
    if (aConsiderCase !== true) {
        aSt1 = aSt1.toLowerCase();
        aSt2 = aSt2.toLowerCase();
    }
    //если содержит
    if (aSt1.indexOf(aSt2) !== -1) {
        return true;
    }
    return false;
}

/**
 * Проверяет наличие в строке ThTag c ThTTag == (2). Если отсутствует, то возвращает пустую строку "",
 * если есть, то возвращает ThTText первого найденного соответствия.
 * @param aSt (1) -- строка которая проверяется на наличие (2)
 * @param aTag (2) -- ThTTag, например "title"
 * @returns string например если (1) == <title>TTT</title> то вернет "TTT"
 */
function yg54g_Strings_html_existTg(aSt, aTag) {
    var res = "";
    var rx = new RegExp("\\<\\s{0,}" + aTag + "(?:\\s{1,}[^\\<\\>]{0,}?\\>|\\>)([^\\<\\>]{0,})\\<\\s{0,}/\\s{0,}" + aTag + "\\s{0,}\\>", "im");
    var r = rx.exec(aSt);
    if (r !== null) {
        res = r[1];
    }

    return res;
}

/**
 * Проверяет наличие в строке ThTag c ThTTag == (2). Если отсутствует, то возвращает пустую строку "",
 * если есть, то возвращает ThTText первого найденного соответствия.
 * Отличается от А только тем что используется jQuery.
 * @param aSt (1) -- строка которая проверяется на наличие (2)
 * @param aTag (2) -- ThTTag, например "title"
 * @returns string например если (1) == "<title>TTT</title>" то вернет "TTT"
 */
function yg54g_Strings_html_existTg_B(aSt, aTag) {

    var bSt = '<br>' + aSt;
    var res = $(bSt).filter(aTag).text();
    return res;

}

/**
 * Подсветка в тексте (1) текста (2) если он там есть. Подсветка выполняется
 * за счет оборачивания в блок SPAN с class==(3)
 *
 * Пример: yg54g_Strings_html_rpForHg("tttAAtttaattt", "AA", "BB", "ignoreCase"), вернет строку
 * "ttt<span class=BB>AA</span>ttt<span class=BB>aa</span>ttt"
 *
 * @param aText (1) -- текст в котором ищется текст (2)
 * @param aFind (2) -- текст который ищется с тексте (1)
 * return подсвеченный текст или исходный текст
 * @param aClassNm (3) -- класс span
 * @param aMode (4) -- если "ignoreCase" или FALSE то регистр не учитывается, при любом другом
 * значении - учитывается
 * @returns {string] строка с выполненными заменами, или исходная строка если ничего не заменялось
 */
function yg54g_Strings_html_rpForHg(m105m, aText, aFind, aClassNm, aMode) {

    var m1 = logif('--> yg54g_Strings_html_rpForHg', m105m);

    //"убиваем" спец. символы RegExp в искомом тексте
    var bFind = yg54g_Strings_dismissRegexpSymbols(m1, aFind);

    //учет/неучет регистра
    var cases = "g";
    if (aMode == "ignoreCase" || aMode === false) {
        cases = "ig";
    }

    //подсветка
    var re = new RegExp(bFind, cases);
    var ret = aText.replace(re, '<span class="' + aClassNm + '">$&</span>');

    return ret;
}

/**
 * Подсветка в тексте (1) текста (2) если он там есть. Подсветка выполняется
 * за счет оборачивания в блок SPAN с class==(3). Отличает от А тем, что если замен не проиводилось,
 * то возвращается пустая строка
 *
 * Пример: yg54g_Strings_html_rpForHg("tttAAtttaattt", "AA", "BB", "ignoreCase"), вернет строку
 * "ttt<span class=BB>AA</span>ttt<span class=BB>aa</span>ttt"
 *
 * @param aText (1) -- текст в котором ищется текст (2)
 * @param aFind (2) -- текст который ищется с тексте (1)
 * return подсвеченный текст или исходный текст
 * @param aClassNm (3) -- класс span
 * @param aMode (4) -- если "ignoreCase" или FALSE то регистр не учитывается, при любом другом
 * значении - учитывается
 * @returns {string] строка с выполненными заменами, или исходная строка если ничего не заменялось
 */
function yg54g_Strings_html_rpForHg_B(aText, aFind, aClassNm, aMode) {
    var m1 = null;

    //"убиваем" спец. символы RegExp в искомом тексте
    var bFind = yg54g_Strings_dismissRegexpSymbols(m1, aFind);

    //учет/неучет регистра
    var cases = "g";
    if (aMode == "ignoreCase" || aMode === false) {
        cases = "ig";
    }

    var ret = "";

    //подсветка
    var re = new RegExp(bFind, cases);
    if (re.test(aText)) {
        ret = aText.replace(re, '<span class="' + aClassNm + '">$&</span>');
    }

    return ret;
}


/**
 * Возврат содержимого файла в виде строки с разделителями "\n"
 * @param aRelativeNmFi - относительное имя файла, например "_files\\testFile.txt" или "testFile.txt"
 * @return содержимое файла в виде строки с разделителями "\n"
 */
function yg54g_Storages_readFi(aRelativeNmFi) {
    var m1 = null;

    var fso = new ActiveXObject("Scripting.FileSystemObject"); //создаем объект файловой системы
    var f = fso.OpenTextFile(this.yg54g_Storages_getPaFd(m1) + '\\' + aRelativeNmFi, 1, false, w38w);
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
 * Возвращает TRUE если файл (1) существует
 * @param aThFiNm111 (1) -- абсолютное имя файла, например "F:\\Folder\\file.html"
 * @param aFso (2) -- объект файловой системы, например через new ActiveXObject("Scripting.FileSystemObject");
 * @returns {boolean} null при неполадках
 */
function yg54g_Storages_isFiExist(aThFiNm111, aFso) {
    if (aThFiNm111 === null || aThFiNm111 === undefined || aThFiNm111.length < 1) {
        return null;
    }
    if (aFso === null || aFso == undefined) {
        return null;
    }

    var ret = aFso.FileExists(aThFiNm111);
    return ret;
}

/**
 * Возврат содержимого файла в виде строки с разделителями "\n".
 * Отличается от А тем что (1) это абсолютный путь, и что получает ActiveXObject
 * @param aThFiNm111 (1) -- абсолютное имя файла, например "F:\\folder\\_files\\testFile.txt"
 * @param aFso (2) -- объект файловой системы, например через new ActiveXObject("Scripting.FileSystemObject");
 * @returns {string} содержимое файла в виде строки с разделителями "\n"; null - при неполадках (например при отсутствии файла)
 */
function yg54g_Storages_readFi_B(m105m, aThFiNm111, aFso) {
    var m1 = logif('--> yg54g_Storages_readFi_B', m105m);

    //проверка существования файла
    if (!yg54g_Storages_isFiExist(aThFiNm111, aFso)) {
        return null;
    }

    var textStream = aFso.OpenTextFile(aThFiNm111, 1, false, w38w);
    //up   1 - открываем файл только для чтения    //false - если файла нет, то он не создается
    var d2 = "";
    var n = "";
    //noinspection JSUnresolvedVariable
    while (!textStream.AtEndOfStream) {
        var d = textStream.ReadLine(); //считывание следующей строки
        d2 = d2 + n + d; //добавление новой строки к уже считанным строкам
        n = "\n";
    }
    textStream.Close();
    return d2;
}

/**
 * Возврат содержимого файла (1) в виде массива строк
 * @param nameFile (1) - относительное имя файла, например "_files\\testFile.txt" или "testFile.txt"
 * @return Array
 */
function yg54g_Storages_readFiAsAr(nameFile) {
    var m1 = null;

    var fso = new ActiveXObject("Scripting.FileSystemObject"); //создаем объект файловой системы
    var file = fso.OpenTextFile(this.yg54g_Storages_getPaFd(m1) + '\\' + nameFile, 1, false, w38w);
    //up   1 - открываем файл только для чтения    //false - если файла нет, то он не создается
    var array = [];
    //noinspection JSUnresolvedVariable
    while (!file.AtEndOfStream) {
        var string = file.ReadLine(); //считывание следующей строки
        array.push(string); //добавление новой строки к уже считанным строкам
    }
    file.Close();
    return array;
}

/**
 * Считывает файл (1), добавляет в конец каждо строки символы (2) и записывает все в новый файл (3)
 * @param aNameFile (1) -- относительное имя файла-источника, например "_files\\testFile.txt" или "testFile.txt"
 * @param aString (2) -- текст дописываемый к концу строки
 * @param aNameNewFile (3) -- относительное имя файла вывода, например "_files\\testFile.txt" или "testFile.txt"
 */
function yg54g_Storages_takeFile_AddEndString_saveFile(aNameFile, aString, aNameNewFile) {
    //получение массива строк
    var arrayString = this.yg54g_Storages_readFiAsAr(aNameFile);
    //добавление текста в конец строк
    for (var i = 0; i < arrayString.length; i++) {
        arrayString[i] = arrayString[i] + aString;
    }
    this.yg54g_Storages_saveToFile(aNameNewFile, arrayString);
}

/**
 * Запись массива строк (2) в файл (1)
 * @param aNameFile (1) -- относительное имя файла в который будет
 *            осуществляться запись, например "_files\\testFile.txt" или "testFile.txt"
 * @param aArray (2) -- массив строк
 * @param {boolean} true если успешно, иначе false
 */
function yg54g_Storages_saveToFile(aNameFile, aArray) {
    var m1 = null;

    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var thFiNm111 = this.yg54g_Storages_getPaFd(m1) + '\\' + aNameFile;
    //проверка существования файла
    var exist = yg54g_Storages_isFiExist(thFiNm111, fso);
    if (!exist) {
        console.log("(!) file [" + thFiNm111 + "] not exist");
        return false;
    }

    //2 - открываем файл для записи с нуля   //true - если файла нет то он создается
    var file = fso.OpenTextFile(thFiNm111, 2, true, w38w);
    for (var i = 0; i < aArray.length; i++) {
        file.WriteLine(aArray[i]);
    }
    file.Close();
    return true;
}

/**
 * Дописывает в конец файла (1) строку (2)
 *
 * @param stNameFile (1) -- относительное имя файла в который будет
 *            осуществляться запись, например "_files\\testFile.txt" или "testFile.txt"
 * @param stValue (2) -- текстовая строка которую нужно записать
 */
function yg54g_Storages_addToFile(stPathFile, stValue) { //TODO
    var ojFileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
    //8 - открытие для добавления; 1 - в кодировке Unicode
    var ojTextStream = ojFileSystemObject.OpenTextFile(stPathFile, 8, true, -1);
    ojTextStream.WriteLine(stValue);
    ojTextStream.Close();
}

/**
 * Возврат абсолютного имени сейчас отображаемой страницы
 * @return например "D:\\Working\\file.html"
 */
function yg54g_Storages_getPaFi() {
    var a = window.location.href;
    a = a.replace(/file:\/\/\//i, "").replace(/%20/g, " ").replace(/\//g, '\\\\');
    return a;
}


/**
 * Возврат абсолютного имени сейчас отображаемой страницы.
 * По результату ничем не отличается от yg54g_Storages_getPaFi
 * @return например "D:\\Working\\file.html"
 */
function yg54g_Storages_getPaFi_B() {
    //путь, пример - может быть так "/F:/Folder1/file.html" или даже так "/D:\Working\index.html"
    var pa = document.location.pathname;

    //преобразуем к правильному виду, пример "F:\\Folder1"
    pa = pa.replace(/[\/\\]/g, "\\\\");
    pa = pa.replace(/[\/\\]+/, "");

    return pa;
}

/**
 * Возвращает имя текущей страницы. Например: index.html
 */
function yg54g_Storages_nameCurrPage() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.GetFile(this.yg54g_Storages_getPaFi());
    //noinspection JSUnresolvedVariable
    return f.Name;
}

/**
 * Возвращает имя текущей страницы. Например: index.html.
 * Отличается от А и B тем что не использует ActiveX
 */
function yg54g_Storages_nameCurrPage_C() {
    //путь, пример - может быть так "/F:/Folder1/file.html" или даже так "/D:\Working\index.html"
    var pa = document.location.pathname;

    var re = /^(.*)[\\\/](.*?)$/;
    var ex = re.exec(pa);
    if (ex !== null) {
        pa = ex[2];
    }

    return pa;

}


/**
 * Возврат пути к папке в которой находится файл html который сейчас отображается
 * @return пример "F:\\Dropbox\\_Web\\wiki"
 */
function yg54g_Storages_getPaFd(m105m) {
    var m1 = logif('--> yg54g_Storages_getPaFd', m105m);

    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var t = fso.GetFile(this.yg54g_Storages_getPaFi());
    //noinspection JSUnresolvedVariable
    var p = t.ParentFolder.Path; //ParentFolder возвращает объект Folder являющийся путем к папке в
    // которой лежит файл, Path объект Folder превращает в обычный текст
    p = p.replace(/\\/g, '\\\\'); //приведение к правильному виду
    return p;
}

/**
 * Возврат пути к папке в которой находится файл html который сейчас отображается.
 * От yg54g_Storages_getPaFd отличается тем что не задействует ActiveX.
 * @return string например "F:\\Dropbox\\_Web\\wiki"
 */
function yg54g_Storages_getPaFd_B() {
    //путь, например "/F:/Folder1/file.html" или пример с работы "/D:\Working\index.html"
    var pa = document.location.pathname;

    //ПРЕОБРАЗУЕМ к правильному виду, например "F:\\Folder1"
    //удаление имени файла на конце
    var ix = pa.lastIndexOf("/");
    var ix2 = pa.lastIndexOf("\\");
    if (ix2 > ix) {
        ix = ix2;
    }
    pa = pa.substring(0, ix);
    //
    pa = pa.replace(/[\/\\]/g, "\\\\");
    pa = pa.replace(/[\/\\]+/, "");

    return pa;
}

/**
 * Возвращает короткое имя текущей страницы. Например: index
 */
function yg54g_Storages_nameCurrPage_B() {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.GetFile(this.yg54g_Storages_getPaFi());
    //noinspection JSUnresolvedVariable
    var name = f.Name;

    //удаление расшения
    name = name.replace(/\.[^\.]*?$/, "");

    return name;
}

/**
 * Возвращает массив имен файлов папки (1) - только файлов, без папок
 * @param stAznf {string} (1) -- абсолютное имя папки,
 *  например "D:\\Working\\Barannikov\\WORKS\\SaM-146\\Pilot\\Справка\\Site-testers\\11 0 1216-A"
 * @param nmMod {number} (2) -- модификатор:
 *   0: в возвращаемом массиве будут имена файлов включая расширения, например "[name1.html, name2.html, ..]"
 *   1: в возвращаемом массиве будут имена файлов без расширения, например "[name1, name2, ..]";
 *   2: в возвращаемом массиве будут имена файлов без расширения (name) и следом расширения (ext),
 *     например "[name1, ext1, name2, ext2, ..]"
 * @return {Array} массив с данными в зависимости от модификатора (2)
 *
 * Старые названия: yg54g_Storages_getNamesAllFilesOfDir
 */
function yg54g_Storages_getCrips(stAznf, nmMod) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var folder = fso.GetFolder(stAznf);
    //файлы папки
    //noinspection JSUnresolvedVariable
    var files = new Enumerator(folder.Files);
    //var s = "";
    var arr = new Array();

    for (; !files.atEnd(); files.moveNext()) {
        var name;
        var ext;
        //noinspection JSUnresolvedVariable
        name = files.item().Name;

        switch (nmMod) {
            case 1:
                //удаление расшения
                name = name.replace(/\.[^\.]*?$/, "");
                arr.push(name);
                break;
            case 2:
                //имя без расширения
                var nameNoExt = name.replace(/\.[^\.]*?$/, "");
                //расширение
                ext = name.replace(/.*\./, "");
                arr.push(nameNoExt);
                arr.push(ext);
                break;
            default:
                arr.push(name);
                break;
        }
    }
    return arr;
}

/**
 * Возвращает массив имен ([crip]s) файлов папки (1). Возвращены будут только имена удовлетворяющие шаблону (3).
 *
 * От А отличается наличием параметра (3) для отбора имен по шаблону, и доп. опцией 3 в (2)
 *
 * @param stAznf (1) -- имя папки в формате [], например "D:\\Справка\\Site-testers\\11 0 1216-A"
 * @param nmMod (2) -- модификатор:
 *   <b>если == 0</b>, то в возвращаемом массиве будут полные имена файлов (формат [dtof]), например "[name1.html, name2.html, ..]"
 *   <b>если == 1</b>, то в возвращаемом массиве будут имена файлов без расширения ([gazp]), например "[name1, name2, ..]";
 *   <b>если == 2</b>, то в возвращаемом массиве будут имена файлов без расширения (формат [gazp]) и следом расширения ([zaak])(ext),
 *     например "[name1, ext1, name2, ext2, ..]"
 *   <b>если == 3</b>, то в возвращаемом массиве будут абсолютные имена файлов (формат [vmgk]), например "[F:\\Work\\file1.html, ...]"
 * @param aRegExp (3) -- строка для регулярного выражения, например "^p_\\d+_p.html$"
 * @return array массив с именами файлов, формат зависит от (2)
 *
 * Старые названия: yg54g_Storages_getNamesAllFilesOfDir_B
 */
function yg54g_Storages_getCrips_B(stAznf, nmMod, aRegExp) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var folder = fso.GetFolder(stAznf);
    //файлы папки
    //noinspection JSUnresolvedVariable
    var files = new Enumerator(folder.Files);
    //var s = "";
    var arr = new Array();

    for (; !files.atEnd(); files.moveNext()) {
        var name;
        var ext;
        //имя файла (ThFiNm11)
        //noinspection JSUnresolvedVariable
        name = files.item().Name;

        switch (nmMod) {
            case 1: //ThFiNm10
                //удаление расшения
                name = name.replace(/\.[^\.]*?$/, "");

                //удовлетворяет шаблону?
                var r3 = new RegExp(aRegExp);
                var s3 = r3.exec(name);

                if (s3 !== null) {
                    arr.push(name);
                }

                break;
            case 2:
                //имя без расширения
                var nameNoExt = name.replace(/\.[^\.]*?$/, "");
                //расширение
                ext = name.replace(/.*\./, "");

                //удовлетворяет шаблону?
                var r3 = new RegExp(aRegExp);
                var s3 = r3.exec(name);

                if (s3 !== null) {
                    arr.push(nameNoExt);
                    arr.push(ext);
                }

                break;
            case 3:
                var r4 = new RegExp(aRegExp);
                if (r4.exec(name) !== null) {
                    arr.push(stAznf + "\\\\" + name);
                }
                break;
            default:
                //имя удовлетворяет шаблону?
                var r3 = new RegExp(aRegExp);
                var s3 = r3.exec(name);
                if (s3 !== null) {
                    arr.push(name);
                }
                break;
        }
    }
    return arr;
}

/**
 * Возвращение содержимого тега (2) расположенного в файле (1). Открывающий и закрывающий тег
 * должны быть в одной строке и пр. - см. в коде
 * @param aFullNameFile (1) -- полное имя файла в котором ищется тег (3), например "D:\\Working\\Barannikov\\_index_00.html"
 * @param aNameTag (2) -- имя тега, например "title"
 * @return "file does not exist" если файл (1) не существует;
 * "" если тег (2) отсутствует или его содержимое пустое
 */
function yg54g_Storages_getTagValue(aFullNameFile, aNameTag) {
    var ret = "^no title^";

    var fso = new ActiveXObject("Scripting.FileSystemObject");

    //проверка существования файла
    var e = fso.FileExists(aFullNameFile);
    if (!e) {
        return "^file does not exist^";
    }

    //открытие файла
    //1 - только для чтения, false - если файла нет то он не создается
    var file = fso.OpenTextFile(aFullNameFile, 1, false, w38w);

    //цикл по строкам файла
    //noinspection JSUnresolvedVariable
    while (!file.AtEndOfStream) {
        var str = file.ReadLine(); //считывание следующей строки

        var r = new RegExp("<" + aNameTag + ">(.*?)</" + aNameTag + ">", "i");
        var s = r.exec(str);

        if (s !== null) {
            file.Close();
            return s[1];
        }
    }
    file.Close();

    return ret;
}

/**
 * Возвращает из файла (1) тег (2) (первое вхождение).
 * Условием является что тег (2) содержит аттрибут (3) со значением (4) (строгое соответствие).
 * @param aRelativeNmFi (1) -- относительное имя файла, например "_files\\testFile.txt" или "testFile.txt"
 * @param aTag (2) -- имя тега, например "div"
 * @param aAttr (3) -- имя аттрибута, например "id"
 * @param aAttrValue (4) -- значение аттрибута, например "intersect"
 * @return например "<a href=page.html>page</html>"
 */
function yg54g_Storages_getTagValue_B(aRelativeNmFi, aTag, aAttr, aAttrValue) {

    //содержимое файла в виде строки
    var fiSt = this.yg54g_Storages_readFi(aRelativeNmFi);

    var re = new RegExp("(<.*?" + aTag + ".*?>)(.*?)(<.*?\\/" + aTag + ".*?>)", "igm");

    var s = re.exec(fiSt);
    if (s !== null) {
        var v = s.index;
        alert("v=" + v);
        var s1 = s[1];
        var s2 = s[2];
        var s3 = s[3];
        alert("s1=" + s1);
        alert("s2=" + s2);
        alert("s3=" + s3);
    }


}

/**
 * Возвращает TRUE если файл (2) содержит хотябы одну строку СОДЕРЖАЩУЮ текст (1)
 * @param aText (1) -- текст для поиска, например p_1_p.html
 * @param aFile (2) -- абсолютное имя файла, например D:\\Working\\Barannikov\\_index_00.html
 */
function yg54g_Storages_isConsistText(aText, aFile) {
    //объект файловой системы
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.OpenTextFile(aFile, 1, false, w38w);
    //up   1 - открываем файл только для чтения    //false - если файла нет, то он не создается
    //noinspection JSUnresolvedVariable
    while (!f.AtEndOfStream) {
        //считывание следующей строки
        var line = f.ReadLine();
        var ind = line.indexOf(aText);
        if (ind != -1) {
            f.Close();
            return true;
        }
    }
    f.Close();
    return false;
}
/**
 * От А отличается тем что требуется ПОЛНОЕ СОВПАДЕНИЕ строки файла и (1)
 *
 * @param aText (1) -- текст для поиска, например p_1_p.html
 * @param aFile (2) -- абсолютное имя файла, например D:\\Working\\Barannikov\\_index_00.html
 */
function yg54g_Storages_isConsistText_B(aText, aFile) {
    //объект файловой системы
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var f = fso.OpenTextFile(aFile, 1, false, w38w);
    //up   1 - открываем файл только для чтения    //false - если файла нет, то он не создается
    //noinspection JSUnresolvedVariable
    while (!f.AtEndOfStream) {
        //считывание следующей строки
        var line = f.ReadLine();
        if (line === aText) {
            f.Close();
            return true;
        }
    }
    f.Close();
    return false;
}

/**
 * Ищет в строке (1) тег с именем (2), первое вхождение.
 * @param aSt (1) -- строка в которой выполняется поиск
 * @param aTgNm (2) -- имя тега, например 'a'
 * @returns object объект описания парного тега (g54g_Type002) или null при нештате (если тег не найден и пр.)
 */
function yg54g_Strings_html_getTgTxOne_ByTgNm(aSt, aTgNm) {
    //g8g
    //http://regex101.com/r/vG1xR5/1
    var re = RegExp('<\\s*(' + aTgNm + ')(?:\\s+[^<>]*>|>)([^<>]*)(<\\s*\\/\\s*\\1\\s*>)', 'i');
    var m = re.exec(aSt);
    if (!m) return null;

    var oj = yg54g_Types_getType002();
    oj.ThTag = m[0];  //вся конструкция тега целиком
    oj.ThTTag = aTgNm; //имя тега
    oj.ThTText = m[0].substring(m[0].length - m[3].length - m[2].length, m[0].length - m[3].length);  //текст тега
    oj.ThTLeft = m[0].substring(0, m[0].length - m[3].length - m[2].length);
    oj.ThTRight = m[0].substring(m[0].length - m[3].length, m[0].length);
    oj.ThTIxLeS = m.index;  //индекс окрытия тега
    oj.ThTIxLeE = m.index + m[0].length - m[3].length - m[2].length; //индекс окончания окрывающей части тега
    oj.ThTIxRiS = m.index + m[0].length - m[3].length; //индекс начала закрывающей части тега
    oj.ThTIxRiE = m.index + m[0].length; //индекс конца тега

    return oj;
}

/**
 * Возврат содержимого файла в виде строки с разделителями "\n".
 * Отличается от B только тем что не требует в параметрах получения ActiveXObject
 * @param m105m (1)
 * @param aThFiNm111 (2) -- абсолютное имя файла (ThFiNmK11), например "F:\\folder\\_files\\testFile.txt"
 * @returns {string} содержимое файла в виде строки с разделителями "\n"; null - при неполадках (например при отсутствии файла)
 */
function yg54g_Storages_readFi_C(m105m, aThFiNm111) {
    var m1 = logif('--> yg54g_Storages_readFi_C', m105m);

    var fso = yg54g_Storages_getActiveXObjectFileSystem();

    return yg54g_Storages_readFi_B(m1, aThFiNm111, fso);
}

/**
 * ДУБЛЕР для yg54g_Storages_getFileSystemObject
 * @returns {ActiveXObject} new ActiveXObject("Scripting.FileSystemObject");
 */
function yg54g_Storages_getActiveXObjectFileSystem() {
    var m1 = null;
    return yg54g_Storages_getFileSystemObject(m1);
}


/**
 * Заменяет в строке (1) диапазоны указанные в (2) текстом указанным в (2).
 * @param aSt string (1) -- строка в которой выполняются замены, например 'aa11cc22ee'
 * @param aArOjs object (2) -- массив объектов. Объекты имеют формат {ixStart: , ixEnd: , stForRp: }, где ixStart - индекс начала диапазона цепочка символов которого заменяется, ixEnd - индекс конца диапазона цепочка символов которого заменяется, stForRp - текст которым заменяется цепочка символов. Диапазоны не должны пересекаться. ixStart должен только увеличиваться. Например [{ixStart: 2, ixEnd: 4, stForRp: 'bbb'}, {ixStart: 6, ixEnd: 8, stForRp: 'ddd'}]
 * @returns string строку с выполненными заменами или null при нештате, например 'aabbbccdddee'
 */
function yg54g_Strings_rpTxsDiaps(aSt, aArOjs) {
    if (!aSt || !aArOjs || aArOjs.length < 1) {
        return null;
    }

    if (aArOjs.length > 1) {
        //проверка что ixStart только увеличивается
        for (var i = 1; i < aArOjs.length; i++) {
            if (aArOjs[i].ixStart < aArOjs[i - 1].ixStart) {
                console.warn(':info: ixStart does not increase consistenty ! (yg54g_Strings_rpTxsDiaps)');
                return null;
            }
        }
        //проверка что ixStart next всегда больше или равен ixEnd prev
        for (var i = 1; i < aArOjs.length; i++) {
            if (aArOjs[i].ixStart < aArOjs[i - 1].ixEnd) {
                console.warn(':info: ixStart next < ixEnd prev ! (yg54g_Strings_rpTxsDiaps)');
                return null;
            }
        }
    }

    //провера что окончание диапазона всегда больше начала
    for (var i = 0; i < aArOjs.length; i++) {
        if (aArOjs[i].ixEnd < aArOjs[i].ixStart) {
            console.warn(':info: ixEnd > isStart ! (yg54g_Strings_rpTxsDiaps)');
            return null;
        }
    }

    var ret = '';
    var ar = [];
    var chIx = 0;
    for (var i = 0; i < aArOjs.length; i++) {
        ar.push(aSt.substring(chIx, aArOjs[i].ixStart));
        ar.push(aArOjs[i].stForRp);
        chIx = aArOjs[i].ixEnd;
    }

    //обработка "хвоста"
    if (aSt.length > aArOjs[aArOjs.length - 1].ixEnd) {
        ar.push(aSt.substring(aArOjs[aArOjs.length - 1].ixEnd));
    }

    return ar.join('');
}


/**
 * Возвращает объект описания парного тега
 * @returns yg54g_Type002
 */
function yg54g_Types_getType002() {
    return new yg54g_Type002();
}

/**
 * Объект описания парного тега
 */
function yg54g_Type002() {
    this.ThTag = undefined; //вся конструкция тега целиком, например '<tag>text</tag>'
    this.ThTTag = undefined; //имя тега, например 'tag'
    this.ThTLeft = undefined; //открывающая часть, например '<tag>'
    this.ThTRight = undefined; //закрывающая часть, например '</tag>'
    this.ThTText = undefined; //текст тега, например 'text'
    this.ThTIxLeS = undefined; //индекс окрытия тега, например '0'
    this.ThTIxLeE = undefined; //индекс окончания окрывающей части тега, например '5'
    this.ThTIxRiS = undefined; //индекс начала закрывающей части тега, например '9'
    this.ThTIxRiE = undefined; //индекс конца тега, например '15'
}

/**
 * Возвращает массив строк файла (2) которые содержат текст (1).
 * Массив будет пустым если таких строк в файле нет.
 * Поиск внутри тегов (служебная часть) не выполняется.
 * @param aText (1) -- текст для поиска, например p_1_p.html
 * @param aFile (2) -- абсолютное имя файла, например D:\\Working\\Barannikov\\_index_00.html
 */
function yg54g_Storages_getConsistText_B(aText, aFile) {
    var m1 = null;

    var res = new Array();

    //нижний регистр
    var textLC = aText.toLowerCase();

    //объект файловой системы
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    //1 - открываем файл только для чтения    //false - если файла нет, то он не создается
    var file = fso.OpenTextFile(aFile, 1, false, w38w);
    //пока не достигнут конец файла
    //noinspection JSUnresolvedVariable
    var mm1 = 0;
    while (!file.AtEndOfStream) {
        //считывание следующей строки
        var line = file.ReadLine();
        //нижний регистр
        var lineLC = line.toLowerCase();

        //удаление тегов
        line = line.replace(/<.*?>/igm, "");
        lineLC = lineLC.replace(/<.*?>/igm, "");

        //учет регистра
        var cases = 'i';
        if (yx7z_case) {
            cases = '';
        }

        //индекс первого вхождения
        var ix = -1;
        //если учитывать регистр
        if (yx7z_case) {
            ix = line.indexOf(aText);
        } else {
            ix = lineLC.indexOf(textLC);
        }

        //занесение строки в результирующий массив
        if (ix !== -1) {
            //ВЫДЕЛЕНИЕ найденного текста
            var txReg = aText + "";

            //"убивание" специальных-символов-рег.выражений которые могут быть в тесте поиска введенном пользователем
            //txReg = txReg.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, "\\$&");
            txReg = yg54g_Strings_dismissRegexpSymbols(mm1 + '^' + m1, txReg);

            var r2 = new RegExp(txReg, cases + 'g');
            line = line.replace(r2, "<span class=x42z_hg>$&</span>");

            res.push(line);
        }
    }
    file.Close();
    return res;
}

/**
 * Возвращает массив из 2-х массивов.
 *
 * 1-й массив - это массив из 1 или 0 элементов; элемент - это "текст" строки файла (2) если он содержит подстроку (1)
 * и находится внутри тега (3).
 *
 * Во втором массиве прочие строки файла (2) содержащие текст (1).
 *
 * Поиск внутри тегов (служебная часть) не выполняется.
 *
 * @param aText (1) -- текст для поиска, например "p_1_p.html"
 * @param aFile (2) -- абсолютное имя файла, например "D:\\Working\\Barannikov\\_index_00.html"
 * @param aTag (3) -- имя тега в котором ищется текст (1), например "title"
 * @param aCase (4) -- true/false - учитывать/не учитывать регистр
 */
function yg54g_Storages_getConsistText_C(aText, aFile, aTag, aCase) {
    var m1 = null;

    //1-й массив
    var res1 = [];
    //2-й массив
    var res2 = [];
    //основной массив
    var res = [res1, res2];

    //нижний регистр
    var bTextLC = aText.toLowerCase();

    //объект файловой системы
    var fso = new ActiveXObject("Scripting.FileSystemObject");

    //1 - открываем файл только для чтения    //false - если файла нет, то он не создается
    var file = fso.OpenTextFile(aFile, 1, false, w38w);
    //пока не достигнут конец файла
    //noinspection JSUnresolvedVariable
    var mm1 = 0;
    while (!file.AtEndOfStream) {
        //считывание следующей строки
        var line = file.ReadLine();
        //нижний регистр
        var lineLC = line.toLowerCase();

        //строка содержит тег (3)?
        var isConsistTag = (lineLC.indexOf("<" + aTag.toLowerCase()) == -1) ? false : true;

        //удаление HTML
        line = line.replace(/<.*?>/igm, "");
        lineLC = lineLC.replace(/<.*?>/igm, "");

        //учет регистра
        var cases = 'i';
        if (aCase) {
            cases = '';
        }

        //индекс первого вхождения
        var ix = -1;
        //если учитывать регистр
        if (aCase) {
            ix = line.indexOf(aText);
        } else {
            ix = lineLC.indexOf(bTextLC);
        }

        //занесение строки в результирующий массив
        if (ix !== -1) {
            //ВЫДЕЛЕНИЕ найденного текста
            var txReg = aText + "";

            //"убивание" специальных-символов-рег.выражений которые могут быть в тесте поиска введенном пользователем
            //txReg = txReg.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, "\\$&");
            txReg = yg54g_Strings_dismissRegexpSymbols(mm1 + '^' + m1, txReg);

            var r2 = new RegExp(txReg, cases + 'g');
            line = line.replace(r2, '<span style="color:red">$&</span>');

            //если это строка с тегом (3)
            if (isConsistTag) {
                res1.push(line);
            } else {
                res2.push(line);
            }
        }
    }
    file.Close();
    return res;
}


/**
 * Разбивает строку (1) по разделителю (2) превращая в массив строк и возвращая его
 * @param aString (1) -- строка для разбивки
 * @param aDiv (2) -- разделитель по которому идет разбивка на строки
 * @return Array
 */
function yg54g_Strings_stringToArray(aString, aDiv) {
    //удаление пробелов в начале
    aString = aString.replace(/^\s*/, "");
    //удаление пробелов в конце
    aString = aString.replace(/\s*$/, "");

    //добавление разделителя в начало если его нет
    var regExp1 = new RegExp("^" + aDiv);
    if (!regExp1.test(aString)) {
        aString = aDiv + aString;
    }
    //добавление разделителя в конец если его нет
    var regExp3 = new RegExp(aDiv + "$");
    if (!regExp3.test(aString)) {
        aString = aString + aDiv;
    }

    //получение массива строк
    var regExp = new RegExp(aDiv + ".*?" + "(?=" + aDiv + ")", "igm");
    var array = new Array();
    //получение массива строк
    array = aString.match(regExp);

    //удаление разделителей
    for (var i = 0; i < array.length; i++) {
        var regExp2 = new RegExp(aDiv, "ig");
        array[i] = array[i].replace(regExp2, "");
    }

    return array;
}

/**
 * Удаление пробелов в начале и конце
 * @param aString (1) -- строка
 * @return String Строка без пробелов в начале и конце
 */
function yg54g_Strings_delSpaces(aString) {
    aString = aString.replace(/^\s*/, "");
    aString = aString.replace(/\s*$/, "");
    return aString;
}

/**
 * Удаляет пробелы и переносы строк в начале и в конце
 * @param aSt (1) -- строка которую нужно обработать
 * @returns {string} строка без пробелов и переносов строк в начале и конце
 */
function yg54g_Strings_delSpaces_B(aSt) {

    //удаление пробелов и переносов в конце
    var re2 = new RegExp("[\\s\\r\\n]*$", "gi");
    bSt = aSt.replace(re2, "");

    //удаление пробелов и переносов в начале
    var re3 = new RegExp("^[\\s\\r\\n]*", "gi");
    cSt = bSt.replace(re3, "");

    return cSt;
}

/**
 * Заменяет все следующие друг за другом пробелы и переносы строк одним пробелом
 * @param aSt (1) -- строка у которой нужно "сжать" пробелы
 * @returns {string} строка со "сжатыми" пробелами
 */
function yg54g_Strings_zipSpaces(aSt) {
    return aSt.replace(/\s+/gm, " ");
}

/**
 * "убивание" специальных-символов-рег.выражений которые могут быть в
 * тесте поиска введенном пользователем - волняется их экранирование двумя обратными
 * слэшами, наприме, до "[[privet", после "\\[\\[privet"
 * @param aTx (1) -- текст который нужно изменить
 * @return String измененный текст
 */
function yg54g_Strings_dismissRegexpSymbols(m105m, aTx) {
    var m1 = logif('--> yg54g_Strings_dismissRegexpSymbols', m105m);

    return aTx.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, "\\$&");
}


/**
 * Вывод на страницу информации об exec
 * @param aRegExp (1) -- регулярное выражение, например /regexp/igm
 * @param aSt (2) -- строка к которой будет применен (1)
 * @param aComment (3) -- комментарий к данной печати, будет выведен первым
 */
function yg54g_Strings_printExec(aRegExp, aSt, aComment) {
    document.write('<br>');
    document.write('<br><xmp>===print exec, comment [' + aComment + ']===</xmp>');
    var c = 0;
    var ex;
    while (ex = aRegExp.exec(aSt)) {
        document.write('<br><xmp>===' + (++c) + '===</xmp>');
        document.write('<br><xmp>ex.length=[' + ex.length + ']</xmp>');
        for (var i = 0; i < ex.length; i++) {
            document.write('<br><xmp>ex[' + i + ']=[' + ex[i] + ']</xmp>');
        }
    }
}


/**
 * Вывод на страницу информации об exec. Отличается от А только тем что выводит в консоль.
 * @param aRegExp (1) -- регулярное выражение, например /regexp/igm
 * @param aSt (2) -- строка к которой будет применен (1)
 * @param aComment (3) -- комментарий к данной печати, будет выведен первым
 */
function yg54g_Strings_printExec_B(aRegExp, aSt, aComment) {
    console.log('');
    console.log('===start print exec, comment [' + aComment + ']===');
    var c = 0;
    var ex;
    while (ex = aRegExp.exec(aSt)) {
        console.log('===' + (++c) + '===');
        console.log('ex.length=[' + ex.length + ']');
        for (var i = 0; i < ex.length; i++) {
            console.log('ex[' + i + ']=[' + ex[i] + ']');
        }
    }
    console.log('===end print exec, comment [' + aComment + ']===');
}

/**
 * Ищет в строке (1) теги (2) типа ThTag (т.е. без вложенных тегов) и заменяет их на ThTText данных тегов.
 * Возвращает измененную строку
 * @param aSt (1) -- html-строка, например "<div><span>text</span></div>"
 * @param aTgNm (2) -- имя тега, например "span"
 * @returns {string} например "<div>text</div>"
 */
function yg54g_Strings_html_unwrapTg(aSt, aTgNm) {
    var rx = new RegExp("\\<\\s{0,}" + aTgNm + "(?:\\>|[^\\<\\>]{0,}\\>)([\\s\\S]{0,}?)\\<\\s{0,}/" + aTgNm + "\\s{0,}\\>", "igm");
    var res = aSt.replace(rx, "$1");
    return res;
}

/**
 * Класс. Для тестов
 */
function Test() {

    this.test1 = function () {
        var string = "io   ";
        var string1 = "iox   ";


        var regExp = new RegExp("^i");
        var bool = regExp.test(string);
        alert(bool);

    }

}


/**
 * Обновление внешнего вида блока пересчений
 */
function x41z_fn_udAp() {
    //если блок пересечений отсутствует на странице
    if (!$('div').is($x41z_blocks)) {
        return;
    }

    //добавление заголовка
    //проверка наличия
    var b = $($x41z_blocks + ' ' + $x41z_blocks_title).is($x41z_blocks_title);
    //если отсутствует - добавляем
    if (!b) {
        $('<div id="x41z_blocks_title">Пересечения</div>').prependTo($($x41z_blocks));
    }

    //ОБРАБОТКА ссылок-пересечений
    //оборачивание в div
    var $block = $('<div class="x41z_block"></div>');

    $($x41z_blocks + ' a').each(function () {
        //в блоке?
        var b = $(this).parent().is('.x41z_block');
        //если не в блоке
        if (!b) {
            //"оборачивание"
            $(this).wrap($block);
            var $parent2 = $(this).parent();

            //добавление кнопки удаления пересечения
            var $delXxz = $('<input type="button" value=" - " class="x41z_bt_del" />');
            //привязка обработчика
            //: см. http://ruseller.com/lessons.php?rub=32&id=700
            $($delXxz).bind("click", {}, x41z_fn_del);
            //
            $parent2.append($delXxz);
        }
    });

    /*
     $($x41z_blocks + ' a').wrap($block);
     //добавление кнопки удаления пересечения
     var $delXxz = $('<input type="button" value=" - " class="x41z_bt_del" />');
     //: см. http://ruseller.com/lessons.php?rub=32&id=700
     $($delXxz).bind("click", {}, x41z_fn_del);
     $('.x41z_block').append($delXxz);
     */
}

/**
 * Удаление отдельного пересечения
 * @param oj -- не используется
 * @returns
 */
function x41z_fn_del(oj) {
    //нажатая кнопка
    var $bt = $(this);
    var $pr = $bt.parent(':first');
    var ix = $pr.index();
    //удаление из блока пересечений
    $pr.remove();

    //физическое удаление пересечения из файла
    var rs = yg54g_Storages_html_delEmFromFi(yx21z_nmAbsCurrPg, "div" + $x41z_blocks, "a:eq(" + (ix - 1) + ")");
    if (!rs) {
        return;
    }


}

/**
 * Ищет в файле (1) элемент (2) и удаляет из него прямого потомка (3) расположенного в позиции указанной в
 * также в (3)
 * @param aThFiNm111 (1) -- абсолютное имя файла, например "F:\\Folder\\file.html"
 * @param aEmBaseSr (2) -- серектор типа ThSelA, например "div#name"
 * @param aEmDelSr (3) -- селектор (типа ThSelB) элемента который должен быть удален,
 * например ".aa:eq(1)" соответствует второму элементу класса aa
 * @param {int} 1 - если успешно, undefined при неудаче
 */
function yg54g_Storages_html_delEmFromFi(aThFiNm111, aEmBaseSr, aEmDelSr) {
    var m1 = null;

    //получение ThFiSt
    var fiSt = yg54g_Storages_readFi_B(m1, aThFiNm111, yg54g_Storages_getFileSystemObject(m1));
    if (!fiSt) {
        return;
    }

    //тег в виде строгого текста
    var tgStrong = yg54g_Strings_html_getTg(fiSt, aEmBaseSr);
    if (!tgStrong) {
        return;
    }

    var $tgDress = yg54g_Strings_html_getTgJq(fiSt, aEmBaseSr);
    var h1 = $tgDress.get(0).outerHTML;
    $(aEmDelSr, $tgDress).remove();
    var h2 = $tgDress.get(0).outerHTML;

    var newSt = fiSt.replace(tgStrong, h2);

    //обновление файла
    var rs = yg54g_Storages_rpFi(m1, aThFiNm111, newSt, yg54g_Storages_getFileSystemObject(m1));
    if (!rs) {
        return;
    }
    return 1;
}

/**
 * Сортировка массива (1) в лексографическом порядке и удаление дубликатов
 * @param aAr (1) -- массив, например ["a", "b", ..]
 * @param aMod (2) -- порядок сортировки, если не указано или =="p_up" или !=="p_down", то по возврастанию,
 * если =="down", то по убыванию
 * @returns array отсортированный массив без дубликатов
 */
function yg54g_Ars_removeDublicatesAaSort(aAr, aMod) {
    if (aAr.length < 2) {
        return aAr;
    }

    //сортировка
    var ar = yg54g_Ars_sort(aAr, aMod);

    var res = [];
    res.push(ar[0])
    for (var i = 1; i < ar.length; i++) {
        if (ar[i] !== ar[i - 1]) {
            res.push(ar[i]);
        }
    }

    return res;
}

/**
 * Сортировка массива (1) в лексографическом порядке
 * @param aAr (1) -- массив, например ["a", "b", ..]
 * @param aMod (2) -- порядок сортировки, если не указано или =="p_up" или !=="p_down", то по возврастанию,
 * если =="down", то по убыванию
 * @returns array отсортированный массив
 */
function yg54g_Ars_sort(aAr, aMod) {
    if (aMod == "p_down") {
        return aAr.sort(function (a, b) {
            if (String(a) > String(b))
                return -1;
            if (String(a) < String(b))
                return 1;
            return 0;

        });
    }
    return aAr.sort();
}

/**
 * Вывод информации (1) в лог если глоб. переменная yLogif == TRUE. РЕАЛИЗУЕТ ТЕХНИКУ m105m
 * @param aSt (1) -- строка для вывода
 * @param m105m (2) -- информация о том откуда вызван метод; a) если =null или т.п., то вывод в консоль не производится;
 *  б) если содержит одну или несолько управляющих последовательностей 'x^', где x>0 то также вывод в консоль не производится
 *  (это применяется чтобы из циклов вывести только один раз, когда x=0)
 */
function logif(aSt, m105m) { //TODO добавить в библиотеку
    //return;
    if (!yLogif) return;
    if (!m105m) return;

    var cycle = '';
    //препарирование на предмет меток цикла, для показа только если все метки = 0
    var firstCycle = false;
    var m;
    var re = new RegExp('(\\d+)\\^', 'g');
    while ((m = re.exec(m105m)) !== null) {
        if (m[1] != 0) {
            return;
        }
        firstCycle = true;
    }
    if (firstCycle) {
        cycle = '*cycle*';
    }

    console.log(yLogifPristavka + ' --> ' + aSt + ' ::from ' + cycle + m105m);
    return aSt + cycle;
}

function logif2(aSt) { //TODO добавить в библиотеку
    if (!yLogif) return;
    console.log(yLogifPristavka + ' ' + aSt);
    return aSt;
}


/*\
 |*|
 |*|  :: cookies.js ::
 |*|
 |*|  A complete cookies reader/writer framework with full unicode support.
 |*|
 |*|  Revision #1 - September 4, 2014
 |*|
 |*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 |*|  https://developer.mozilla.org/User:fusionchess
 |*|
 |*|  This framework is released under the GNU Public License, version 3 or later.
 |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
 |*|
 |*|  Syntaxes:
 |*|
 |*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
 |*|  * docCookies.getItem(name)
 |*|  * docCookies.removeItem(name[, path[, domain]])
 |*|  * docCookies.hasItem(name)
 |*|  * docCookies.keys()
 |*|
 \*/
var docCookies = {
    getItem: function (sKey) {
        if (!sKey) {
            return null;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        if (!sKey) {
            return false;
        }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

/**
 * Класс для работы с конфиг-файлом (find config)
 *
 */
var x52c = {
    /**
     * Получение JSON-строки всего конфиг-файла
     */
    getJSON: function (m105m) {
        var m1 = logif('--> x52c.getJSON', m105m);
        return yg54g_Storages_readFi_C(m1, stBedn + '\\' + x52p);
    }
    /**
     * Возвращает наибольшее число страницы (xnz) из пространства (2) (наибольшая цифра из PID диапазона (2))
     * @param aDiap (2) -- пространство имен страниц, возможные значения : "p", "t", "q"
     * @return number 0 если нет ни одного файла удовлетворяющего условиям
     */, ranges_getPIDMax: function (m105m, aDiap) {
        var m1 = logif('--> x52c.ranges_getPIDMax', m105m);

        //чтение содержимого конфиг-файла
        var fconf = yg54g_Storages_readFi_C(m1, stBedn + '\\' + x52p);
        //fconf = fconf.replace(/\n/g, '');
        //console.log("fconf=["+fconf+"]");

        var oj = JSON.parse(fconf);
        var val = oj.ranges[aDiap];

        return val;
    },
    /**
     * Обновление информации о PID после создания новой страницы
     * @param m105m
     * @param aLit (2) -- буква диапазона в котором была создана страница, например 'p'
     * @param aNumber (3) -- цифра PID созданной страницы, например '999'
     */
    ranges_udInfo: function (m105m, aLit, aNumber) {
        var m1 = logif('--> x52c.ranges_udInfo', m105m);

        //чтение содержимого конфиг-файла
        var fconf = yg54g_Storages_readFi_C(m1, stBedn + '\\' + x52p);
        var oj = JSON.parse(fconf);

        oj.ranges[aLit] = aNumber;
        oj.ranges['last_diap'] = aLit;

        //превращение объекта в строку
        var st = JSON.stringify(oj);

        //запись обратно в конфиг-файл
        yg54g_Storages_rpFi(m1, stBedn + '\\' + x52p, st, yg54g_Storages_getFileSystemObject(m1));

    }

}

/**
 * Класс для работы с PID
 */
var yPIDClass = {
    /**
     * Извлечение из PID (2) числа
     * @param m105m (1)
     * @param aPID (2) -- например 'p_1_p.html'
     * @returns например '1'
     */
    getPIDNumber: function (m105m, aPID) {
        var m1 = logif('--> yPIDClass.getPIDNumber', m105m);

        var m = /_(\d+)_/.exec(aPID);
        if (!m) console.warn('ошибка w40w');

        return m[1];
    },
    /**
     * Извлечение из PID (2) литеры диапазона
     * @param m105m (1)
     * @param aPID (2) -- например 'p_1_p.html'
     * @returns например 'p'
     */
    getPIDLit: function (m105m, aPID) {
        var m1 = logif('--> yPIDClass.getPIDLit', m105m);

        return aPID.substring(0, 1);
    }
}


/**
 * Работа с cookies
 * @type {{deleteAllCookies: deleteAllCookies}}
 */
var cook = {
    deleteAllCookies: function () { //удалить все cookies
        var keys = docCookies.keys();
        for (var i = 0; i < keys.length; i++) {
            docCookies.removeItem(keys[i]);
        }
        alert("Все куки удалены");
    }
};

/**
 * '#shapka' - Шапка страницы
 * @type {string}
 */
$shapka = '#shapka';
/**
 * '#podval' - Подвал страницы
 * @type {string}
 */
$podval = '#podval';
/**
 * '#x41z_blocks' - Блок пересечений
 * @type {string}
 */
$x41z_blocks = '#x41z_blocks';
/**
 * '#x41z_blocks_title' - Заголовок блока пересечений
 * @type {string}
 */
$x41z_blocks_title = '#x41z_blocks_title';
/**
 * Блок тегов
 * @type {string}
 */
$x41z_block_tags = '#x41z_block_tags';
/**
 * Файл конфигурации
 * @type {string}
 */
yx46z_config_fi = "_js\\x46z_config_fi.txt";
/**
 * Диапазон который последний раз был выбран при создании файла
 * @type {string}
 */
yx46z_key_last_diap = "x46z_last_diap";

/**
 * Бизнес-уровень
 */
var m80m_bus = function () {
    return {
        /**
         * Возвращает @имя-файла-статьи всех @статей в виде массива
         * @param m105m
         * @retuns {Array}
         */
        bus_articlesAll: function (m105m) {
            return yg54g_Storages_getCrips_B(stBedn, 0, yx23z_re);
        },

        /**
         * _@m80m. Получение @текста-статьи по @имени-файла-статьи
         * @param m105m
         * @param nm (2) -- @имя-файла-статьи, например 'p_10_p.html'
         * @returns
         */
        bus_articleText: function (m105m, nm) {
            return yg54g_Storages_readFi(nm);
        },

        /**
         * Получение m80m@obinter
         * @param m105m
         * @param aNm (2) -- m80m@имя-файла-статьи
         * @returns {object} m80m@obinter (объект-блока-пересечений)
         */
        bus_articleBinter: function (m105m, aNm) {

        },

        /**
         * Получение текста заголовка статьи (тег title) по имени-файла-статьи (1)
         * @param articleFileName (1) -- имя-файла-статьи, например "p_47_p.html"
         */
        bus_getTitle: function (articleFileName) {

        }
    }
}();

/*
 var eee = {
 "features": [
 {"attributes": {"CAD_NUM": "78:32:7503:3022", "OBJECT_ID": "78:32:7503:3022", "REGION_KEY": 178, "PARCEL_CN": "78:32:0007503:3022", "PARCEL_STATUS": null, "DATE_CREATE": 1346198400000, "DATE_REMOVE": null, "CATEGORY_TYPE": null, "AREA_VALUE": 2017, "AREA_TYPE": "008", "AREA_UNIT": "055", "RIGHT_REG": 0, "CAD_COST": 21242701.11, "CAD_UNIT": "383", "DATE_COST": 1358208000000, "ONLINE_ACTUAL_DATE": 1368057600000, "OBJECT_ADDRESS": "г.Санкт-Петербург, Московский проспект, дом 65", "DATE_LOAD": 1368057600000, "CI_SURNAME": null, "CI_FIRST": null, "CI_PATRONYMIC": null, "RC_DATE": null, "RC_TYPE": null, "CO_NAME": null, "CO_INN": null, "OBJECT_DISTRICT": null, "DISTRICT_TYPE": "неопр", "OBJECT_PLACE": null, "PLACE_TYPE": "неопр", "OBJECT_LOCALITY": null, "LOCALITY_TYPE": "неопр", "OBJECT_STREET": "Московский", "STREET_TYPE": "пр-кт", "OBJECT_HOUSE": "65", "OBJECT_BUILDING": null, "OBJECT_STRUCTURE": "Е", "OBJECT_APARTMENT": null, "UTIL_BY_DOC": null, "UTIL_CODE": null, "OKS_FLAG": 1, "OKS_TYPE": "building", "OKS_FLOORS": "1", "OKS_U_FLOORS": null, "OKS_ELEMENTS_CONSTRUCT": "061001001001", "OKS_YEAR_USED": "1950", "OKS_INVENTORY_COST": 21814268, "OKS_INN": null, "OKS_EXECUTOR": "ГУП \"ГУИОН\"", "YEAR_BUILT": null, "OKS_COST_DATE": 1325376000000, "FORM_RIGHTS": null, "OBJECTID": null, "SHAPE": null, "PARCEL_ID": null, "TEMP_ID": null, "PKK_ID": null, "PARENT_ID": null, "STATE_CODE": null, "ANNO_TEXT": null, "CP_VALUE": null, "CATEGORY_CODE": null, "ACTUAL_DATE": null, "ERROR_CODE": null, "XC": 3374691.0559658, "YC": 8378734.34783196, "XMIN": 3374320.7423, "XMAX": 3375063.9474, "YMIN": 8378063.4095, "YMAX": 8379368.3154, "DEL_FEATURE": null, "G_AREA": null, "SHAPE_Length": null, "SHAPE_Area": null, "OKS_ID": null, "CAD_NUM_OLD": null, "NAME": null, "PARCEL_CADNUM": null, "ERRORCODE": 1}}
 ],
 "featuresCount": 1, "debug": {"parseParametersTime": "00:00:00", "queryCountExecutionTime": "00:00:00.0090005", "countTableIsNull": false, "queryExecutionTime": "00:00:00.0920052", "queryExecution": {"createConnection": "00:00:00", "fillTable": "00:00:00.0920052"}, "dataTableIsNull": false, "queryToGDBExecutionTime": "00:00:00.0270016", "queryToGDBForOksExecutionTime": "00:00:00.0190011", "attachGdbDataToOracleDataExecutionTime": "00:00:00.0300017", "attachGdbDataToOracleDataDebugInfo": {"addFields": "00:00:00", "addRows": "00:00:00.0300017", "t1": "00:00:00", "t2": "00:00:00.0300017"}, "server": "ARCGIS6", "totalExecuteTime": "00:00:00.1770101"}
 }
 */



