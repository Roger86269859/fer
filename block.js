<div id="adsense" style="position:absolute;left:-9999px;" >Adblock detector</div>
    <script type="text/javascript">
        function detectAdb(){
            var cookieName = "AdbDetector";
            var banner = document.getElementById('adsense');
            if (!getCookie(cookieName)) {
                //setCookie(cookieName, true, 1); // чтобы сообщение выдавалось не чаще одного раза в сутки
                var ch=banner.currentStyle || window.getComputedStyle(banner, null);
                ch=parseInt(ch.height); // получаю реальную высоту div - блока
                if (isNaN(ch) || (ch == 0)) {
                    alert("В вашем браузере установлено дополнение Adblock, которое частично блокирует функционал сайта." +
                        "\nРекомендуем отключить его на нашем сайте." +
                        "\nДля этого нажмите на красный значек ABR и выберите 'Отключить на "+document.location.hostname+"'");
                    // если вы не хотите успокаиваться, пока пользователь не отключит блокировщик
                    // добавьте здесь повторный вызов проверки:
                    // setTimeout("detectAdb();", 1000);
                }else{
                    console.log("Блокировщик рекламы выключен или отсутствует!");
                }
            }
            banner.style.display='none';
        }
        setTimeout("detectAdb();", 1000);
    </script>
