import { useContent } from "../hook";
import { BrowesContainer } from "../containers/browse";
import SelectionFilter from "../utils/selection-filter";

export default function Browse(){
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = SelectionFilter({series, films});
    return (
        <>
            <BrowesContainer slides={slides}/>
        </>
    );
}