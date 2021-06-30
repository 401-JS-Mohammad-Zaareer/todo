import { useContext } from "react";
import {ConfigurationsContext} from '../../context/configurations';

export default function ConfigurationsForm() {
    const configs = useContext(ConfigurationsContext);

    return (    
        <>
            <input
                type="checkbox"
                onClick={(e)=> {configs.setHideCompleted(!configs.hideCompleted)}}
            />
            <label>Show completed items</label>
            <br/>
            <input
                type="checkbox"
                onClick={(e)=> {configs.setSortedByDifficulty(!configs.sortedByDifficulty)}}
            />
            <label>Sort by difficulty</label>
        </>
    );
}