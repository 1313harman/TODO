const USERS_KEY = 'users';

export const userSignup = ({ fullname, mail, password }) => {
    let users = localStorage.getItem(USERS_KEY) || '[]';
    users = JSON.parse(users);

    const isExist = users.some(item => item.mail === mail);

    if (isExist) {
        return false;
    }

    users.push({ fullname, mail, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
};

export const userLogin = ({ mail, password }) => {
    let users = localStorage.getItem(USERS_KEY);
    if (users) {
        users = JSON.parse(users);
        const user = users.find(item => item.mail === mail && item.password === password);
        if (user) {
            return user;
        }
    }
    return false;
};
