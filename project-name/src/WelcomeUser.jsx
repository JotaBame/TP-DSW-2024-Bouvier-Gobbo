 
 
 
export function WelcomeUser({ name, role = "viewer", user, children  }) {
  
  const Image = children;
  if (user == null)
    return(<><h1>¡Hola {name}, {role}!</h1>, {children} </>);
  else
    return <h1>¡Hola {user.name}, please dont leak my address!</h1>;
   
}
 