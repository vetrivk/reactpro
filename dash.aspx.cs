
< !DOCTYPE; html >
< html lang = "en" >
< head >
    < meta charset = "UTF-8" />
    < meta
        name = "viewport"
        content = "width=device-width, initial-scale=1, shrink-to-fit=no" />

    < !--Bootstrap Css link -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet" />
    <!-- font-awesome file link -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />

    <link href="../../css/Loginform.css" rel="stylesheet" />
    <title>Login Form</title>
   
</head>
<body>
    <!-- Login Form -->
    <form runat="server">
        <div = " container" >
            < div = "row justify-content-md-center" >
                < div = "col-12 col-md-11 col-lg-11" >
                    < div = "bg-white pb-md-5 pe-md-5 ps-md-5 pt-md-4 p-4 rounded shadow-sm" >

                        < div = "row " >
                            < div = "col-12" >
                                < div = "text-center" >
                           < !--Img Logo-- >
                                    < img src = "../../image/Logo1.png" alt = "HealthMart Logo"
                                        width = ""
                                        height = "70" />
                                </ div >
                            </ div >
                        </ div >
                        < div = "row gy-3 gy-md-4 overflow-hidden" >
                            < !--User Name-- >
                            < div = "col-12 " >
                                < div = "input-group" >
                                    < span = "input-group-text" >
                                        < i = "fas fa-user" style = "color: #154B52" ></ i >
                                    </ span >
                                    < asp:TextBox runat = "server" ID="txtUserId" CssClass="form-control p-md-2" placeholder="Username" ></asp:TextBox >
                                </ div >
                            </ div >
                            < !--Password-- >
                            < div = "col-12 " >
                                < div = "input-group" >
                                    < span = "input-group-text" >
                                        < i = "fas fa-lock" style = "color: #154B52" ></ i >
                                    </ span >
                                    < asp:TextBox runat = "server" ID="txtPassword" TextMode="Password" CssClass="form-control p-md-2" placeholder="Password"  ></asp:TextBox >
                                </ div >
                            </ div >
                            < !--Login Button-- >
                            < div = "col-12 mt-4 " >
                                < div = "d-grid" >
                                    < asp:Button runat = "server" ID="btnLogin" CssClass="btn btn-primary " Text="Log In" OnClick="btnLogin_Click" />
                                </div>
                            </div>
                            <!-- Login Button end -->

                        </div>
                         <div = "col-12 mt-4" >
                           < div = "d-grid" >
                          < asp:Label ID = "Lblmessage" runat="server" ></asp:Label >
                         </ div >
                    </ div >
                </ div >
            </ div >


</ div >
            </ div >
    </ form >






    < !--Bootstrap js file -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
}
}

classclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclassclass
