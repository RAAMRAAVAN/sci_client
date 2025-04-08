import Accomplishments from './Accomplishments'
import { fetchAccomplishments2 } from '../../../lib/fetchData';
export default async function ImageSliderMain() {
    const accomplishments = await fetchAccomplishments2();
    return (<>
        <Accomplishments accomplishments={accomplishments} />
    </>);
}