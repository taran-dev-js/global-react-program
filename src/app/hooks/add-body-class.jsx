import * as React from 'react';

const useAddBodyClass = (className) => {
    React.useEffect(() => {
        document.body.classList.add(className);

        return () => {
            document.body.classList.remove(className);
        };
    }, [className]);
};

export { useAddBodyClass };