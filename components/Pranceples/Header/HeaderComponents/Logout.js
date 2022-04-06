import React from 'react'

const Logout = () => {
    const Handellogout = async () => {
    const response = await fetch("/api/auth/user/logout", {
      method: "put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        login: false,
      }),
    });
    const data = await response.json();
    if (data) {
      if (data.logout) {
        Cookies.remove("user");
        dispatch(UserLogOut());
        router.push("/");
      }
    } else {
      alert(`Erro : ${data.error}`);
    }
  };

  return (
    <div>Logout</div>
  )
}

export default Logout