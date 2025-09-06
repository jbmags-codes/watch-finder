import { useState, useEffect } from 'react';

type SetValue<T> = (value: T | ((prevValue: T | null) => T)) => void;

function useSessionStorage<T>(key: string, initialValue?: T): [T | null, SetValue<T>] {
    const [value, setValue] = useState<T | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const storedValue = sessionStorage.getItem(key);
        if (storedValue !== null) {
            try {
                setValue(JSON.parse(storedValue));
            } catch {
                setValue(storedValue as unknown as T);
            }
        } else if (initialValue !== undefined) {
            setValue(initialValue);
            sessionStorage.setItem(key, JSON.stringify(initialValue));
        }
    }, [key, initialValue]);

    useEffect(() => {
        const handleManualChange = () => {
            const newValue = sessionStorage.getItem(key);
            if (newValue !== null) {
                try {
                    setValue(JSON.parse(newValue));
                } catch {
                    setValue(newValue as unknown as T);
                }
            } else {
                setValue(null);
            }
        };

        const customEventName = `sessionStorageChange:${key}`;
        window.addEventListener(customEventName, handleManualChange);

        return () => {
            window.removeEventListener(customEventName, handleManualChange);
        };
    }, [key]);

    const setStoredValue: SetValue<T> = (newValue) => {
        const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
        setValue(valueToStore);
        sessionStorage.setItem(key, JSON.stringify(valueToStore));
        window.dispatchEvent(new Event(`sessionStorageChange:${key}`));
    };

    return [value, setStoredValue] as const;
}

export default useSessionStorage;
