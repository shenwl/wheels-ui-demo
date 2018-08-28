(function (window) {
    var svgSprite = '<svg><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M626.34496 121.8304c0 53.15072-43.07968 96.2304-96.2304 96.2304-53.1456 0-96.2304-43.07968-96.2304-96.2304C433.88928 68.67968 476.96896 25.6 530.11456 25.6c53.1456 0 96.2304 43.0848 96.2304 96.2304zM530.11456 833.9968c-46.50496 0-84.1984 37.69856-84.1984 84.1984s37.69856 84.1984 84.1984 84.1984 84.1984-37.69856 84.1984-84.1984-37.69344-84.1984-84.1984-84.1984z m398.18752-253.83936c-33.21856 0-60.14464-26.92096-60.14464-60.14464 0-33.21856 26.92608-60.14464 60.14464-60.14464 33.22368 0 60.14464 26.92608 60.14464 60.14464-0.00512 33.21856-26.9312 60.14464-60.14464 60.14464zM228.15744 520.0128c0-53.1456-43.07968-96.2304-96.2304-96.2304-53.1456 0-96.2304 43.07968-96.2304 96.2304 0 53.1456 43.07968 96.2304 96.2304 96.2304 53.15072 0 96.2304-43.0848 96.2304-96.2304z m88.448-349.59872c37.5808 37.5808 37.5808 98.5088 0 136.08448-37.5808 37.5808-98.5088 37.5808-136.0896 0s-37.5808-98.5088 0-136.0896 98.5088-37.5808 136.0896 0.00512z m444.03712 580.12672c-28.1856 28.1856-28.1856 73.8816-0.00512 102.0672 28.1856 28.1856 73.8816 28.1856 102.0672 0 28.1856-28.1856 28.1856-73.8816 0-102.0672-28.18048-28.19072-73.87648-28.19072-102.06208 0z m85.05856-478.06464c-18.7904 18.7904-49.25952 18.7904-68.03968 0-18.79552-18.79552-18.79552-49.25952 0-68.0448a48.09728 48.09728 0 0 1 68.03968 0c18.7904 18.7904 18.7904 49.25952 0 68.0448zM316.60544 733.52704c-37.5808-37.5808-98.5088-37.5808-136.0896 0s-37.5808 98.5088 0 136.08448c37.5808 37.5808 98.5088 37.5808 136.08448 0 37.5808-37.57568 37.5808-98.50368 0.00512-136.08448z" fill="#272536" ></path></symbol><symbol id="i-upload" viewBox="0 0 1024 1024"><path d="M653.215625 543.284375l-120-120a30 30 0 0 0-42.421875 0l-120 120a30 30 0 1 0 42.421875 42.421875L482 516.921875V849.5a30 30 0 0 0 60 0V516.921875l68.784375 68.784375a30 30 0 1 0 42.421875-42.421875z"  ></path><path d="M752 760H640a32 32 0 0 1 0-64h112c79.4 0 144-64.6 144-144a144 144 0 0 0-132.45-143.54 32 32 0 0 1-29.24-28C720.6 268.46 625 184 512 184s-208.6 84.46-222.31 196.45a32 32 0 0 1-29.24 28A144 144 0 0 0 128 552c0 79.4 64.6 144 144 144h112a32 32 0 0 1 0 64H272c-114.69 0-208-93.31-208-208a208.08 208.08 0 0 1 166.23-203.79C258 216.5 375 120 512 120s254 96.5 281.77 228.21A208.08 208.08 0 0 1 960 552c0 114.69-93.31 208-208 208z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M394.24 512L683.52 248.32c10.24-10.24 10.24-25.6 0-35.84-10.24-10.24-25.6-10.24-35.84 0l-307.2 279.04c-5.12 5.12-7.68 12.8-7.68 20.48 0 7.68 2.56 15.36 7.68 20.48l307.2 279.04c10.24 10.24 25.6 10.24 35.84 0 10.24-10.24 10.24-25.6 0-35.84L394.24 512z"  ></path></symbol><symbol id="i-thumbs-up" viewBox="0 0 1024 1024"><path d="M376.32 814.08H281.6c-40.96 0-76.8-33.28-76.8-76.8v-253.44c0-64 51.2-115.2 115.2-115.2h110.08v51.2h-110.08c-35.84 0-64 28.16-64 64v253.44c0 12.8 10.24 25.6 25.6 25.6h94.72v51.2zM714.24 814.08h-156.16v-51.2h120.32l46.08-122.88c38.4-87.04 61.44-197.12 25.6-232.96-20.48-23.04-71.68-17.92-140.8 12.8-7.68 2.56-15.36 2.56-17.92 2.56h-17.92v-51.2h23.04c89.6-38.4 153.6-38.4 192 2.56 76.8 79.36-5.12 266.24-15.36 289.28l-58.88 151.04z" fill="#333333" ></path><path d="M430.08 404.48l-51.2-5.12c2.56-17.92 17.92-171.52 89.6-217.6 23.04-15.36 48.64-17.92 76.8-7.68 92.16 33.28 79.36 204.8 76.8 225.28l-51.2-5.12c5.12-48.64 0-156.16-43.52-171.52-12.8-5.12-20.48-2.56-30.72 2.56-38.4 23.04-61.44 122.88-66.56 179.2zM325.12 396.8h51.2v394.24h-51.2z" fill="#333333" ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M320 230.8l41.4-38.8L704 512 361.4 832 320 793.4 621 512z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M514.56 720.384a183.552 183.552 0 0 1-25.6-1.792 181.248 181.248 0 0 1-82.432-324.864A25.6 25.6 0 1 1 435.2 435.2a130.048 130.048 0 1 0 184.32 179.2 25.6 25.6 0 0 1 41.728 29.44 181.76 181.76 0 0 1-39.68 40.704 179.2 179.2 0 0 1-107.008 35.84z" fill="" ></path><path d="M522.921285 383.226793m-24.826106 18.525038a30.976 30.976 0 1 0 49.652212-37.050076 30.976 30.976 0 1 0-49.652212 37.050076Z" fill="" ></path><path d="M617.604396 422.850009m-24.826106 18.525038a30.976 30.976 0 1 0 49.652212-37.050076 30.976 30.976 0 1 0-49.652212 37.050076Z" fill="" ></path><path d="M668.743343 515.389302m-24.826106 18.525038a30.976 30.976 0 1 0 49.652212-37.050076 30.976 30.976 0 1 0-49.652212 37.050076Z" fill="" ></path><path d="M421.632 956.416a30.976 30.976 0 0 1-7.168 0A423.68 423.68 0 0 1 204.8 834.304a30.72 30.72 0 0 1-4.608-35.84 75.008 75.008 0 0 0 6.912-16.64 76.8 76.8 0 0 0-72.448-96.256 30.72 30.72 0 0 1-28.672-22.016 422.656 422.656 0 0 1 0-242.432 30.72 30.72 0 0 1 28.672-22.016 76.8 76.8 0 0 0 72.448-96.512 76.8 76.8 0 0 0-6.912-16.64A30.72 30.72 0 0 1 204.8 250.112 423.68 423.68 0 0 1 414.464 128a30.72 30.72 0 0 1 33.28 13.824 74.496 74.496 0 0 0 11.008 14.336 78.848 78.848 0 0 0 108.544 0 76.8 76.8 0 0 0 11.008-14.336A30.72 30.72 0 0 1 611.84 128a423.424 423.424 0 0 1 209.92 122.112 30.72 30.72 0 0 1 4.608 35.84 76.8 76.8 0 0 0 65.536 113.408 30.72 30.72 0 0 1 28.672 22.016 422.656 422.656 0 0 1 0 242.432 30.72 30.72 0 0 1-28.672 22.016 74.24 74.24 0 0 0-64.768 38.144 74.752 74.752 0 0 0 0 75.008 30.72 30.72 0 0 1-4.608 35.84 423.68 423.68 0 0 1-210.176 121.344 30.72 30.72 0 0 1-33.28-13.824 76.8 76.8 0 0 0-119.552-14.336 74.24 74.24 0 0 0-11.008 14.336 30.72 30.72 0 0 1-26.88 14.08z m-158.208-150.016A362.24 362.24 0 0 0 409.6 890.624l6.144-6.656a138.496 138.496 0 0 1 195.584 0l6.144 6.656a362.24 362.24 0 0 0 145.408-84.224q-1.536-4.352-2.816-8.704a138.24 138.24 0 0 1 97.792-169.216l9.216-2.048a360.448 360.448 0 0 0 0-168.192l-9.216-2.048a138.24 138.24 0 0 1-97.792-169.216c0-2.816 1.792-5.888 2.816-8.704a361.984 361.984 0 0 0-145.664-84.224l-6.144 6.656a138.496 138.496 0 0 1-195.584 0L409.6 193.792a362.24 362.24 0 0 0-145.664 84.224c0 2.816 2.048 5.888 2.816 8.704a138.24 138.24 0 0 1-97.792 169.216l-9.216 2.048a360.704 360.704 0 0 0 0 168.192l9.216 2.048a138.24 138.24 0 0 1 97.792 169.216c-1.536 3.072-2.304 6.144-3.328 8.96z m537.6-98.304z" fill="" ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M768 352a224 224 0 0 1 0 448h-32a32 32 0 0 1 0-64h32a160 160 0 0 0 0-320 147.2 147.2 0 0 0-27.84 2.56 32 32 0 0 1-38.08-27.52 192 192 0 0 0-380.16 0 32 32 0 0 1-38.08 27.52A147.2 147.2 0 0 0 256 416a160 160 0 0 0 0 320h32a32 32 0 0 1 0 64h-32a224 224 0 0 1 0-448h8.32a256 256 0 0 1 495.36 0z"  ></path><path d="M480 608a32 32 0 0 1 64 0v288a32 32 0 0 1-64 0z"  ></path><path d="M600 746.88a32 32 0 0 1 48 42.24l-112 128a32 32 0 0 1-48 0l-112-128a32 32 0 1 1 48-42.24l88 100.48z"  ></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document, done = false, init = function () {
                if (!done) {
                    done = true;
                    fn()
                }
            };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)