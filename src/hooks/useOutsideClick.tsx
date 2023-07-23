import {RefObject, useEffect, useRef} from 'react';


export const useOutsideClick = (callback: () => void, excludedRef: RefObject<HTMLElement> | null = null) => {
    const ref = useRef<HTMLDivElement | HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Adding excludedRef in order to avoid two equal actions with polar effects, such as closing window
            // by clicking outside component and closing window by clicking on button
            let excludedRefCondition: boolean | null  = true;
            if (excludedRef !== null) {
                excludedRefCondition = excludedRef.current && !excludedRef.current.contains(event.target as Node)
            }
            if (ref.current && !ref.current.contains(event.target as Node) && excludedRefCondition) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback, excludedRef]);

    return ref;
};