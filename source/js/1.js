/**
 * Created by user199 on 3/6/2017.
 */

- (function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter43269724 = new Ya.Metrika({
                id:43269724,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true
            });
        } catch(e) { }
    });
    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");