import { useEffect } from "react";

export const useKey = (key, action) => {
  useEffect(() => {
    const callBack = (event) => {
      if (event.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener("keydown", callBack);
  }, [key, action]);
};
