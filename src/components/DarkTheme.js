import { useState } from "react";
import "bulma-switch";

const DarkTheme = () => {

    const [isDark, setIsDark] = useState(false);

    const changeTheme = () => {
        const htmlTag = document.documentElement;

        if (isDark) {
            htmlTag.classList.remove('theme-dark');
            htmlTag.classList.add('theme-light');
            setIsDark(false);
        } else {
            htmlTag.classList.remove('theme-light');
            htmlTag.classList.add('theme-dark');
            setIsDark(true);
        }
    }




        return (
            <div className="field">
                <input
                    id="switchRoundedDefault"
                    type="checkbox"
                    name="switchRoundedDefault"
                    className="switch is-rounded"
                    checked={!isDark && 'checked'}
                    onChange={changeTheme} />
                <label htmlFor="switchRoundedDefault"></label>
            </div>
        )
    }



export default DarkTheme;