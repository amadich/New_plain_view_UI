function Login() {
   return ( 
   <>
         <form>
                  <label htmlFor="mail">E-mail : <input type="mail" placeholder="E-mail" /></label>
                  <label htmlFor="pwd">Password : <input type="password" placeholder="Password (8 Max Charcters)" /></label>
                  <label htmlFor="submit"><input type="submit" value="Login" /></label>
         </form>

   </>
    );
}

export default Login;