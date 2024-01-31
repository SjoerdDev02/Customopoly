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
        <div>
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </div>
    );
};

export default Slider;