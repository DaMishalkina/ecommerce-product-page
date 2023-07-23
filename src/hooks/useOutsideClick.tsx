import {RefObject, useEffect, useRef} from 'react';

const isExcludedRef = (ref: RefObject<unknown>) => {
    return ref && ref.current;
}
export const useOutsideClick = (callback: () => void, excludedRef: RefObject<HTMLElement>) => {
    const ref = useRef<HTMLDivElement | HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {

            if ((ref.current && !ref.current.contains(event.target as Node) && !isExcludedRef(excludedRef)) ||
                ((ref.current && !ref.current.contains(event.target as Node)
                && excludedRef.current && !excludedRef.current.contains(event.target as Node)))) {
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