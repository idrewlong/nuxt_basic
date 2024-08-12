// auth.global.ts 
// use global to push to all pages 


export default defineNuxtRouteMiddleware((to, from) => {
   // const isLoggedIn = false; 
   // to this destination 
   // console.log(to);
   // if (isLoggedIn) {
      //redirect to page we want to go
   //    return navigateTo("/");
   // }
   // redirect
   // return navigateTo("/about");

   console.log("hello from middleware");
})
