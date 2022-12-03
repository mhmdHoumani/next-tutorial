import { Key } from "react";

export type UsersProps = {
    address: {
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    email: string;
    id: Key;
    name: string;
    phone: string;
    username: string;
    website: string;
};