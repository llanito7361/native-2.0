import React, { useEffect } from 'react'
import { useAuthStore } from '../store/auth.store';

export function LoginPage() {
  const user = useAuthStore(state => state.user)
  //llamar solo lo q necesito, no {nombrada,mente}
  const authStatus = useAuthStore(state => state.status)
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(concha => concha.logout)



  // if( authStatus === 'checking') {
  // return <h3>waitin for your lofve..</h3>
  // }

  useEffect(() => {
    setTimeout(() => {
      logout()
    }, 3000)
  }, [])

  return (
    <div>
      <h3>LoginPage</h3>
      {/* &nbsp; */}
      {/* que muestra si esta autenticado */}
      {
        (authStatus === 'authenticated') ?
          (<div>autenticado como {JSON.stringify(user, null, 2)}</div>) :
          (<div>no autenticado</div>)
      }
      {/* botones de autenticacion */}
      {

        (authStatus === 'authenticated') ?
          (<button onClick={()=>logout()}>logout</button>) :
          (<button onClick={()=>login('ema','ema@asd.com')}>loggin</button>)

      }
    </div>
  )
}
