import React from 'react';
import './index.css';

function Image()
 {
    const img1 = "https://picsum.photos/200/300";
    const img2 = "https://picsum.photos/250/300";
    const img3 = "https://picsum.photos/300/300";
    const img4 = "https://picsum.photos/350/300";
    const links = "https://www.codewithharry.com/videos/web-development-in-hindi-21";

    return <div className="img_div">
        <img src={img1} alt="random_Image"/>
        <img src={img2} alt="random_Image" />
        <img src={img3} alt="random_Image" />
        <a href={links} target="_anythink">
            <img src={img4} alt="random_Image" />
        </a>
    </div>
}

export default Image;