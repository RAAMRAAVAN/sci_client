import ImageSlider from './ImageSlider'
import { ImageSliderData } from '../../../lib/fetchData';
export default async function ImageSliderMain() {
    const images = ImageSliderData;
    return (<>
        <ImageSlider Images={images}/>
    </>);
}
