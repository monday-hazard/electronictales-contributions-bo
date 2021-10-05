// Source : https://stackoverflow.com/a/46181/11724795
export const emailCheckingRegex =
    // eslint-disable-next-line
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Source : https://www.section.io/engineering-education/password-strength-checker-javascript/
export const passwordCheckingRegex =
    // eslint-disable-next-line
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{12,})/;
