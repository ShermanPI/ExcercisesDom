const d = document,
    n = navigator, 
    ua = n.userAgent; //userAgent String


export default function detectDevice(divId){
    const $form = d.getElementById(divId),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i), 
            windows: ()=> ua.match(/windows phone/i),
            any: function(){
                return this.android() || this.ios() || this.windows()
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: ()=> ua.match(/windows nt/i),
            any: function (){
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: ()=> ua.match(/chrome/i),
            safari: ()=> ua.match(/safari/i),
            firefox: ()=> ua.match(/firefox/i),
            opera: ()=> ua.match(/opera|opera mini/i),
            ie: ()=> ua.match(/msiel|iemobile/i),
            edge: ()=> ua.match(/edge/i),
            any: function(){
                return (
                    this.chrome()||
                    this.edge()||
                    this.chrome()||
                    this.safari() ||
                    this.firefox() ||
                    this.opera()
                );
            }
        }

        $form.innerHTML = `
        <ul>
            <li><b>User Agent</b>: ${ua}</li>
            <li><b>Sistema operativo</b>: ${isDesktop.any()}</li>
            <li><b>Sistema movil:</b> ${isMobile.any()}</li>
        </ul>
        `
}