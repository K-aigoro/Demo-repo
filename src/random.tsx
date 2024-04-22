// import {Axios} from "axios";

// import { FC, useEffect } from "react";

// interface AppProps {
//     title: string;
// }

// const random: FC<AppProps> = ({ title }) => {
//     useEffect(() => {
//         const getUsers = async () => {
//             try {
//                 const { data } = await axios.get(
//                     'https://randomuser.me/api/?results=10'
//                 );
//                 console.log(data)
//             } catch (error) {
//                 console.log(error)
//             }
//         };
//         getUsers();
//     }, [])

//     // return <p>{data}</p>
// }

// export default random;

import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface AppProps {
    header: string

}
interface users{
    name: {
        first: string;
        last: string;
    };
    login: {
        uuid: string;
    }
    email: string;
}

const Random: FC<AppProps> = ({ header }) => {
    const [users, setUsers] = useState<users[]>([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const { data } = await axios.get(
                    'https://randomuser.me/api/?results=10'
                );
                console.log(data);
                setUsers(data.results);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);

    return (
        <div>
            <h1>{header}</h1>
            <ul>
                {users.map(({ login, name, email }) => {
                    return (
                        <li key={login.uuid}>
                            <div>
                                Name: {name.first} {name.last}
                            </div>
                            <div>Email: {email}</div>
                            <hr />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Random;