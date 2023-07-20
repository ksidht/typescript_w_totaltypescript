import { expect, it } from "vitest";

interface User {
    id: number,
    firstName: string,
    lastName: string,
    isAdmin: boolean;
}


const defaultUser: User = {}

const getUserId = (user: User) => {
    return user.id;
}


it("Should get a user id", () => {
    expect(getUserId(defaultUser)).toEqual(1);
})

