import React, {useState} from 'react';

export const ConfigurationsContext = React.createContext();

export default function ConfigurationsProvidor({children}) {
    const [hideCompleted, setHideCompleted] = useState(true);
    const [sortedByDifficulty, setSortedByDifficulty] = useState(false);

    const state = {
        hideCompleted,
        sortedByDifficulty,
        setHideCompleted,
        setSortedByDifficulty
    };

    return (
        <ConfigurationsContext.Provider value={state}>
            {children}
        </ConfigurationsContext.Provider>
    );
}