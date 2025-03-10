import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;



    return new User({
        avatar, // igual a avatar: avatar;
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    })
}