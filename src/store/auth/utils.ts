export const setStorageAuth = (isAuth:boolean) =>{
 localStorage.setItem('isAuth',String(isAuth));
}

export const getStorageAuth = () =>{
 const isAuth = localStorage.getItem('isAuth');
 return isAuth === "true"
}