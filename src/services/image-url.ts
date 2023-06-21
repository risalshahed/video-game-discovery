import no_img from '../assets/No_Image/no-img.webp';

const getCroppedImageUrl = (url: string) => {

    if(!url) return no_img;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;  // index where 'media/' ends
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageUrl;