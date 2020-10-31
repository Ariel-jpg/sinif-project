export const CHANGE_THEME_REQUEST = "CHANGE_THEME_REQUEST";

export const userActions = {
    changeTheme: (themeName) => ({ type: CHANGE_THEME_REQUEST, themeName }),
}