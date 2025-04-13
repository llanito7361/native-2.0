import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import type { ReqResUserListResponse, User, } from '../interfaces'



                        // pasandole la prop, definiendo su tipo : y dandole un defaultValue
const loadUsers = async (page:number=1): Promise<User[]> => {
    const REQRES = 'https://reqres.in/api/users'
    try {
        const { data } = await axios.get<ReqResUserListResponse>(REQRES,
            // 2do parametro hace cosas re locas
            {
                params: {
                    page: page
                }
            } 
        )
        return data.data
    } catch (error) {
        console.log(error)
        return []
    }

}


export const UsersPage = () => {

    const [usuarios, setUsuarios] = useState<User[]>([])
    // useEffect(()=>{
    // fetch('https://reqres.in/api/users?page=2')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])

    //     const REQRES = 'https://reqres.in/api/users?page=2'
    //     const PLACEHOLDER = 'https://jsonplaceholder.typicode.com/users'

    //     useEffect(()=>{
    //     axios.get<ReqResUserListResponse>(REQRES)
    //         .then(resp => console.log(resp.data.data.at(1)))
    // },[])usuariosCheveres
    const currentPageRef = useRef(1)

    useEffect(() => {
        // loadUsers().then(usuariosCheveres => setUsuarios(usuariosCheveres))
        loadUsers(currentPageRef.current).then(setUsuarios)
    }, [])

    const prevPage = async () => {
        currentPageRef.current++
         loadUsers(currentPageRef.current)
    }
    const nextPage = async () => {
        // sale si pag = 0
        if (currentPageRef.current < 1) return

        currentPageRef.current--
        loadUsers(currentPageRef.current)

    }
    


    if (usuarios) console.log(currentPageRef.current)

    return (
        <div>
            <h3>jorge usuarios</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr> */}
                    {/* <td>avatar</td>
                    <td>nombre</td>
                    <td>email</td> */}
                    {
                        usuarios.map((user) => (
                            // <tr key={id}>
                            //     <td><img style={{width:'50px'}} src={avatar} alt={avatar}/></td>
                            //     <td>{email}</td>
                            //     <td>{first_name}</td>
                            // </tr>
                            <UserRow key={user.id} user={user} />
                        ))
                    }
                    {/* </tr> */}
                </tbody>
            </table>
            {/* pagination */}
            <div className="">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}

interface Props {
    user: User;
}
//               props y hasta un React.memo para   
const UserRow = ({ user }: Props) => {

    const { id, email, first_name, avatar } = user

    return (
        <tr key={id}>
            <td><img style={{ width: '50px' }} src={avatar} alt={avatar} /></td>
            <td>{email}</td>
            <td>{first_name}</td>
        </tr>
    )
}

export default UserRow