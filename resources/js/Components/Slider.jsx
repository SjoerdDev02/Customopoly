import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const Slider = () => {
    const FIRST_IMAGE = {
        imageUrl: '/images/after.png'
    };

    const SECOND_IMAGE = {
        imageUrl: '/images/before.png'
    };

    return (
        <article>
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </article>
    );
};

export default Slider;