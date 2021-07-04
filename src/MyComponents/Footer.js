import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        bottom : "0",
        width: "100%",
        height: "60px",
        marginTop: "200px"
    }   

    return (
        <footer className="bg-dark text-light py-3"  style={footerStyle}>
            <div>
                <p className="text-center">
                     Copyright &copy; MyTodosList.com
                </p>
            </div>
        </footer>
    )
}
