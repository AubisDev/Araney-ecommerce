import Swal from "sweetalert2"


export const takeSpacesOutFromString = (title: string) => {
    return title?.replaceAll(' ','-');
}


export const isUserIsLoggedIn = (user: string) => {
    return user ? true : false;
}   


export const askUserIfWantLogInAlert = () => {
    return Swal.fire({
        title: 'You need to be Logged in',
        text: "Do you want to log into you account?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff9800',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Take me to login page'
      }).then((result) => {
        if (result.isConfirmed) {
            return true
        }
      })
      return false;
}

export const sucessAlert = () => {
    Swal.fire(
        'Item added to cart!',
        'Added successfully',
        'success'
    )
}

