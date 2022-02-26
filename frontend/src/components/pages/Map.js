import React from 'react';

function Map() {
    return (
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
                {/* <style>.mapouter {position: relative;text-align:right;height:500px;width:600px;}</style> */}
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                {/* <style>.gmap_canvas {overflow: hidden;background:none!important;height:500px;width:600px;}</style> */}
            </div>
        </div>
    );
}

export default Map;
