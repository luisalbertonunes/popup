import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Window = (props) => {
    const [popup, setPopup] = useState({
        win: null,
        el: null,
    });

    useEffect(() => {
        let win = window.open('', '', 'width=600,height=400');
        win.document.title = 'A React portal window';
        let el = document.createElement('div');
        win.document.body.appendChild(el);
        setPopup({ win: win, el: el });

        return () => win.close();

    }, []);

    const { el } = popup;

    if (!el) { return null };

    return ReactDOM.createPortal(props.children, el);
}

export default Window;