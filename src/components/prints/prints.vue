<template></template>
<script>
export default {
    methods: {
        init (obj) {
            var this_ = this;
            if(undefined != obj){
                this_.writeIframe(obj);
            }
        },
        writeIframe: function (content) {
            var w, doc, iframe = document.createElement('iframe'),
                f = document.body.appendChild(iframe);
            iframe.id = "myIframe";
            iframe.style = "position:absolute;width:0;height:0;";

            w = f.contentWindow || f.contentDocument;
            doc = f.contentDocument || f.contentWindow.document;
            doc.open();
            doc.write(content);
            doc.close();
            this.toPrint(w);

            setTimeout(function () {
                document.body.removeChild(iframe)
            }, 100)
        },
        toPrint: function (frameWindow) {
            try {
                setTimeout(function () {
                    frameWindow.focus();
                    try {
                        if (!frameWindow.document.execCommand('print', false, null)) {
                            frameWindow.print();
                        }
                    } catch (e) {
                        frameWindow.print();
                    }
                    frameWindow.close();
                }, 10);
            } catch (err) {
                console.log('err', err);
            }
        }
    }
}
</script>
