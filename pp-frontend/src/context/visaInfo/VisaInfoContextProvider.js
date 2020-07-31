import { VisaInfoStateContext, VisaInfoDispatchContext } from './VisaInfoContext';
import React, { useReducer } from 'react';
import VisaInfoReducer from './VisaInfoReducer';

export default function VisaInfoProvider({ children }) {
    const [state, dispatch] = useReducer(VisaInfoReducer, {
        visaInfo: [],
        fetchStatus: undefined,
    });

    return (
        <VisaInfoStateContext.Provider value={state}>
            <VisaInfoDispatchContext.Provider value={dispatch}>
                {children}
            </VisaInfoDispatchContext.Provider>
        </VisaInfoStateContext.Provider>
    );
}