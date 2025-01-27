/* eslint-disable react/prop-types */
import { useApi } from "../context/ContextApi";

function ThemeComponent({ children }) {
  const { theme } = useApi();

  return (
    <div className={theme}>
      <div className="bg-white dark:text-white dark:bg-[rgb(16,23,42)]">
        {children}
      </div>
    </div>
  );
}

export default ThemeComponent;
