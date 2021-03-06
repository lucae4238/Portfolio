import { useEffect } from "react";

const useOutsideClick = (ref, action) => {
  useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      async function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              await action()
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref, action]);
}

export default useOutsideClick